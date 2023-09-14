"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import AuthContainer from "./AuthContainer";
import AuthenticationProps from "@/types/";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";

function SignIn({ setShowLogin }: AuthenticationProps) {
  const router = useRouter();
  const { setAuthStatus } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const session = await appwriteService.login({ email, password });
      if (session) {
        setAuthStatus(true);
        router.push("/");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

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

        <div className="mt-10 flex justify-around">
          <input className="form-button w-32 " type="submit" value="Sign In" />
          <button
            className="form-button w-32 "
            onClick={() => setShowLogin(false)}
          >
            Register
          </button>
        </div>
      </form>
    </AuthContainer>
  );
}

export default SignIn;
