import React, { Dispatch, SetStateAction } from "react";
import "./PopupModal.scss";
import { Invoice } from "../invoice-table/invoice.interface";

interface PopupModalProps {
  isModalOpen: Invoice;
  setIsModalOpen: Dispatch<SetStateAction<Invoice | null>>;
}

const PopupModal: React.FC<PopupModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Invoice #{isModalOpen.id}</h2>
        <td>From: {isModalOpen.vendor_name}</td>
        <td>Description: {isModalOpen.description}</td>
        <td>Due Date: {isModalOpen.due_date}</td>
        <td>Amount: ${isModalOpen.amount}</td>
        <td>Status: {isModalOpen.paid ? "Open" : "Closed"}</td>
        <button onClick={() => setIsModalOpen(null)}>Close</button>
      </div>
    </div>
  );
};

export default PopupModal;
