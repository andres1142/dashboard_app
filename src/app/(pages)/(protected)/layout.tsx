import { Navbar } from "@/components"
import React from "react"

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default DashBoardLayout
