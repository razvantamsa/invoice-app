import { Module } from '@nestjs/common';
import { Prisma } from './prisma';
import { InvoiceDAO } from './dao/invoice.dao';
import { UserDAO } from './dao/user.dao';

@Module({
  providers: [Prisma, InvoiceDAO, UserDAO],
  exports: [InvoiceDAO, UserDAO],
})
export class DatabaseModule {}
