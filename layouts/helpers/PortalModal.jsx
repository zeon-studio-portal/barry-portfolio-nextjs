"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const PortalModal = ({ children, refProp, ...rest }) => {
  useEffect(() => {
    // Add class to disable scroll
    document.body.classList.add("overflow-hidden");

    // Cleanup function to remove class
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return createPortal(
    <div
      ref={refProp}
      {...rest}
      className="fixed inset-0 bg-black/60 backdrop-blur-lg z-[999] flex justify-center items-center"
    >
      {children}
    </div>,
    document.body
  );
};

const Close = ({ handleClose }) => (
  <button onClick={handleClose} className="absolute top-4 right-4 text-white text-2xl">
    &times;
  </button>
);

PortalModal.Close = Close;

export default PortalModal;
