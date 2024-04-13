import { Injectable } from '@nestjs/common';
import { InvoiceDAO } from 'src/database/invoice.dao';

@Injectable()
export class InvoiceService {
  constructor(private invoiceDAO: InvoiceDAO) {}

  async aggregateAmountOfTotals() {
    return this.invoiceDAO.sumOfAmount();
  }

  async getInvoice(id: string) {
    return this.invoiceDAO.findOne(id);
  }

  async getAllInvoices() {
    return this.invoiceDAO.findAll();
  }
}
