import React from "react";
import { Invoice } from "./invoice.interface";
import "./InvoiceItem.scss";

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

export default InvoiceItem;
