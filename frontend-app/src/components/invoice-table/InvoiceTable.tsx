import React from "react";
import "./InvoiceTable.scss";

// Define Invoice type
interface Invoice {
  id: number;
  payee: string;
  date: string;
  description: string;
  amount: number;
  status: string;
}

// Sample data for demonstration
const invoices: Invoice[] = [
  {
    id: 1,
    payee: "Amazon",
    date: "2024-04-15",
    description: "Invoice 1",
    status: "open",
    amount: 100,
  },
  {
    id: 2,
    payee: "Amazon",
    date: "2024-04-16",
    description: "Invoice 2",
    status: "open",
    amount: 200,
  },
  {
    id: 3,
    payee: "Amazon",
    date: "2024-04-17",
    description: "Invoice 3",
    status: "open",
    amount: 150,
  },
  {
    id: 1,
    payee: "Amazon",
    date: "2024-04-15",
    description: "Invoice 1",
    status: "open",
    amount: 100,
  },
];

const InvoiceItem: React.FC<{ invoice: Invoice }> = ({ invoice }) => {
  return (
    <tr key={invoice.id} className="invoice-item">
      <td>{invoice.id}</td>
      <td>{invoice.payee}</td>
      <td>{invoice.date}</td>
      <td>{invoice.description}</td>
      <td>${invoice.amount}</td>
      <td>{invoice.status}</td>
    </tr>
  );
};

const InvoiceTable: React.FC = () => {
  return (
    <div className="invoice-table-container">
      <table className="invoice-table">
        <thead className="invoice-table-head">
          <tr>
            <th>ID</th>
            <th>Payee</th>
            <th>Due Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
