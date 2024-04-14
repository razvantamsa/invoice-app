import { Module } from '@nestjs/common';
import { InvoiceModule } from './invoice/invoice.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, InvoiceModule, AuthModule],
})
export class AppModule {}
