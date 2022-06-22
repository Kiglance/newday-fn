import React, { useState, useEffect, useRef } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
import img1 from "../../assets/3.jpg";
import img2 from "../../assets/4.jpg";
import img3 from "../../assets/1.jpg";
import img4 from "../../assets/2.jpg";
import videoBg from "../../assets/rotating-bg.mp4";
import "./Start.css";

const Start = () => {
  const [language, setLanguage] = useState("English");
  const [canShow, setCanShow] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [counter, setCounter] = useState(3);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCounter(() => counter + 1);
  //     if (counter >= 4) {
  //       setCounter(1);
  //     }
  //   }, 2000);
  // });

  const handleSelectLanguage = (e) => {
    // console.log(e);

    setLanguage(e.target.innerText);
    alert("Are you sure you want to change lagnuage?");
    localStorage.setItem("Languages", JSON.stringify(e.target.innerText));
    setCanShow((value) => !value);
  };

  const ref = useRef(null);

  useEffect(() => {
    const el2 = ref.current;

    const menuToggle = document.querySelector(".menu-bars");
    const showCase = document.querySelector(".body");

    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      showCase.classList.toggle(
        "active",
        setIsOpen((value) => !value)
      );
    });

    var coder = 1;
    while (coder < 10) {
      // console.log(coder);
      coder++;
      if (coder > 4) {
        coder = 1;
      }
    }
    // setTimeout(() => {
    //   coder++;
    // }, 1000);

    console.log("CODER", coder);

    // setTimeout(() => {
    //   setCounter(() => counter + 1);
    //   if (counter >= 4) {
    //     setCounter(1);
    //   }
    // }, 2000);

    const oneC = document.getElementById("radio1");
    const twoC = document.getElementById("radio2");
    const threeC = document.getElementById("radio3");
    const fourC = document.getElementById("radio4");

    if (counter == 1) {
      oneC.checked = true;
    } else if (counter == 2) {
      twoC.checked = true;
    } else if (counter == 3) {
      threeC.checked = true;
    } else if (counter == 4) {
      fourC.checked = true;
    }

    // console.log("ONE", counter == 1);
    // console.log("TWO", counter == 2);
    // console.log("THREE", counter == 3);
    // console.log("FOUR", counter == 4);
  }, []);
  return (
    <>
      <div className="body" ref={ref}>
        <section className="header">
          <div className="logo">
            <h1>Logo "{counter}"</h1>
          </div>
          <div className="top-right">
            <div className="language-container">
              <span>{language}</span>
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
            {isOpen ? (
              <div className="menu-bars" ref={ref}>
                <AiIcons.AiOutlineMenu />
              </div>
            ) : (
              <div className="menu-bars" ref={ref}>
                <IoIcons.IoMdClose />
              </div>
            )}
          </div>
        </section>
        <video src={videoBg} autoPlay loop muted />
        <div className="overlay"></div>
        <section className="content">
          {(() => {
            if (language === "English") {
              return (
                <div className="text">
                  <h1>WELCOME TO NEW DAY</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis facere repellendus ducimus laboriosam assumenda
                    molestias dolor nulla quo, maxime deleniti. Fugiat, illum.
                    Beatae est amet ullam consectetur accusantium aspernatur
                    pariatur?
                  </p>
                  <div className="btn">
                    <button>GET STARTED</button>
                  </div>
                </div>
              );
            } else if (language === "French") {
              return (
                <div className="text">
                  <h1>BIENVENUE SUR NEW DAY</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis facere repellendus ducimus laboriosam assumenda
                    molestias dolor nulla quo, maxime deleniti. Fugiat, illum.
                    Beatae est amet ullam consectetur accusantium aspernatur
                    pariatur?
                  </p>
                  <div className="btn">
                    <button>COMMENCEZ</button>
                  </div>
                </div>
              );
            } else if (language === "Ikinyarwanda") {
              return (
                <div className="text">
                  <h1>IKAZE KURI NEW DAY</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis facere repellendus ducimus laboriosam assumenda
                    molestias dolor nulla quo, maxime deleniti. Fugiat, illum.
                    Beatae est amet ullam consectetur accusantium aspernatur
                    pariatur?
                  </p>
                  <div className="btn">
                    <button>TANGIRA</button>
                  </div>
                </div>
              );
            }
          })()}
          {(() => {})()}
          <div className="images">
            <div className="section">
              <div className="slider">
                <div className="slides">
                  <input type="radio" name="radio-btn" id="radio1" ref={ref} />
                  <input type="radio" name="radio-btn" id="radio2" ref={ref} />
                  <input type="radio" name="radio-btn" id="radio3" ref={ref} />
                  <input type="radio" name="radio-btn" id="radio4" ref={ref} />

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
                  <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                  </div>
                </div>

                <div className="navigation-manual">
                  <label htmlFor="radio1" className="manual-btn"></label>
                  <label htmlFor="radio2" className="manual-btn"></label>
                  <label htmlFor="radio3" className="manual-btn"></label>
                  <label htmlFor="radio4" className="manual-btn"></label>
                </div>
              </div>
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
        </section>
        <div className="section-3">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </div>

      <div className="menu">
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
        <div className="sub-menu" id="login">
          <BiIcons.BiLogInCircle />
          <span>Login</span>
        </div>
      </div>
    </>
  );
};

export default Start;
