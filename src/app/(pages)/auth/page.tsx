"use client";
import { useState } from "react";
import { SignIn, Register } from "@/components";

function Authentication() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="px-40">
      <div className="flex h-screen w-full items-center justify-around gap-10">
        <section className="flex flex-1 flex-col text-center text-primary_purple gap-5">
          <h1 className="font-motivaBold text-7xl">Welcome to DashPlan</h1>
          <h2 className="font-motivaMedium text-4xl">
            Where Dreams Discover Their Journey
          </h2>
        </section>

        <section className="flex h-full items-center">
          {showLogin ? (
            <SignIn setShowLogin={setShowLogin} />
          ) : (
            <Register setShowLogin={setShowLogin} />
          )}
        </section>
      </div>
    </main>
  );
}

export default Authentication;
