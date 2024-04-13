import { Injectable } from '@nestjs/common';
import { InvoiceDAO } from 'src/database/invoice.dao';

@Injectable()
export class InvoiceService {
  constructor(private invoiceDAO: InvoiceDAO) {}
  async aggregateAmountOfTotals() {
    return 'total';
  }

  async getInvoice(id: string) {
    return this.invoiceDAO.findOne(id);
  }

  async getAllInvoices() {
    return 'all';
  }
}
