import React from "react";

interface AuthContainerProps {
  children: React.ReactNode;
  className?: string;
}

function AuthContainer({ children, className }: AuthContainerProps) {
  return (
    <div
      className={`${className} flex h-5/6 flex-col items-center justify-center rounded-xl bg-secondary_purple p-5 
      text-primary_purple shadow-lg shadow-secondary_purple-100`}
    >
      {children}
    </div>
  );
}

export default AuthContainer;
