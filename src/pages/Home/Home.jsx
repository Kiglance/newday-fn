import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import Product from "../../components/Products/Product";
import pdt from "../../assets/pdts.jpg";
import Carousel from "../Carousels/Carousel";
import Users from "../../components/Users/Users";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

const Home = (props) => {
  const nav = useNavigate();

  const toShopFx = () => {
    nav("/start_shopping");
  };

  return (
    <div>
      <section className="section_1" id="section_1">
        <HomeHeader />
        <div className="section_1_body">
          <div className="section_1_body_1">
            <h1>WELCOME TO NEW DAY</h1>
          </div>
          <div className="button">
            <button onClick={toShopFx}>Start shopping</button>
          </div>
          <div className="section_1_body_2"></div>
        </div>
      </section>
      <div className="the_div">
        <section className="section_2" id="section_2">
          <div className="section_2_icon">
            <div id="progress">
              <span id="progress-value">
                <FaIcons.FaArrowUp
                  style={{
                    fontSize: "20px",
                  }}
                />
              </span>
            </div>
          </div>
          <div>
            <Users />
          </div>
        </section>
        <section className="section_3" id="section_3">
          <div className="section_3_body">
            <div className="section_3_body_3">
              <h1>ABOUT</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore dignissimos, voluptatibus veritatis culpa veniam
                maxime error. Dolore placeat maxime iure obcaecati harum est
                quae a exercitationem tenetur, quis beatae inventore.
              </p>
            </div>
          </div>
        </section>
        <section className="section_4"></section>
        <section className="section_5" id="section_5">
          <div className="section_5_body">
            <div className="section_5_body_5">
              <h1>PRODUCTS</h1>
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore dignissimos, voluptatibus veritatis culpa veniam
                maxime error. Dolore placeat maxime iure obcaecati harum est
                quae a exercitationem tenetur, quis beatae inventore.
              </span>
            </div>
            <div className="section_5_body_5_img">
              <Carousel />
            </div>
          </div>
        </section>
        <section className="section_6" id="section_6">
          <Product />
        </section>
        <section className="section_7" id="section_7">
          <div className="section_7_body"></div>
        </section>
        <section className="section_8"></section>
      </div>
    </div>
  );
};

export default Home;
