import React from "react";

const Modal = ({ onClose, children, showCloseButton }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        {showCloseButton && (
          <div className="flex justify-end">
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              Close
            </button>
          </div>
        )}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
