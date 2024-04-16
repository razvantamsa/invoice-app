import React, { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./PaginationItem.scss";

interface PaginationItemProps {
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
}

const PaginationItem: React.FC<PaginationItemProps> = ({
  offset,
  setOffset,
}: PaginationItemProps) => {
  function changePagination(action: string) {
    if (action === "next") {
      const newOffset = offset + 5;
      setOffset(newOffset);
    }
    if (action === "prev") {
      const newOffset = offset - 5;
      if (newOffset < 0) {
        return;
      }
      setOffset(newOffset);
    }
  }

  return (
    <div className="pagination-container">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="pagination-icon"
        onClick={() => changePagination("prev")}
      />
      <div className="pagination-number">Page {Number(offset / 5) + 1}</div>
      <FontAwesomeIcon
        icon={faArrowRight}
        className="pagination-icon"
        onClick={() => changePagination("next")}
      />
    </div>
  );
};

export default PaginationItem;
