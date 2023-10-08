"use client"
import { useState, useEffect, Suspense } from "react"
import { Models } from "appwrite"
import Dropdown from "./Dropdown"
import Image from "next/image"
import appwriteService from "@/appwrite/config"

// Define a loading state
const Loading = () => <div>Loading...</div>

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userData, setUserData] = useState<
    Models.User<Models.Preferences> | undefined
  >(undefined)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    appwriteService
      .getCurrentUser()
      .then((res) => setUserData(res))
      .catch((err) => console.error(err))
  }, [])

  // Conditionally render the Navbar component when userData is available
  return (
    <Suspense fallback={<Loading />}>
      {userData && (
        <nav className="flex justify-between px-5 fixed top-0 left-0 right-0 z-10 w-screen bg-primary_black border-b-2 border-secondary_gray">
          <div className="text-secondary_pink text-3xl font-motivaMedium my-4">
            DashPlan
          </div>
          <div className="relative flex justify-between items-center border-l-2 border-secondary_gray w-72">
            {/* Name Circle Icon */}
            <div className="flex justify-center items-center text-secondary_gray-100 bg-secondary_pink w-12 h-12 rounded-full text-3xl font-motivaLight mx-4">
              {userData.name[0].toUpperCase()}
            </div>

            {/* Full Name */}
            <div className="text-secondary_white text-2xl font-motivaLight">
              {userData.name}
            </div>

            {/* Dropdown */}
            <Dropdown />
          </div>
        </nav>
      )}
    </Suspense>
  )
}

export default Navbar
