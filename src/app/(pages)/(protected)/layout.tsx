"use client";
import { AuthProvider } from "@/context/authContext";
import React, { useEffect, useState } from "react";
import appwriteService from "@/appwrite/config";
import { Header } from "@/components";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="pt-14">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
