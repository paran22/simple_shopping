import React from "react";
import useRoute from "../hooks/useRoute";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  const { navigateToCart, navigateToLogin } = useRoute();
  return (
    <div className="flex">
      <NavBarItem name="장바구니" onClick={navigateToCart} />
      <NavBarItem name="로그인" onClick={navigateToLogin} />
    </div>
  );
}
