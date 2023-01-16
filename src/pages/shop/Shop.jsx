import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../redux/actions/productsActions";
import { getAllClasses } from "../../redux/actions/classActions";
import { connect } from "react-redux";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import Header from "../../components/Headers/Header";
import "./Shop.css";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import { getOneCompany } from "../../redux/actions/companyActions";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

const Shop = (props) => {
  const { allProducts, singleCompany, allClasses, isLoaded } = props;
  const nav = useNavigate();

  const compId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  useEffect(() => {
    props.getOneCompany(compId);
  }, []);

  useEffect(() => {
    props.getAllProducts();
    props.getAllClasses();
  }, []);

  const availableProducts = allProducts.body;

  availableProducts?.sort((a, b) => {
    const lowName = a.productName;
    const highName = b.productName;

    if (lowName > highName) {
      return 1;
    }
    if (lowName < highName) {
      return -1;
    }
    return 0;
  });
  const todoIt = useState({
    0: { 0: false },
    1: { 0: false },
    2: { 0: false },
    3: { 0: false },
    4: { 0: false },
  });

  const [parentId, setParentId] = useState(0);
  const [childId, setChildId] = useState(0);
  const [state, setState] = useState();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState({});
  const [clickedState, setClickedState] = useState({ 0: { prt: 0, chld: 0 } });

  useEffect(() => {
    if (availableProducts != undefined) {
      setState(availableProducts[parentId].images[childId]);
    }
  }, [parentId, childId]);

  const arrayTitle = availableProducts?.map((x, idx) => {
    return x.images[0]?.imageUrl;
  });
  const new_arrayTitle = availableProducts?.map((x, idx) => {
    return x.images[0];
  });
  console.log(allClasses);
  return (
    <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        width: "100vw",
        height: "fit-content",
      }}
    >
      <Header />
      {/* <Categories /> */}
      <div className="bg-white mt-[80px] w-[70%] mx-auto">
        <div className="flex items-center w-fit mx-auto ">
          <img
            src={singleCompany?.companyLogo}
            alt=""
            className="w-[50px] h-[50px] rounded-[50%] border-[2px] border-[#000000] mr-3 "
          />
          <h1 className="font-bold text-center text-[20px] uppercase">
            Welcome to {singleCompany?.companyName}
          </h1>
        </div>
        <div className="uppercase text-slate-300 flex items-center">
          <div className="flex items-start">
            <MdIcons.MdHome className="mr-1 text-[22px] text-slate-700" />{" "}
            <span
              onClick={() => {
                nav("/companies");
              }}
              className="hover:underline cursor-pointer text-slate-700"
            >
              home
            </span>
          </div>{" "}
          <BiIcons.BiChevronRight className="text-[30px] text-slate-500" />
          <span className="hover:underline cursor-pointer text-slate-500">
            {singleCompany?.companyName}
          </span>
        </div>
        <div className="uppercase flex items-center gap-4 text-[20px] my-5">
          <BsIcons.BsFacebook />
          <BsIcons.BsInstagram />
          <BsIcons.BsTwitter />
          <BsIcons.BsLinkedin />
        </div>
        <div>
          <h1 className="font-bold text-[20px]">Explore our top categories.</h1>
          <div className=" grid gap-4 grid-cols-4 grid-rows-3 ">
            {allClasses?.body?.map((values, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={values.coverImage}
                    alt=""
                    className="w-[220px] aspect-square rounded-[50%] object-cover"
                  />
                  <h1 className="mt-3 text-center">{values.className}</h1>
                </div>
              );
            })}
          </div>
        </div>
        <h1 className="text-[20px] font-extrabold capitalize">
          {singleCompany?.companyProducts}
        </h1>
        <div className="mt-[10px]  grid gap-4 grid-cols-4 grid-rows-3 ">
          {availableProducts?.map((v_1, ix) => (
            <div
              className="m-2 border rounded-[5px] pb-3 bg-white "
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
              key={ix}
            >
              <div
                className="flex items-center w-fit relative border-b"
                onMouseEnter={() => {
                  setHovered((hov) => ({
                    ...hovered,
                    [ix]: !hov[ix],
                  }));
                }}
                onMouseLeave={() => {
                  setHovered((hov) => ({ [ix]: !hov[ix] }));
                }}
              >
                <a href={`/product/${v_1?.productId}`}>
                  <img
                    src={parentId == ix && clicked ? state : new_arrayTitle[ix]}
                    className="w-[100%] aspect-square object_fit"
                  />
                </a>
                <div
                  className={`block w-fit max-h-[200px] h-fit overflow-y-auto border-x border-x-white-300 absolute right-0  ${
                    hovered[ix] ? "z-10" : "z-[-1]"
                  }`}
                >
                  {v_1.images.map((data, ix_1) => (
                    <div className="w-[50px] h-[40px]" key={ix_1}>
                      <img
                        onClick={() => {
                          setClicked(true);
                          setParentId(ix);
                          setChildId(ix_1);
                          setClickedState({
                            ...clickedState,
                            chld: ix_1,
                            prt: ix,
                          });
                        }}
                        className={
                          childId == ix_1 && parentId == ix ? "clicked" : ""
                        }
                        src={data}
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right ">
                <em className="mx-2 text-[#004472]">{v_1.brand}®</em>
              </div>
              <div className="text-center mt-2 w-[100%] overflow-x-auto">
                {v_1.productName}
              </div>
              <div className="text-center">
                <em className="mx-2 font-bold">${v_1.price}</em>
              </div>
              <div className="text-center">
                <del className="mx-2 text-stone-600">${v_1.price}</del>
              </div>

              <div className="flex  w-fit items-center mx-auto text-center mt-1">
                <button className="border flex items-center px-3 py-2 rounded-[5px]  bg-[#E52424] hover:bg-[#e52424d3] text-white">
                  <FaIcons.FaShoppingCart className="mr-2" /> Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

const mapState = ({ products, companies, classes }) => ({
  allProducts: products.data,
  allClasses: classes.data,
  isLoaded: products.isLoaded,
  singleCompany: companies.oneValue.data,
});

export default connect(mapState, {
  getAllProducts,
  getOneCompany,
  getAllClasses,
})(Shop);
