import React, { useEffect, useState } from "react";
import { getOneProduct } from "../../redux/actions/productsActions";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "./Shop.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";

const ShopOne = (props) => {
  const { isLoaded, fetchedProduct } = props;

  const [newProduct, setNewProduct] = useState("");
  const ProductImages = newProduct?.ProductImages;

  console.log(newProduct, "newProduct");

  const nav = useNavigate();

  const prodId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  useEffect(() => {
    if (fetchedProduct.body !== undefined) {
      setNewProduct(fetchedProduct.body.data);
    }
  }, [fetchedProduct]);
  useEffect(() => {
    props.getOneProduct(prodId);
  }, []);

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
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "50vh",
          width: "70%",
          padding: "40px 0",
          margin: "80px auto",
        }}
        className="one-container"
      >
        <BsIcons.BsArrowLeftSquareFill
          onClick={() => nav(-1)}
          style={{
            fontSize: "40px",
            color: "#1F618D",
            margin: "0 50px",
            borderRadius: "50%",
          }}
        />
        <h1>
          <div style={{ width: "100%", margin: "auto" }}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "600",
                textTransform: "uppercase",
                color: "#1ABC9C",
                fontSize: "25px",
              }}
            >
              {newProduct.productName}
            </h2>
            <p
              style={{
                width: "100%",
                margin: "auto",
              }}
              className="flex flex-wrap items-center  justify-start"
            >
              {ProductImages?.map((values) => {
                return (
                  <img
                    src={values.imageUrl}
                    key={values.imageId}
                    alt=""
                    style={{
                      width: "250px",
                      height: "250px",
                      border: "1px solid #cfcfcf",
                      margin: "20px auto 0",
                    }}
                  />
                );
              })}
            </p>

            <p
              style={{
                textAlign: "center",
                color: "#555",
              }}
            >
              <em>$ {newProduct.price}</em>
            </p>
            <p
              style={{ textAlign: "center", width: "300px", margin: "auto" }}
              className="one_shop_text"
            >
              {newProduct.description}
            </p>
          </div>
        </h1>
      </div>
      <div
        className="w-[500px] h-[300px] rounded-[10px] bg-white mx-auto relative flex box-border "
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <span
          className="bg-[#c6ffb9] w-[47%] h-[100%] rounded-[10px]"
          style={{
            borderRadius: "10px 0 0 10px",
          }}
        >
          {/* <img
            src={ProductImages[0]?.imageUrl}
            alt=""
            className="w-[100%] h-[100%]"
          /> */}
        </span>
        <span className="bg-[#ffffff] w-[53%]  h-[100%]">
          <div className="block  w-[100%] mx-auto  h-[70%] px-5 pt-5">
            {/* <div className="flex  w-fit items-center mx-auto text-center "> */}
            <h2
              style={{
                // textAlign: "center",
                fontWeight: "600",
                textTransform: "uppercase",
                fontSize: "25px",
              }}
              className="mr-4"
            >
              {newProduct.productName}
            </h2>
            <h2 className="text-slate-600 text-[25px]">$ {newProduct.price}</h2>
            <h2 className="text-[14px] overflow-y-scroll h-[200px]">
              {newProduct.description}
            </h2>
            {/* </div> */}
          </div>
          <div className="flex  w-fit items-center mx-auto text-center mt-4">
            <button className="border flex items-center px-3 py-2 rounded-[5px]  bg-slate-600  hover:bg-slate-500 text-white">
              <FaIcons.FaShoppingCart className="mr-2" /> Add to cart
            </button>
          </div>
        </span>
      </div>
      <Footer />
    </div>
  );
};

const mapState = ({ oneProduct }) => ({
  fetchedProduct: oneProduct.oneValue,
});

export default connect(mapState, {
  getOneProduct,
})(ShopOne);
