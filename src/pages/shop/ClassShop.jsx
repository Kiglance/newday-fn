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
import Slider from "react-slick";
import "../Companies/slick.css";
import "../Companies/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import imgGirl from "../../assets/svg2.jpg";

const Shop = (props) => {
  const { allProducts, singleCompany, allClasses, isLoaded } = props;
  const nav = useNavigate();

  useEffect(() => {
    props.getAllProducts();
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

  const classId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const ref_id = 13;

  const data = [
    {
      id: 1,
      name: "Name_1",
      classes: [{ class_id: 11, class_name: "Class One" }],
    },
    {
      id: 2,
      name: "Name_2",
      classes: [{ class_id: 12, class_name: "Class Two" }],
    },
    {
      id: 3,
      name: "Name_3",
      classes: [
        { class_id: 11, class_name: "Class One" },
        { class_id: 12, class_name: "Class Two" },
        { class_id: 13, class_name: "Class Three" },
      ],
    },
    {
      id: 4,
      name: "Name_4",
      classes: [
        { class_id: 11, class_name: "Class One" },
        { class_id: 12, class_name: "Class Two" },
      ],
    },
    {
      id: 5,
      name: "Name_5",
      classes: [
        { class_id: 11, class_name: "Class One" },
        { class_id: 13, class_name: "Class Three" },
      ],
    },
    {
      id: 6,
      name: "Name_6",
      classes: [
        { class_id: 12, class_name: "Class Two" },
        { class_id: 13, class_name: "Class Three" },
      ],
    },
  ];

  const [ddts, setDdts] = useState(null);

  var hh = [];

  const vim = data.map((values, id, array) =>
    values.classes.filter((vvs) => {
      if (vvs.class_id == 13) {
        // setDdts(values);
        hh.push(values);
        // console.log(values);
        return values;
      }
    })
  );
  console.log(availableProducts);

  const compId = window.location.href.split("/")[4];
  var getIt = [];
  const getItOn = availableProducts?.map((values) => {
    values.Classes.filter((vvs) => {
      if (vvs.classId == classId && values.companyId == compId) {
        getIt.push(values);
        return values;
      }
    });
  });

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
        <h1 className="text-[20px] font-extrabold capitalize">
          {singleCompany?.companyProducts}
        </h1>
        <div className="mt-[10px]  grid gap-4 grid-cols-4 grid-rows-3 ">
          {getIt?.map((v_1, ix) => (
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
                <button className="border flex items-center px-3 py-2 rounded-[5px]  bg-[#0c6c61] hover:bg-[#0c6c61d3] text-white">
                  <FaIcons.FaShoppingCart className="mr-2" /> Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapState = ({ products, companies, classes }) => ({
  allProducts: products.data,
});

export default connect(mapState, {
  getAllProducts,
})(Shop);
