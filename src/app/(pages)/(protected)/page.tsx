"use client"
import React from "react"
import useAuth from "@/context/useAuth"
import { redirect } from "next/navigation"

function LandingPage() {
  const { authStatus } = useAuth()

  // Checks if the user is authenticated, if not, redirect to login page
  if (!authStatus) {
    redirect("/auth")
  } else {
    redirect("/dashboard")
  }

  return <></>
}

export default LandingPage
