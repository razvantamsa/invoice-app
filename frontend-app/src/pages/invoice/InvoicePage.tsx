import React from "react";
import InvoiceTable from "../../components/invoice-table/InvoiceTable";
import "./InvoicePage.scss";
import Navbar from "../../components/navbar/Navbar";

const InvoicePage: React.FC = () => {
  return (
    <div className="invoice-page-container">
      <Navbar />
      <InvoiceTable />
    </div>
  );
};

export default InvoicePage;
