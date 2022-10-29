import React, { useEffect, useState } from "react";
import { getProductsOfClass } from "../../redux/actions/classProductActions";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "./Shop.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/shard.jpeg";

const Shop = (props) => {
  const { allProductsOfClass } = props;

  const [products, setProducts] = useState([]);

  const nav = useNavigate();
  const classId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const goBack = () => {
    nav("/arr");
  };

  useEffect(() => {
    props.getProductsOfClass(classId);
    if (allProductsOfClass.data !== undefined) {
      setProducts(allProductsOfClass.data);
    }
  }, [allProductsOfClass.data]);

  return (
    <div
      style={{
        backgroundColor: "#f1f1f1",
        minHeight: "100vh",
        width: "100vw",
        height: "fit-content",
      }}
    >
      <ShopHeader />{" "}
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
        {" "}
        <BsIcons.BsArrowLeftSquareFill
          onClick={() => nav(-1)}
          style={{
            fontSize: "40px",
            color: "#1F618D",
            margin: "0 50px",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {products?.map((values) => {
            return (
              <div key={values.productName} style={{ margin: "20px" }}>
                <p style={{ width: "200px", height: "250px" }}>
                  <a href={`/product/${values.productId}`}>
                    <img
                      src={values.productImage}
                      alt={values.productId}
                      name={values.productId}
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "1px solid #cfcfcf",
                      }}
                      id={values.productId}
                    />
                  </a>
                </p>
                <h1 style={{ textAlign: "center", width: "180px" }}>
                  {values.productName}
                </h1>
                <p style={{ textAlign: "center", color: "#555" }}>
                  <em>$ {values.price} </em>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="shop_footer">
        <div className="footer_logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer_center">
          <div>
            <AiIcons.AiFillFacebook className="shop_icons" />
            <AiIcons.AiFillTwitterSquare className="shop_icons" />
            <AiIcons.AiOutlineInstagram className="shop_icons" />
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <AiIcons.AiFillLinkedin className="shop_icons" />
            </a>
          </div>
          <div className="footer_text">@ newday_shop 2022</div>
        </div>
        <div className="footer_input">
          <input type="text" placeholder="Enter your email..." />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

const mapState = ({ productsOfClass }) => ({
  allProductsOfClass: productsOfClass.data,
});

export default connect(mapState, {
  getProductsOfClass,
})(Shop);
