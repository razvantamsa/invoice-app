import { Injectable } from '@nestjs/common';
import { InvoiceDAO } from 'src/database/dao/invoice.dao';

@Injectable()
export class InvoiceService {
  constructor(private invoiceDAO: InvoiceDAO) {}

  async aggregateAmountOfTotals(userId: string) {
    return this.invoiceDAO.sumOfAmount(userId);
  }

  async getInvoice(id: string, userId: string) {
    return this.invoiceDAO.findOne(id, userId);
  }

  async getAllInvoices(userId: string) {
    return this.invoiceDAO.findAll(userId);
  }
}
