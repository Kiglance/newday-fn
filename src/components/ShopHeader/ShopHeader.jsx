import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
// import logo from "../../
import logo from "../../assets/wordgr.png";
import { useNavigate } from "react-router-dom";
import "./ShopHeader.css";

const ShopHeader = () => {
  const [navBar, setNavBar] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const nav = useNavigate();

  const backToHome = () => {
    nav("/home");
  };

  const showProductHandler = () => {
    setShowProducts((value) => !value);
    setClicked((value) => !value);
  };

  return (
    <div className="shop_header_container">
      <div className="shop_header">
        <div className="shop_nav_1">
          <img src={logo} alt="Logo" id="logo" onClick={backToHome} />
        </div>
        <div className="shop_nav_1">
          <ul>
            <li onClick={backToHome}>Home</li>
            <li>Reviews</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="shop_nav_2">
          <span>
            <BiIcons.BiSearch className="shop_header_icons" />
          </span>
          <span>
            <FaIcons.FaUserAlt className="shop_header_icons" />
          </span>
          <span>
            <BsIcons.BsFillBagFill className="shop_header_icons" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
