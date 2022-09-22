import React, { useEffect, useRef } from "react";
import "./Carousel.css";
import img1 from "../../assets/apple-g03799e649_1920.jpg";
import img2 from "../../assets/camera-ge890a8242_1920.jpg";
import img3 from "../../assets/ios-g8aa1ad009_1920.jpg";
import img4 from "../../assets/pic5.jpg";
import img5 from "../../assets/blank-gd9db612c2_1920.jpg";
import * as BsIcons from "react-icons/bs";

const Carousel = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el2 = ref.current;
    const slider = document.querySelector(".slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    //image slider next button
    nextBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber++;

      if (slideNumber > numberOfSlides - 1) {
        slideNumber = 0;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    });

    //image slider previous button
    prevBtn.addEventListener("click", () => {
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
      slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
      });

      slideNumber--;

      if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
      }

      slides[slideNumber].classList.add("active");
      slideIcons[slideNumber].classList.add("active");
    });

    //image slider autoplay
    var playSlider;

    var repeater = () => {
      playSlider = setInterval(function () {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber++;

        if (slideNumber > numberOfSlides - 1) {
          slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      }, 5000);
    };
    repeater();

    //stop the image slider autoplay on mouseover
    slider.addEventListener("mouseover", () => {
      clearInterval(playSlider);
    });

    //start the image slider autoplay again on mouseout
    slider.addEventListener("mouseout", () => {
      repeater();
    });
  }, []);
  return (
    <>
      <div className="slider" ref={ref}>
        <div ref={ref} className="slide active">
          <img src={img1} alt="" />
        </div>
        <div ref={ref} className="slide">
          <img src={img2} alt="" />
        </div>
        <div ref={ref} className="slide">
          <img src={img3} alt="" />
        </div>
        <div ref={ref} className="slide">
          <img src={img4} alt="" />
        </div>
        <div ref={ref} className="slide">
          <img src={img5} alt="" />
        </div>
        <div className="navigation">
          <BsIcons.BsArrowLeftSquareFill ref={ref} className="prev-btn" />
          <BsIcons.BsArrowRightSquareFill ref={ref} className="next-btn" />
        </div>
        <div className="navigation-visibility">
          <div ref={ref} className="slide-icon active"></div>
          <div ref={ref} className="slide-icon"></div>
          <div ref={ref} className="slide-icon"></div>
          <div ref={ref} className="slide-icon"></div>
          <div ref={ref} className="slide-icon"></div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
