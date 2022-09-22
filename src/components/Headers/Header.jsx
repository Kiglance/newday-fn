import React, { useState } from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import ShopHeader from "../ShopHeader/ShopHeader";

const Header = () => {
  const [isOnHome, setIsOnHome] = useState(false);
  const [isOnShop, setIsOnShop] = useState(false);

  const url = window.location.href;

  console.log(url.indexOf("start_shopping") > -1);
  console.log(url.indexOf("home") > -1);
  return <div></div>;
};

export default Header;
