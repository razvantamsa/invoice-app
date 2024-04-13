import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma';
import { Invoice } from '@prisma/client';

@Injectable()
export class InvoiceDAO {
  constructor(private prisma: Prisma) {}

  async findOne(id: string): Promise<Invoice | null> {
    return this.prisma.invoice.findUnique({ where: { id } });
  }
}
