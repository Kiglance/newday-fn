import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
// import logo from "../../
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./HomeHeader.css";

const HomeHeader = () => {
  const [navBar, setNavBar] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const nav = useNavigate();

  const toShopFx = () => {
    nav("/start_shopping");
  };

  const changeBg = () => {
    if (window.scrollY >= 700) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  const ref = useRef(null);

  useEffect(() => {
    const el2 = ref.current;

    let calcScrollValue = () => {
      let scrollProgress = document.getElementById("progress");
      let progressValue = document.getElementById("progress-value");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);
      if (pos > 80) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }
      scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
      scrollProgress.style.background = `conic-gradient(#1F618D ${scrollValue}%, #d7d7d700 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
  }, []);

  const showProductHandler = () => {
    setShowProducts((value) => !value);
    setClicked((value) => !value);
  };

  const url = window.location.href;

  console.log(url.indexOf("start_shopping") > -1);
  console.log(url.indexOf("home") > -1);
  return (
    <div className="header_container">
      <div className={navBar ? "header active" : "header"}>
        <div className="nav_1">
          <Link
            to="section_1"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <img src={logo} alt="Logo" id="logo" />
          </Link>
        </div>
        <div className="nav_1">
          <ul>
            <li>
              <Link
                to="section_1"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="section_3"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="section_5"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Products
              </Link>
              <span id="icons">
                {showProducts ? (
                  <FiIcons.FiChevronUp onClick={showProductHandler} />
                ) : (
                  <FiIcons.FiChevronDown onClick={showProductHandler} />
                )}
              </span>
            </li>
            <div></div>
            <li>
              <Link
                to="section_7"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Contact
              </Link>
            </li>
            <li>Reviews</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="nav_2">
          <span>
            <FaIcons.FaUserAlt className="header_icons" />
          </span>
          <span>
            <BsIcons.BsFillBagFill className="header_icons" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
