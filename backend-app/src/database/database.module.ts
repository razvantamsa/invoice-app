import { Module } from '@nestjs/common';
import { Prisma } from './prisma';

@Module({
  providers: [Prisma],
})
export class DatabaseModule {}
