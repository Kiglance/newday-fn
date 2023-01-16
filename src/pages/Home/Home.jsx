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
import Users from "../../components/Users/Users";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Headers/Header";
import back1 from "../../assets/back-1.jpg";
import back2 from "../../assets/back-2.jpg";
import svg1 from "../../assets/svg1.png";
import svg2 from "../../assets/svg2.jpg";
import svg3 from "../../assets/svg3.jpg";
import svg4 from "../../assets/svg4.png";
import tip1 from "../../assets/tip1.webp";
import tip2 from "../../assets/tip2.jpg";
import tip3 from "../../assets/tip3.webp";
import tip4 from "../../assets/tip4.png";
import vim1 from "../../assets/vim1.png";
import vim2 from "../../assets/vim2.png";
import vim3 from "../../assets/vim3.jpg";
import vim4 from "../../assets/vim4.png";

const Home = (props) => {
  const nav = useNavigate();

  const toCompanies = () => {
    nav("/companies");
  };

  return (
    <div className="">
      <Header />
      <div className="w-[60%] lg:w-[90%] md:w-[90%] mx-auto">
        <section>
          <h1 className="font-bold text-[20px] w-[30%]  semi-md:w-[60%] md:w-[90%]   py-10 text-[#E52424]">
            How to do online business and make your business grow with NewDay
            platform.
          </h1>
          <img
            src={back1}
            alt=""
            className="w-[100%] aspect-video object-cover rounded-[10px] "
          />
          <button
            onClick={toCompanies()}
            className="bg-[#E52424] hover:bg-[#e52424d3] text-white font-bold my-5 py-[4px] px-2 rounded-[3px]"
          >
            Explore sales companies
          </button>
        </section>
        <section>
          <h1 className="font-bold text-[20px] pt-10 pb-5 text-[#E52424]">
            What we do:
          </h1>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              A business description is a high-level overview of your company
              that you include in your business plan
            </li>
            <li className="mb-2">
              Your business description should entice readers—like lenders and
              investors—to look through the rest of your business plan to learn
              more about your company
            </li>
            <li className="mb-2">
              Business descriptions should be concise, error-free, and include
              only pertinent information about your company
            </li>
          </ul>
        </section>
        <section>
          <h1 className="font-bold text-[20px] pt-10 pb-5 text-[#E52424]">
            Why use NewDay?
          </h1>
          <div className="image-over">
            <div className="centered-element bg-[#ffffff8e] rounded-[10px] px-2">
              <h1 className="font-bold text-[20px] pt-10 sm:pt-2  pb-5">
                You can use NewDay for free!
              </h1>
              <p>
                New Day for Business has resources to help you plan, start,
                grow, and advertise your small business
              </p>
              <button className="bg-[#E52424] hover:bg-[#E52424] text-white font-bold my-5 py-[2px] px-2 rounded-[3px]">
                Register your firm
              </button>
            </div>
          </div>
          {/* <img
            src={back2}
            alt=""
            className="w-[100%] aspect-video object-cover rounded-[10px] rounded-[10px]"
          /> */}
        </section>
        <section className="mt-10 flex justify-evenly">
          <div className="block text-center w-[40%] agrandis">
            <img
              src={svg1}
              alt=""
              className="w-[100%] aspect-video object-cover rounded-[10px]"
            />
            <h1 className="font-bold text-[20px] pt-5 pb-1">2000+ people</h1>
            <p>
              visit New day each month to find restaurants, home services, and
              more1
            </p>
          </div>
          <div className="block text-center w-[40%] agrandis">
            <img
              src={svg2}
              alt=""
              className="w-[100%] aspect-video object-cover rounded-[10px]"
            />
            <h1 className="font-bold text-[20px] pt-5 pb-1">
              100% data security.
            </h1>
            <p>
              visit New day each month to find restaurants, home services, and
              more1
            </p>
          </div>
        </section>
        <section className="mt-10 flex justify-evenly">
          <div className="block text-center w-[40%] agrandis">
            <img
              src={svg3}
              alt=""
              className="w-[100%] aspect-video object-cover rounded-[10px]"
            />
            <h1 className="font-bold text-[20px] pt-5 pb-1">2000+ people</h1>
            <p>
              visit New day each month to find restaurants, home services, and
              more1
            </p>
          </div>
          <div className="block text-center w-[40%] agrandis">
            <img
              src={svg4}
              alt=""
              className="w-[100%] aspect-video object-cover rounded-[10px]"
            />
            <h1 className="font-bold text-[20px] pt-5 pb-1">
              100% data security.
            </h1>
            <p>
              visit New day each month to find restaurants, home services, and
              more1
            </p>
          </div>
        </section>
        <section>
          <h1 className="font-bold text-[20px] pt-10 pb-5 w-[60%] sm:w-[100%] text-[#E52424]">
            NewDay makes it easy to connect with new customers and grow your
            business
          </h1>

          <section className="flex sm:block items-center justify-between my-10 growing ">
            <img
              src={tip1}
              alt=""
              className="w-[50%] sm:w-[100%] aspect-video object-cover rounded-[10px] border-[1px] border-slate-200"
            />
            <div className="w-[50%] sm:w-[100%] px-10 md:px-2">
              <h1 className="font-bold text-[20px] pt-1 pb-2 text-[#E52424]">
                WEB PAGE
              </h1>
              <h2 className="font-bold text-[20px] pt-0 pb-1">
                Fast and secure online purchases
              </h2>
              <p>
                visit New day each month to find restaurants, home services, and
                more1
              </p>
            </div>
          </section>
          <section className="flex sm:block items-center justify-between my-10 growing ">
            <img
              src={tip2}
              alt=""
              className="w-[50%] sm:w-[100%] aspect-video object-cover rounded-[10px] border-[1px] border-slate-200"
            />
            <div className="w-[50%] sm:w-[100%] px-10 md:px-2">
              <h1 className="font-bold text-[20px] pt-1 pb-2 text-[#E52424]">
                WEB ADS
              </h1>
              <h2 className="font-bold text-[20px] pt-0 pb-1">
                Fast and secure online purchases
              </h2>
              <p>
                visit New day each month to find restaurants, home services, and
                more1
              </p>
            </div>
          </section>
          <section className="flex sm:block items-center justify-between my-10 growing ">
            <img
              src={tip3}
              alt=""
              className="w-[50%] sm:w-[100%] aspect-video object-cover rounded-[10px] border-[1px] border-slate-200"
            />
            <div className="w-[50%] sm:w-[100%] px-10 md:px-2">
              <h1 className="font-bold text-[20px] pt-1 pb-2 text-[#E52424]">
                CONNECT
              </h1>
              <h2 className="font-bold text-[20px] pt-0 pb-1">
                Connect with buyers
              </h2>
              <p>
                visit New day each month to find restaurants, home services, and
                more1
              </p>
            </div>
          </section>
          <section className="flex sm:block items-center justify-between my-10 growing ">
            <img
              src={tip4}
              alt=""
              className="w-[50%] sm:w-[100%] aspect-video object-cover rounded-[10px] border-[1px] border-slate-200"
            />
            <div className="w-[50%] sm:w-[100%] px-10 md:px-2">
              <h1 className="font-bold text-[20px] pt-1 pb-2 text-[#E52424]">
                PAYMENT SAFETY
              </h1>
              <h2 className="font-bold text-[20px] pt-0 pb-1">
                Secure online payment
              </h2>
              <p>
                visit New day each month to find restaurants, home services, and
                more1
              </p>
            </div>
          </section>
        </section>
        <section className="w-[100%] aspect-video pb-10 mb-10 bg-[#F1EEEE] rounded-[10px]">
          <h1 className="font-bold text-[20px] w-[30%] md:w-[70%]  pt-7 text-[#E52424] text-center mx-auto">
            Get our expert online business advice.
          </h1>
          <p className="underline text-center">Tips to start with NewDay</p>
          <div className="flex semi-sm:block items-center justify-between mt-10">
            <div className="flex sm:block mx-auto items-start w-[50%] semi-sm:w-[100%] semi-sm:mb-7">
              <div className="w-[50px] mx-2">
                <img
                  src={vim1}
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%] object-cover mx-2"
                />
              </div>
              <div className="calculate  sm:mx-auto">
                <h1 className="font-bold text-[20px] pt-0 pb-1">
                  Research conducting
                </h1>
                <p className="">
                  Apart from your interests, you will also need to gain some
                  insight on which sector you can leverage with your knowledge.
                </p>
                <p className="font-bold pt-2 text-[#E52424] ">Read article</p>
              </div>
            </div>
            <div className="flex sm:block mx-auto items-start w-[50%] semi-sm:w-[100%]">
              <div className="w-[50px] mx-2">
                <img
                  src={vim2}
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%] object-cover mx-2"
                />
              </div>
              <div className="calculate  sm:mx-auto">
                <h1 className="font-bold text-[20px] pt-0 pb-1">
                  Research conducting
                </h1>
                <p className="">
                  Apart from your interests, you will also need to gain some
                  insight on which sector you can leverage with your knowledge.
                </p>
                <p className="font-bold pt-2 text-[#E52424] ">Read article</p>
              </div>
            </div>
          </div>
          <div className="flex semi-sm:block items-center justify-between mt-10">
            <div className="flex sm:block mx-auto items-start w-[50%] semi-sm:w-[100%] semi-sm:mb-7">
              <div className="w-[50px] mx-2">
                <img
                  src={vim3}
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%] object-cover mx-2"
                />
              </div>
              <div className="calculate  sm:mx-auto">
                <h1 className="font-bold text-[20px] pt-0 pb-1">
                  Research conducting
                </h1>
                <p className="">
                  Apart from your interests, you will also need to gain some
                  insight on which sector you can leverage with your knowledge.
                </p>
                <p className="font-bold pt-2 text-[#E52424] ">Read article</p>
              </div>
            </div>
            <div className="flex sm:block mx-auto items-start w-[50%] semi-sm:w-[100%]">
              <div className="w-[50px] mx-2">
                <img
                  src={vim4}
                  alt=""
                  className="w-[40px] h-[40px] rounded-[50%] object-cover mx-2"
                />
              </div>
              <div className="calculate  sm:mx-auto">
                <h1 className="font-bold text-[20px] pt-0 pb-1">
                  Research conducting
                </h1>
                <p className="">
                  Apart from your interests, you will also need to gain some
                  insight on which sector you can leverage with your knowledge.
                </p>
                <p className="font-bold pt-2 text-[#E52424] ">Read article</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
