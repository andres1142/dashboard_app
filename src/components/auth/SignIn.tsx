"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import AuthContainer from "./AuthContainer"
import AuthenticationProps from "@/types/"
import appwriteService from "@/appwrite/config"
import useAuth from "@/context/useAuth"

function SignIn({ setShowLogin }: AuthenticationProps) {
  const router = useRouter()
  const { setAuthStatus } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const session = await appwriteService.login({ email, password })
      if (session) {
        setAuthStatus(true)
        router.push("/")
      }
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <AuthContainer>
      <h3 className="pb-10 text-center font-motivaMedium text-4xl">Sign In</h3>
      <form onSubmit={login}>
        <div className="flex flex-col gap-7 font-motivaMedium">
          <label className="form-item">
            Email:
            <input
              className="form-input-box text-lg"
              type="text"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-item">
            Password:
            <input
              className="form-input-box text-xl"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        {/*Submit button*/}
        <div className="flex justify-center items-center mt-10  ">
          <input className="form-button w-32 " type="submit" value="Sign In" />
        </div>

        {/*Division*/}
        <div className="mt-14 flex justify-around items-center">
          <div className="w-32 h-1 bg-secondary_white rounded-full" />
          <span>Or</span>
          <div className="w-32 h-1 bg-secondary_white rounded-full" />
        </div>

        {/*Register button*/}
        <div className="text-center mt-14 text-xl">
          <span>
            Don&apos;t have an account?
            <button
              className="text-secondary_white-200 ml-2 hover:underline"
              onClick={() => setShowLogin(false)}
            >
              Register
            </button>
          </span>
        </div>
      </form>
    </AuthContainer>
  )
}

export default SignIn
