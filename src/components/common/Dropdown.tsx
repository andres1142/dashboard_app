import { Transition, Menu } from "@headlessui/react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import appwriteService from "@/appwrite/config"
import Image from "next/image"

function Dropdown() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  async function handleLogout() {
    try {
      await appwriteService.logout()
      router.replace("/auth")
    } catch (error: any) {
      console.error(error)
    }
  }

  return (
    <div>
      <Menu as="div">
        <div className="flex justify-center items-center">
          <Menu.Button onClick={toggleMenu}>
            <Image
              src="/dropdown.svg"
              alt="dropdown"
              width={30}
              height={30}
              className={`cursor-pointer transform rotate-0 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Menu.Button>
        </div>

        <Transition
          show={isMenuOpen}
          as="div"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div
            className="w-80 absolute text-white -right-8 top-4 z-10 border-l-2 border-b-2 border-t-2 border-secondary_gray bg-primary_black
                          flex flex-col justify-center items-baseline gap-3 p-4"
          >
            <button className="text-secondary_white-200 text-xl">
              Feedback
            </button>

            <button className="text-secondary_white-200 text-xl">
              Settings
            </button>

            <button
              className="text-secondary_white-200 text-xl"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </Transition>
      </Menu>
    </div>
  )
}

export default Dropdown
