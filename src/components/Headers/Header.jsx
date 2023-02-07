import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/logo.jpg";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
  const nav = useNavigate();
  const toCompanies = () => {
    nav("/companies");
  };
  return (
    <div>
      <nav
        className="h-[70px] fixed top-0 right-0 left-0 z-10 bg-white px-5 md:hidden py-[2px] flex items-center justify-between"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <span>
          <img src={img} alt="" className="w-[50px] h-[50px] rounded-[50px]" />
        </span>
        <span className="w-[2/4]">
          <ul className="flex items-center ">
            <li className="mx-2 cursor-pointer hover:text-[#0c6c61] flex items-center">
              About <BiChevronDown />
            </li>
            <li className="mx-2 cursor-pointer hover:text-[#0c6c61] flex items-center">
              Services <BiChevronDown />
            </li>
            <li className="mx-2 cursor-pointer hover:text-[#0c6c61]">
              Testimonials
            </li>
            <li className="mx-2 cursor-pointer hover:text-[#0c6c61]">
              Contact
            </li>
          </ul>
        </span>
        <span className="flex items-center justify-between">
          <button className="border-2 border-[#0c6c61] rounded-[3px] font-bold text-[#0c6c61] px-2">
            Log in
          </button>
          <button
            onClick={toCompanies}
            className="bg-[#0c6c61] text-white font-bold mx-3 py-[2px] px-2 rounded-[3px]"
          >
            Companies
          </button>
        </span>
      </nav>
    </div>
  );
};

export default Header;
