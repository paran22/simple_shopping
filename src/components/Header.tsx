import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const navigator = useNavigate();
  const navigateToCart = () => navigator("/cart");
  return (
    <header className="flex items-center py-3 justify-between">
      <Logo />
      <button className="text-lg font-bold px-2" onClick={navigateToCart}>
        장바구니
      </button>
    </header>
  );
}
