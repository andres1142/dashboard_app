"use client"
import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid"
import appwriteService from "@/appwrite/config"
import AuthenticationProps from "@/types"
import AuthContainer from "./AuthContainer"
import useAuth from "@/context/useAuth"
import Image from "next/image"

function Register({ setShowLogin }: AuthenticationProps) {
  const { setAuthStatus } = useAuth()
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function createAccount(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    debugger
    if (!verifyData()) {
      return
    }

    try {
      handleLoading()
      const session = await appwriteService.createUserAccount({
        name,
        email,
        password,
      })
      if (session) {
        setAuthStatus(true)
        router.replace("/")
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  function handleLoading() {
    setLoading(!loading)
  }

  /**
   * Verifies that all fields are valid.
   *
   * @returns {boolean} true if all fields are valid, false otherwise
   */
  function verifyData() {
    if (password !== passwordConfirm) {
      setError("Passwords must match")
      return false
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters")
      return false
    }
    if (!email.includes("@")) {
      setError("Email must be valid")
      return false
    }
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      setError("All fields must be filled out")
      return false
    }
    return true
  }

  return (
    <AuthContainer className="relative">
      {/*Back button*/}
      <button onClick={() => setShowLogin(true)}>
        <ArrowLongLeftIcon className="top-2 left-3 absolute text-secondary_white-200 h-14 w-14" />
      </button>
      <h3 className="pb-10 text-center font-motivaMedium text-4xl">
        Create Account
      </h3>
      <form onSubmit={createAccount}>
        <div className="flex flex-col gap-7 font-motivaMedium">
          <label className="form-item">
            <span className="w-24">Name:</span>
            <input
              className="form-input-box text-lg"
              type="text"
              name="email"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="form-item">
            <span className="w-24">Email:</span>
            <input
              className="form-input-box text-lg"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-item">
            <span className="w-24">Password:</span>
            <input
              className="form-input-box text-xl"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label className="form-item">
            <span className="w-24">Password Again:</span>
            <input
              className="form-input-box text-xl"
              type="password"
              name="password"
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </label>
        </div>

        {/*Submit button*/}
        <div className="mt-10 flex justify-around">
          {!loading ? (
            <input
              className="form-button w-40"
              type="submit"
              value="Create Account"
            />
          ) : (
            <div className="form-button w-40 flex justify-center items-center">
              <Image
                src="/loading.svg"
                alt="loading"
                width={30}
                height={30}
                className="cursor-pointer animate-spin"
              />
            </div>
          )}
        </div>
        {/*Error message*/}
        <div className="mt-5 font-motivaMedium text-center text-lg text-red-500">
          {error}
        </div>
      </form>
    </AuthContainer>
  )
}

export default Register
