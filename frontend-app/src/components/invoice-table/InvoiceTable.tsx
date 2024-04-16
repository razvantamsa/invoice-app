import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import "./InvoiceTable.scss";
// import testInvoices from "./dummy.data";
import InvoiceItem from "./InvoiceItem";
import { Invoice } from "./invoice.interface";
import PaginationItem from "./PaginationItem";
import { getInvoices } from "../../utils/requests";
import IState from "../../state/state.interface";

const PAGE_SIZE = 5;

const InvoiceTable: React.FC = () => {
  const { accessToken } = useSelector((state: IState) => state.auth);
  const [offset, setOffset] = useState<number>(0);
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const { data, isLoading, isError, refetch } = useQuery(
    [offset, offset, PAGE_SIZE],
    () =>
      getInvoices({
        accessToken: accessToken || "",
        offset,
        limit: offset + PAGE_SIZE,
      }),
    {
      enabled: false,
    }
  );
  console.log(data);

  useEffect(() => {
    refetch();
    // const fetchedInvoices = [...testInvoices].slice(offset, offset + PAGE_SIZE);
    // setInvoices(fetchedInvoices);
  }, [refetch]);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setInvoices(data);
    }
  }, [data, isLoading, isError]);

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
