"use client";
import { AuthProvider } from "@/context/authContext";
import React, { useEffect, useState } from "react";
import appwriteService from "@/appwrite/config";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    appwriteService
      .isLogged()
      .then(setAuthStatus)
      .finally(() => setLoader(false));
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      {!loader && <main>{children}</main>}
    </AuthProvider>
  );
};

export default ProtectedLayout;
