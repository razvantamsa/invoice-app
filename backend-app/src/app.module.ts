import { Module } from '@nestjs/common';
import { InvoiceModule } from './invoice/invoice.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [DatabaseModule, InvoiceModule, AuthModule, ConfigModule.forRoot()],
})
export class AppModule {}
