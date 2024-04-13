import { Module } from '@nestjs/common';
import { InvoiceModule } from './invoice/invoice.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [InvoiceModule, UserModule],
})
export class AppModule {}
