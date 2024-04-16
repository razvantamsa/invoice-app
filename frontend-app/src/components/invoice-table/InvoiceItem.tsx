import React, { Dispatch, SetStateAction } from "react";
import { Invoice } from "./invoice.interface";
import "./InvoiceItem.scss";

interface InvoiceItemProps {
  invoice: Invoice;
  setIsModalOpen: Dispatch<SetStateAction<Invoice | null>>;
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({
  invoice,
  setIsModalOpen,
}) => {
  return (
    <tr
      key={invoice.id}
      className="invoice-item"
      onClick={() => setIsModalOpen(invoice)}
    >
      <td>{invoice.id}</td>
      <td>{invoice.vendor_name}</td>
      <td>${invoice.amount}</td>
      <td>{invoice.paid ? "Open" : "Closed"}</td>
    </tr>
  );
};

export default InvoiceItem;
