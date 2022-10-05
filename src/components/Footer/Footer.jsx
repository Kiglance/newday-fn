import React from "react";
import * as AiIcons from "react-icons/ai";
import "../../pages/shop/Shop.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="shop_footer">
      <div className="footer_logo">
        <img src={logo} alt="" />
      </div>
      <div className="footer_center">
        <div>
          <AiIcons.AiFillFacebook className="shop_icons" />
          <AiIcons.AiFillTwitterSquare className="shop_icons" />
          <AiIcons.AiOutlineInstagram className="shop_icons" />
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <AiIcons.AiFillLinkedin className="shop_icons" />
          </a>
        </div>
        <div className="footer_text">@ newday_shop 2022</div>
      </div>
      <div className="footer_input">
        <input type="text" placeholder="Enter your email..." />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
