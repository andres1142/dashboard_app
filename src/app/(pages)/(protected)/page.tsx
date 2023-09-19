"use client";
import React from "react";
import useAuth from "@/context/useAuth";
import { redirect } from "next/navigation";
import { EmptyWidget } from "@/components";

function LandingPage() {
  const { authStatus } = useAuth();

  // Checks if the user is authenticated, if not, redirect to login page
  if (!authStatus) {
    redirect("/auth");
  }

  return (
    <div className="flex h-screen justify-center mt-20">
      <EmptyWidget />
    </div>
  );
}

export default LandingPage;
