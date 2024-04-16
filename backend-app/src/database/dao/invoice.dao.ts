import { Injectable } from '@nestjs/common';
import { Prisma } from '../prisma';
import { Invoice } from '@prisma/client';

@Injectable()
export class InvoiceDAO {
  constructor(private prisma: Prisma) {}

  async findOne(id: string, userId: string): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({ where: { id, user_id: userId } });
  }

  async findAll(
    userId: string,
    offset: number,
    limit: number,
  ): Promise<Partial<Invoice>[]> {
    return this.prisma.invoice.findMany({
      where: { user_id: userId },
      skip: offset,
      take: limit,
      select: {
        id: true,
        vendor_name: true,
        amount: true,
        paid: true,
      },
    });
  }

  async sumOfAmount(userId: string): Promise<number> {
    const result = await this.prisma.invoice.aggregate({
      where: {
        user_id: userId,
      },
      _sum: {
        amount: true,
      },
    });

    return result._sum.amount || 0;
  }
}
