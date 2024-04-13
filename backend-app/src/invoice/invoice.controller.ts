import { Controller, Get, Param } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('total')
  async aggregateAmountOfTotals() {
    return this.invoiceService.aggregateAmountOfTotals();
  }

  @Get(':id')
  async getInvoice(@Param('id') id: string) {
    return this.invoiceService.getInvoice(id);
  }

  @Get()
  async getAllInvoices() {
    return this.invoiceService.getAllInvoices();
  }
}
