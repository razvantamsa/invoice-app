import { User, PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import 'dotenv/config';

import BcryptUtils from './src/common/bcrypt.utils';

const { DATABASE_URL, BCRYPT_SALTROUNDS, BCRYPT_PEPPER } = process.env;

if (!DATABASE_URL || !BCRYPT_SALTROUNDS || !BCRYPT_PEPPER) {
  throw new Error(
    'Environment variables not set, required: DATABASE_URL, BCRYPT_SALTROUNDS, BCRYPT_PEPPER',
  );
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
});

async function seedUsers(): Promise<User[]> {
  const numberOfUsers = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  console.log(`Seeding ${numberOfUsers} users... \n\n\n\n`);

  const usersSeeded: User[] = [];

  for (let i = 0; i < numberOfUsers; i++) {
    const uuid: string = uuidv4();

    const user: User = await prisma.user.create({
      data: {
        email: `user${uuid}@example.com`,
        name: `User ${uuid}`,
        password: await BcryptUtils.hashPassword(
          'password',
          parseInt(BCRYPT_SALTROUNDS),
          BCRYPT_PEPPER,
        ),
      },
    });

    console.log(`Created User: ${user.id}`);
    usersSeeded.push(user);
  }

  return usersSeeded;
}

async function seedInvoices(users: User[]) {
  const numberOfInvoices = Math.floor(Math.random() * (2000 - 200 + 1)) + 200;
  console.log(`Seeding ${numberOfInvoices} invoices... \n\n\n\n`);

  for (let i = 0; i < numberOfInvoices; i++) {
    const uuid: string = uuidv4();

    const invoice = await prisma.invoice.create({
      data: {
        user_id: users[Math.floor(Math.random() * users.length)].id,
        vendor_name: `Vendor ${uuid}`,
        amount: Math.random() * 1000,
        due_date: new Date(
          Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000,
        ),
        description: `Invoice ${uuid}`,
        paid: Math.random() < 0.5,
      },
    });

    console.log(`Created Invoice: ${invoice.id}`);
  }
}

async function seedDatabase() {
  // Seed Users
  const users = await seedUsers();

  // Seed Invoices
  await seedInvoices(users);
}

seedDatabase()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
