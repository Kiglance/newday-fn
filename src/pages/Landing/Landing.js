import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as LoIcons from "react-icons/io5";
import logo from "../../assets/logo.png";
import img1 from "../../assets/ete2.jpeg";
import img2 from "../../assets/ete4.jpeg";
import img3 from "../../assets/clothes1.webp";
import img4 from "../../assets/clothes.jpeg";
import img5 from "../../assets/shoes3.jpeg";
import videoBg from "../../assets/viveo.mp4";
import "./Landing.css";

const Start = () => {
  const [canShow, setCanShow] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [swap, setSwap] = useState(false);
  const [showSearch, setShowSearch] = useState(true);

  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setSwap((value) => !value);
    }, 10000);
  });

  const ref = useRef(null);

  useEffect(() => {
    const el2 = ref.current;

    const menuToggle = document.querySelector(".menu-bars");
    const showCase = document.querySelector(".menu");

    menuToggle.addEventListener("click", () => {
      showCase.classList.toggle(
        "active",
        setIsOpen((value) => !value)
      );
    });

    var counter = 1;
    setInterval(function () {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 5) {
        counter = 1;
      }
    }, 10000);

    const showSearch = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search");

    showSearch.addEventListener("click", () => {
      searchInput.classList.toggle(
        "active",
        setShowSearch((value) => !value)
      );
    });
  }, []);

  return (
    <>
      <div className="body" ref={ref}>
        <section className="header">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="top-right">
            <div className="search" ref={ref}>
              <input type="text" name="search" />
            </div>
            <div className="search-icon">
              {showSearch ? (
                <LoIcons.IoSearchCircleOutline id="search" ref={ref} />
              ) : (
                <FaIcons.FaRegTimesCircle id="close" />
              )}
            </div>
            {/* <div className="menu-bars" ref={ref}>
              <AiIcons.AiOutlineMenu id="open-menu" />
            </div> */}
            {isOpen ? (
              <div className="menu-bars" ref={ref}>
                <AiIcons.AiOutlineMenu id="open-menu" />
              </div>
            ) : (
              <div className="menu-bars" ref={ref}>
                <IoIcons.IoMdClose id="close-menu" />
              </div>
            )}
          </div>
        </section>
        <video src={videoBg} autoPlay loop muted />
        {/* <div className="overlay"></div> */}
        <section className="content">
          {" "}
          <div className="text">
            <h1>WELCOME TO NEW DAY</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              facere repellendus ducimus laboriosam assumenda molestias dolor
              nulla quo, maxime deleniti. Fugiat, illum. Beatae est amet ullam
              consectetur accusantium aspernatur pariatur?
            </p>
            <div className="btn">
              <button>Start</button>
              <button id="login">Login</button>
            </div>
          </div>
          {(() => {})()}
          <div className="images">
            <div className="section">
              <div className="slider">
                <div className="slides">
                  <input type="radio" name="radio-btn" id="radio1" ref={ref} />
                  <input type="radio" name="radio-btn" id="radio2" ref={ref} />
                  <input type="radio" name="radio-btn" id="radio3" ref={ref} />
                  <input type="radio" name="radio-btn" id="radio4" ref={ref} />
                  <input type="radio" name="radio-btn" id="radio5" ref={ref} />

                  <div className="slide first">
                    <img src={img1} alt="" />
                  </div>
                  <div className="slide">
                    <img src={img2} alt="" />
                  </div>
                  <div className="slide">
                    <img src={img3} alt="" />
                  </div>
                  <div className="slide">
                    <img src={img4} alt="" />
                  </div>
                  <div className="slide">
                    <img src={img5} alt="" />
                  </div>
                  <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                    <div className="auto-btn5"></div>
                  </div>
                </div>

                <div className="navigation-manual">
                  <label htmlFor="radio1" className="manual-btn"></label>
                  <label htmlFor="radio2" className="manual-btn"></label>
                  <label htmlFor="radio3" className="manual-btn"></label>
                  <label htmlFor="radio4" className="manual-btn"></label>
                  <label htmlFor="radio5" className="manual-btn"></label>
                </div>
              </div>
            </div>
          </div>
          <div className="section-30">
            {swap ? (
              <p ref={ref}>Shop electronic devices and clothes online.</p>
            ) : (
              <p ref={ref}>Get a fast and safe service with us. </p>
            )}
            {/* <p ref={ref}>Shop electronic devices and clothes online.</p>{" "}
            <p ref={ref}>Get a fast and safe service with us. </p> */}
          </div>
          <div className="footer-icon">
            <div>
              <FaIcons.FaFacebook id="fb-icon" />
            </div>
            <div>
              <BsIcons.BsTwitter id="tw-icon" />
            </div>
            <div>
              <AiIcons.AiFillLinkedin id="li-icon" />
            </div>
            <div>
              <BsIcons.BsInstagram id="insta-icon" />
            </div>
          </div>
        </section>
      </div>

      <div className="section-33">
        {swap ? (
          <p ref={ref}>Shop electronic devices and clothes online.</p>
        ) : (
          <p ref={ref}>Get a fast and safe service with us. </p>
        )}
      </div>

      <div className="menu" ref={ref}>
        {/* <div className="menu-bars" ref={ref}>
          <IoIcons.IoMdClose />
        </div> */}

        <div className="sub-menu">
          <FaIcons.FaHome />
          <span>Home</span>
        </div>
        <div className="sub-menu">
          <BsIcons.BsFillInfoCircleFill />
          <span>About</span>
        </div>
        <div className="sub-menu">
          <AiIcons.AiOutlineMessage />
          <span>Contact</span>
        </div>
        <div className="sub-menu">
          <BiIcons.BiLogInCircle />
          <span>Login</span>
        </div>
      </div>
    </>
  );
};

export default Start;
