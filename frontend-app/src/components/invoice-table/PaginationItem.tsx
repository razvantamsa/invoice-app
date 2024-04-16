import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./PaginationItem.scss";

const PaginationItem: React.FC = () => {
  return (
    <div className="pagination-container">
      <FontAwesomeIcon icon={faArrowLeft} className="pagination-icon" />
      <div className="pagination-number">Page 1</div>
      <FontAwesomeIcon icon={faArrowRight} className="pagination-icon" />
    </div>
  );
};

export default PaginationItem;
