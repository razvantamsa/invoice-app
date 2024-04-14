import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const { DATABASE_URL } = process.env;
console.log(DATABASE_URL);

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

async function seedDatabase() {
  // Seed Users
  for (let i = 0; i < 1000; i++) {
    const email = `user${i}@example.com`;
    const name = `User ${i}`;
    const password = 'password';
    await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });
  }

  // Seed Invoices
  const users = await prisma.user.findMany();
  for (let i = 0; i < 1000; i++) {
    const userId = users[Math.floor(Math.random() * users.length)].id;
    const vendor_name = `Vendor ${i}`;
    const amount = Math.random() * 1000;
    const due_date = new Date(
      Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000,
    );
    const description = `Invoice ${i}`;
    const paid = Math.random() < 0.5;

    await prisma.invoice.create({
      data: {
        user_id: userId,
        vendor_name,
        amount,
        due_date,
        description,
        paid,
      },
    });
  }
}

seedDatabase()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
