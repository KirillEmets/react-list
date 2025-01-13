import React from "react";
import { FaTrash, FaCopy } from "react-icons/fa";

const KekItem = ({ title, text, onDelete, onCopy }) => {
  return (
    <div className="kek-item">
      <div className="kek-item-content">
        <h3 className="kek-item-title">{title}</h3>
        <div className="kek-item-text">{text}</div>
      </div>

      <div className="kek-item-actions-row">
        <FaCopy className="kek-item-action" onClick={onCopy} />
        <FaTrash className="kek-item-action" onClick={onDelete} />
      </div>
    </div>
  );
};

export default KekItem;
