import React from "react";
import useRoute from "../hooks/useRoute";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  const { navigateToCart } = useRoute();
  return (
    <>
      <NavBarItem name="장바구니" onClick={navigateToCart} />
    </>
  );
}
