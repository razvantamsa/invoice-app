import { Module } from '@nestjs/common';
import { InvoiceModule } from './invoice/invoice.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [InvoiceModule, UserModule, AuthModule, DatabaseModule],
})
export class AppModule {}
