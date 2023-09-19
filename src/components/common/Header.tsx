import React from "react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 w-screen h-14  bg-primary_purple-100 rounded-b-sm ">
      <div className="w-full h-full flex justify-end items-center px-4">
        <div className="flex gap-4 text-secondary_purple-200">
          <h1 className="text-xl">Profile</h1>
          <h1 className="text-xl">Help</h1>
          <h1 className="text-xl">Log Out</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
