import React, { useEffect, useState } from "react";
import "./InvoiceTable.scss";
import testInvoices from "./dummy.data";
import InvoiceItem from "./InvoiceItem";
import { Invoice } from "./invoice.interface";
import PaginationItem from "./PaginationItem";

const InvoiceTable: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    setInvoices(testInvoices);
  }, []);

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
          {invoices.slice(offset, offset + 10).map((invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} />
          ))}
        </tbody>
      </table>
      <PaginationItem />
    </div>
  );
};

export default InvoiceTable;
