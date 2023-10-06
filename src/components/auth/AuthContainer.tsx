import React from "react"

interface AuthContainerProps {
  children: React.ReactNode
  className?: string
}

function AuthContainer({ children, className }: AuthContainerProps) {
  return (
    <div
      className={`${className} flex h-5/6 flex-col items-center justify-center rounded-xl bg-secondary_gray p-5 
      text-secondary_white-100 shadow-xl shadow-secondary_gray-100/50`}
    >
      {children}
    </div>
  )
}

export default AuthContainer
