import { Controller, Get, Param, Request } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { UserRequestDto } from 'src/common/user-request.dto';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('total')
  async aggregateAmountOfTotals(
    @Request() req: { user: Required<UserRequestDto> },
  ) {
    return this.invoiceService.aggregateAmountOfTotals(req.user.userId);
  }

  @Get(':id')
  async getInvoice(@Request() req, @Param('id') id: string) {
    return this.invoiceService.getInvoice(id, req.user.userId);
  }

  @Get()
  async getAllInvoices(@Request() req: { user: Required<UserRequestDto> }) {
    return this.invoiceService.getAllInvoices(req.user.userId);
  }
}
