import { Invoice } from "./invoice.interface";

const invoices: Invoice[] = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  payee: "Amazon",
  date: "2024-04-15",
  description: "Invoice 1",
  status: "open",
  amount: 100,
}));

export default invoices;
