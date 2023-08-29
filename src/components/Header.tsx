import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const navigator = useNavigate();
  const navigateToCart = () => navigator("/cart");
  return (
    <header>
      <Logo />
      <div onClick={navigateToCart}>
        <p>장바구니</p>
      </div>
    </header>
  );
}
