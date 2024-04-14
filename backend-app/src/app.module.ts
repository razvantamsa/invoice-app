import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { InvoiceModule } from './invoice/invoice.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/passport/jwt.guard';
import { PaginationMiddleware } from './pagination/pagination.middleware';

@Module({
  imports: [DatabaseModule, InvoiceModule, AuthModule, ConfigModule.forRoot()],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PaginationMiddleware)
      .forRoutes({ path: 'invoices', method: RequestMethod.GET });
  }
}
