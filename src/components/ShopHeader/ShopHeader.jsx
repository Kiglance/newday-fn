import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./ShopHeader.css";

const ShopHeader = () => {
  const [navBar, setNavBar] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const nav = useNavigate();

  const backToHome = () => {
    nav("/home");
  };

  const toSignIn = () => {
    nav("/login");
  };

  const toSignUp = () => {
    nav("/signup");
  };

  const showProductHandler = () => {
    setShowProducts((value) => !value);
    setClicked((value) => !value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <div className="flex items-center">
          <span>
            <BiIcons.BiSearch className=" text-white text-10 mx-2" />
          </span>
          <span>
            {" "}
            <FaIcons.FaUserAlt
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              className="text-white text-15 mx-2"
              onClick={handleClick}
            />
          </span>
          <span>
            <BsIcons.BsFillBagFill className="text-white text-15 mx-2" />
          </span>
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <a href={`#}`} style={{ color: "#333" }}>
            <MenuItem onClick={toSignIn}>Login</MenuItem>
            <MenuItem onClick={toSignUp}>Sign up</MenuItem>
          </a>
        </Menu>
      </div>{" "}
    </div>
  );
};

export default ShopHeader;
