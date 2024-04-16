/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Invoice } from "../invoice-table/invoice.interface";
import "./PopupModal.scss";
import { useSelector } from "react-redux";
import IState from "../../state/state.interface";
import { getInvoice } from "../../utils/requests";

interface PopupModalProps {
  isModalOpen: Invoice;
  setIsModalOpen: Dispatch<SetStateAction<Invoice | null>>;
}

const PopupModal: React.FC<PopupModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const { accessToken } = useSelector((state: IState) => state.auth);
  const [completeInvoice, setCompleteInvoice] = useState<Invoice>(isModalOpen);
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(true);

  const { data, isLoading, error, refetch }: any = useQuery(
    [accessToken, isModalOpen],
    () => {
      return getInvoice({
        id: isModalOpen.id,
        accessToken: accessToken || "",
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
    if (!isLoading && data) {
      setShouldRefetch(false);
      setCompleteInvoice(data);
    }
  }, [data, isLoading]);

  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(null)}>
      {!error ? (
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2>Invoice #{completeInvoice.id}</h2>
          <div>From: {completeInvoice.vendor_name}</div>
          <div>Description: {completeInvoice.description}</div>
          <div>Due Date: {completeInvoice.due_date}</div>
          <div>Amount: ${completeInvoice.amount}</div>
          <div>Status: {completeInvoice.paid ? "Open" : "Closed"}</div>
          <button onClick={() => setIsModalOpen(null)}>Close</button>
        </div>
      ) : (
        <div className="modal-error">
          <h2>Invoice #{isModalOpen.id}</h2>
          <div>Error: {JSON.parse(error.message).statusText}</div>
        </div>
      )}
    </div>
  );
};

export default PopupModal;
