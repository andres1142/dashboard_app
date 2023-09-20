import React from "react";

interface ModalProps {
  children: React.ReactNode;
  z_level: string;
}

function Modal({ children, z_level }: ModalProps) {
  return (
    <div className={`fixed ${z_level} inset-0 overflow-y-auto`}>
      <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center h-screen">
        {/*Background div*/}
        <div
          className="fixed inset-0 bg-primary_purple bg-opacity-75 transition-opacity delay-1000"
          aria-hidden="true"
        />

        {/*Modal Container*/}
        <div className="w-1/2 inline-block bg-secondary_purple rounded-lg px-4 pt-5 pb-4 shadow-xl transform transition-all delay-1000">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
