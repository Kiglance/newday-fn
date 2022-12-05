import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../redux/actions/productsActions";
import { connect } from "react-redux";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "./Shop.css";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

const Shop = (props) => {
  const { allProducts, isLoaded } = props;

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
  const [clickedState, setClickedState] = useState({ prt: 0, chld: 0 });

  useEffect(() => {
    if (availableProducts != undefined) {
      setState(availableProducts[parentId].ProductImages[childId]);
    }
  }, [parentId, childId]);

  const arrayTitle = availableProducts?.map((x, idx) => {
    return x.ProductImages[0]?.imageUrl;
  });
  const new_arrayTitle = availableProducts?.map((x, idx) => {
    return x.ProductImages;
  });
  console.log(new_arrayTitle);
  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
        width: "100vw",
        height: "fit-content",
      }}
    >
      <ShopHeader />
      <Categories />
      <div className="mt-[100px]  mx-auto flex flex-wrap justify-start items-center ">
        {availableProducts?.map((v_1, ix) => (
          <div
            className="m-2 border rounded-[5px] pb-3 bg-white w-[200px]"
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
                  src={
                    parentId == ix && clicked ? state?.imageUrl : arrayTitle[ix]
                  }
                  className="w-[200px] h-[200px] object_fit"
                />
              </a>
              <div
                className={`block w-fit max-h-[200px] h-fit overflow-y-auto border-x border-x-white-300 absolute right-0  ${
                  hovered[ix] ? "z-10" : "z-[-1]"
                }`}
              >
                {v_1.ProductImages.map((data, ix_1) => (
                  <div className="w-[50px] h-[40px]" key={ix_1}>
                    <img
                      onClick={() => {
                        setClicked(true);
                        setParentId(ix);
                        setClickedState({
                          ...clickedState,
                          chld: ix_1,
                          prt: ix,
                        });
                        setChildId(ix_1);
                      }}
                      className={
                        childId == ix_1 && parentId == ix ? "clicked" : ""
                      }
                      src={data.imageUrl}
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
              <button className="border flex items-center px-3 py-2 rounded-[5px]  bg-slate-600  hover:bg-slate-500 text-white">
                <FaIcons.FaShoppingCart className="mr-2" /> Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

const mapState = ({ products }) => ({
  allProducts: products.data,
  isLoaded: products.isLoaded,
});

export default connect(mapState, {
  getAllProducts,
})(Shop);
