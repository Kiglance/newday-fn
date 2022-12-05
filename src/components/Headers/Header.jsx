import React, { useState } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import ShopHeader from "../ShopHeader/ShopHeader";

const Header = () => {
  const [isOnHome, setIsOnHome] = useState(false);
  const [isOnShop, setIsOnShop] = useState(false);

  const url = window.location.href;

  return <div></div>;
};

export default Header;
