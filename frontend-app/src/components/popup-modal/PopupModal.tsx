import React, { Dispatch, SetStateAction } from "react";
import "./PopupModal.scss";
import { Invoice } from "../invoice-table/invoice.interface";

interface PopupModalProps {
  isModalOpen: Invoice | null;
  setIsModalOpen: Dispatch<SetStateAction<Invoice | null>>;
}

const PopupModal: React.FC<PopupModalProps> = ({ setIsModalOpen }) => {
  return (
    <div className="modal-overlay" onClick={() => setIsModalOpen(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button onClick={() => setIsModalOpen(null)}>Close</button>
      </div>
    </div>
  );
};

export default PopupModal;
