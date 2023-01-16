import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCompanies } from "../../redux/actions/companyActions";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./Companies.css";
import "./slick.css";
import "./slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import imgGirl from "../../assets/svg2.jpg";
import Header from "../../components/Headers/Header";

const Companies = (props) => {
  const { allCompanies, isLoaded } = props;

  console.log(allCompanies);

  const nav = useNavigate();

  React.useEffect(() => {
    props.getAllCompanies();
  }, []);

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    infinite: true,
    centerPadding: "10px",
    rows: 2,
    autoPlay: true,
    // slidesPerRow: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };

  const PreviousBtn = (props) => {
    return (
      <div className={props.className} onClick={props.onClick}>
        <BiChevronLeft className="text-[#000]" />
      </div>
    );
  };

  const NextBtn = (props) => {
    return (
      <div className={props.className} onClick={props.onClick}>
        <BiChevronRight className="text-[#000]" />
      </div>
    );
  };

  return (
    <div className="">
      <Header />
      <div>
        <h1 className="font-bold text-[20px] ml-[10%] mt-10">
          Find your favorite sales companies and shops here.
        </h1>{" "}
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="flex items-center pl-[10%] my-5">
        <button className="py-[2px] px-3 border-[1px] font-bold bg-[#e3e2e2] text-black hover:bg-[#e52424d3] rounded-[5px] mr-3">
          Shoes
        </button>
        <button className="py-[2px] px-3 border-[1px] font-bold bg-[#e3e2e2] text-black hover:bg-[#e52424d3] rounded-[5px] mr-3">
          Phones
        </button>
        <button className="py-[2px] px-3 border-[1px] font-bold bg-[#e3e2e2] text-black hover:bg-[#e52424d3] rounded-[5px] mr-3">
          Computers
        </button>
        <button className="py-[2px] px-3 border-[1px] font-bold bg-[#e3e2e2] text-black hover:bg-[#e52424d3] rounded-[5px] mr-3">
          Clothes
        </button>
        <button className="py-[2px] px-3 border-[1px] font-bold bg-[#e3e2e2] text-black hover:bg-[#e52424d3] rounded-[5px] mr-3">
          Books
        </button>
      </div>
      <div className="App">
        <Slider
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          {...settings}
        >
          {allCompanies?.map((item) => (
            <div className="card-cont">
              <div className="card">
                <div className="card-top">
                  <div className=" relative flex items-start mx-auto">
                    {" "}
                    <img
                      onClick={() => nav(`${item.companyId}`)}
                      // src={item.companyLogo}
                      src={
                        defaultImage[item.companyName] === item.companyName
                          ? defaultImage.linkDefault
                          : item.companyLogo
                      }
                      alt={item.companyName}
                      onError={handleErrorImage}
                      className="w-[120px] h-[120px] rounded-[50%] mx-auto border border-[#c7c7c7] cursor-pointer"
                    />
                    <BiDotsVerticalRounded className="absolute right-5 top-5 text-[20px] hover:bg-slate-800 rounded-[50%] hover:scale-125" />
                  </div>
                  <h1 className="text-center font-bold">{item.companyName}</h1>
                </div>
                <div className="card-bottom">
                  <p className="text-center">{item.description}</p>
                  <h3 className="text-center flex w-[100px] mx-auto my-3 text-[#ffa200]">
                    <FaIcons.FaStar />
                    <FaIcons.FaStar />
                    <FaIcons.FaStar />
                    <FaIcons.FaStarHalfAlt />
                    <BsIcons.BsStar />
                  </h3>
                </div>
                <button className="bg-[#E52424] w-auto block hover:bg-[#e52424d3] text-white font-bold  py-[4px] px-10 rounded-[3px] mx-auto">
                  Visit
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const mapState = ({ companies }) => ({
  allCompanies: companies.data.data,
});

export default connect(mapState, {
  getAllCompanies,
})(Companies);
