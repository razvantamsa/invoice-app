import { Injectable } from '@nestjs/common';
import { Prisma } from '../prisma';
import { Invoice } from '@prisma/client';

@Injectable()
export class InvoiceDAO {
  constructor(private prisma: Prisma) {}

  async findOne(id: string): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  async findAll(): Promise<Invoice[]> {
    return this.prisma.invoice.findMany();
  }

  async sumOfAmount(): Promise<number> {
    const result = await this.prisma.invoice.aggregate({
      _sum: {
        amount: true,
      },
    });

    return result._sum.amount || 0;
  }
}
