import React, { useEffect, useState } from "react";
import "./InvoiceTable.scss";
import testInvoices from "./dummy.data";
import InvoiceItem from "./InvoiceItem";
import { Invoice } from "./invoice.interface";
import PaginationItem from "./PaginationItem";

const PAGE_SIZE = 5;

const InvoiceTable: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  useEffect(() => {
    const fetchedInvoices = [...testInvoices].slice(offset, offset + PAGE_SIZE);
    setInvoices(fetchedInvoices);
  }, [offset]);

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
      <PaginationItem offset={offset} setOffset={setOffset} />
    </div>
  );
};

export default InvoiceTable;
