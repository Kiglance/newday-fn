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
        className="h-[70px] px-5 md:hidden py-[2px] flex items-center justify-between"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <span>
          <img src={img} alt="" className="w-[50px] h-[50px] rounded-[50px]" />
        </span>
        <span className="w-[2/4]">
          <ul className="flex items-center ">
            <li className="mx-2 cursor-pointer hover:text-[#E52424] flex items-center">
              About <BiChevronDown />
            </li>
            <li className="mx-2 cursor-pointer hover:text-[#E52424] flex items-center">
              Services <BiChevronDown />
            </li>
            <li className="mx-2 cursor-pointer hover:text-[#E52424]">
              Testimonials
            </li>
            <li className="mx-2 cursor-pointer hover:text-[#E52424]">
              Contact
            </li>
          </ul>
        </span>
        <span className="flex items-center justify-between">
          <button className="border-2 border-[#E52424] rounded-[3px] font-bold text-[#E52424] px-2">
            Log in
          </button>
          <button
            onClick={toCompanies}
            className="bg-[#E52424] text-white font-bold mx-3 py-[2px] px-2 rounded-[3px]"
          >
            Companies
          </button>
        </span>
      </nav>
    </div>
  );
};

export default Header;
