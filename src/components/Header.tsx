import React from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="flex items-center py-3 justify-between">
      <Logo />
      <NavBar />
    </header>
  );
}
