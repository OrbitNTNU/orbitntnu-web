import React from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { FaCompress } from "react-icons/fa";

interface IModal extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  onClose(): void;
}

const Modal = ({ children, onClose, className }: IModal) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-900 opacity-90 flex justify-end items-start p-11 cursor-pointer"
        onClick={onClose}
      >
        <FaCompress className="text-2xl" />
      </div>
      <div className="fixed inset-8 top-20 md:inset-24 flex items-center justify-center">
        <div className={className}>{children}</div>
      </div>
    </div>,
    document.querySelector("#___gatsby") as HTMLDivElement
  );
};

export default Modal;
