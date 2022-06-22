import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
// import "./Landing.css";

const Landing = () => {
  const [language, setLanguage] = useState("English");
  const [canShow, setCanShow] = useState(false);
  const [isEn, setIsEn] = useState(false);
  const [isFr, setIsFr] = useState(false);
  const [isKn, setIsKn] = useState(false);

  const handleSelectLanguage = (e) => {
    console.log(e);

    setLanguage(e.target.innerText);
    alert("Are you sure you want to change laguage?");
    localStorage.setItem("Languages", JSON.stringify(e.target.innerText));
    // window.location.reload(false);
    setCanShow((value) => !value);
  };

  const newLanguage = JSON.parse(localStorage.getItem("Languages"));

  useEffect(() => {
    if (newLanguage === "English") {
      setIsFr(false);
      setIsKn(false);
      return setIsEn(true);
    } else if (newLanguage === "French") {
      setIsKn(false);
      setIsEn(false);
      return setIsFr(true);
    } else if (newLanguage === "Ikinyarwanda") {
      setIsFr(false);
      setIsEn(false);
      return setIsKn(true);
    }
  });

  return (
    <div className="body">
      <div className="header">
        <h1 className="logo">N.D</h1>
        <div className="top-right">
          <div className="language-container">
            <span>{newLanguage}</span>
            {canShow ? (
              <div>
                <IoIcons.IoMdArrowDropup
                  onClick={() => setCanShow(!canShow)}
                  className="drop-down-icon"
                />
              </div>
            ) : (
              <div>
                <IoIcons.IoMdArrowDropdown
                  onClick={() => setCanShow(!canShow)}
                  className="drop-down-icon"
                />
              </div>
            )}
          </div>
          {canShow && (
            <div className="languages">
              <span onClick={handleSelectLanguage}>English</span>
              <span onClick={handleSelectLanguage}>French</span>
              <span onClick={handleSelectLanguage}>Ikinyarwanda</span>
            </div>
          )}
          <div id="menu-bars">
            <AiIcons.AiOutlineMenu />
          </div>
        </div>
      </div>
      {isEn && (
        <div>
          <h1 className="title">WELCOME TO NEW DAY!</h1>
          <div className="sub-title">
            <h3>START YOUR ONLINE SHOPPING WITH US! </h3>
          </div>
          <div className="btn">
            <button>
              GET STARTED
            </button>
          </div>
        </div>
      )}
      {isFr && (
        <div>
          <h1 className="title">BIENVENUE AU NEW DAY!</h1>
          <div className="sub-title">
            <h3>VOYAGEZ SUR L'INTERNET AVEC NOUS! </h3>
          </div>
          <div className="btn">
            <button>COMMENCEZ</button>
          </div>
        </div>
      )}
      {isKn && (
        <div>
          <h1 className="title">IKAZE KURI NEW DAY!</h1>
          <div className="sub-title">
            <h3>START YOUR ONLINE JOURNEY WITH US! </h3>
          </div>
          <div className="btn">
            <button>
              TANGIRA
              <span id="alt"></span>
            </button>
          </div>
        </div>
      )}
      <div className="text">
        <div className="footer-text">
          <p>Fast service, happy customer!</p>
        </div>
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
    </div>
  );
};

export default Landing;
