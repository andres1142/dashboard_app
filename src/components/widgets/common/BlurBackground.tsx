import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

function BlurBackground({ children }: ModalProps) {
  return (
    <div
      id="blur-background"
      className="fixed inset-0 bg-primary_purple bg-opacity-75 transition-opacity delay-1000"
    >
      <div
        id="blur-content"
        className="flex justify-center items-center w-full h-full"
      >
        {children}
      </div>
    </div>
  );
}

export default BlurBackground;
