import { Module } from '@nestjs/common';
import { Prisma } from './prisma';
import { InvoiceDAO } from './dao/invoice.dao';

@Module({
  providers: [Prisma, InvoiceDAO],
  exports: [InvoiceDAO],
})
export class DatabaseModule {}
