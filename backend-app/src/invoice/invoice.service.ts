import { Injectable } from '@nestjs/common';

@Injectable()
export class InvoiceService {
  async aggregateAmountOfTotals() {
    return 'total';
  }

  async getInvoice(id: string) {
    return id;
  }
}
