"use client"
import { AuthProvider } from "@/context/authContext"
import React, { useEffect, useState } from "react"
import appwriteService from "@/appwrite/config"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    appwriteService
      .isLogged()
      .then(setAuthStatus)
      .finally(() => setLoader(false))
  }, [])

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {!loader ? (
        <main>{children}</main>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-60">Loading...</div>
      )}
    </AuthProvider>
  )
}

export default ProtectedLayout
