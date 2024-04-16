/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";

import "./InvoiceTable.scss";
import InvoiceItem from "./InvoiceItem";
import { Invoice } from "./invoice.interface";
import PaginationItem from "./PaginationItem";
import { getInvoices } from "../../utils/requests";
import IState from "../../state/state.interface";
import { logout } from "../../state/auth.slice";
import PopupModal from "../popup-modal/PopupModal";

const PAGE_SIZE = 5;

const InvoiceTable: React.FC = () => {
  const { accessToken } = useSelector((state: IState) => state.auth);
  const dispatch = useDispatch();

  const [offset, setOffset] = useState<number>(0);
  const [prevOffset, setPrevOffset] = useState<number>(0);
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(true);

  const [isModalOpen, setIsModalOpen] = useState<Invoice | null>(null);

  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const { data, error, refetch }: any = useQuery(
    [accessToken, offset],
    () => {
      return getInvoices({
        accessToken: accessToken || "",
        offset,
        limit: PAGE_SIZE,
      });
    },
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (shouldRefetch) {
      refetch();
      setShouldRefetch(false);
    }
  }, [shouldRefetch, refetch]);

  useEffect(() => {
    if (data) {
      if (!data.length) {
        setShouldRefetch(false);
        setOffset(prevOffset);
        return;
      }
      setInvoices(data);
    }
    if (error && JSON.parse(error.message).status) {
      dispatch(logout());
    }
  }, [data, error, dispatch, prevOffset]);

  return (
    <div className="invoice-table-container">
      <table className="invoice-table">
        <thead className="invoice-table-head">
          <tr>
            <th>ID</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <InvoiceItem
              key={invoice.id}
              invoice={invoice}
              setIsModalOpen={setIsModalOpen}
            />
          ))}
        </tbody>
      </table>
      <PaginationItem
        offset={offset}
        setOffset={setOffset}
        setPrevOffset={setPrevOffset}
        setShouldRefetch={setShouldRefetch}
      />
      {isModalOpen && (
        <PopupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default InvoiceTable;
