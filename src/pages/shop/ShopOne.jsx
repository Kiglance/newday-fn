import React, { useEffect, useState } from "react";
import { getOneProduct } from "../../redux/actions/productsActions";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "./Shop.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Categories from "../../components/Categories/Categories";

const ShopOne = (props) => {
  const { isLoaded, fetchedProduct } = props;

  const [newProduct, setNewProduct] = useState("");

  const nav = useNavigate();

  const prodId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  useEffect(() => {
    props.getOneProduct(prodId);
    if (fetchedProduct.body !== undefined) {
      setNewProduct(fetchedProduct.body.data);
    }
  }, [fetchedProduct.body]);

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
          <div style={{ width: "250px", margin: "auto" }}>
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
                width: "200px",
                margin: "auto",
              }}
            >
              <img
                src={newProduct.productImage}
                alt=""
                style={{
                  width: "100%",
                  height: "250px",
                  border: "1px solid #cfcfcf",
                  margin: "20px auto 0",
                }}
              />
            </p>

            <p
              style={{
                textAlign: "center",
                color: "#555",
              }}
            >
              <em>$ {newProduct.price}</em>
            </p>
            <p style={{ textAlign: "center" }} className="one_shop_text">
              {newProduct.description}
            </p>
          </div>
        </h1>
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

const mapState = ({ oneProduct }) => ({
  fetchedProduct: oneProduct.oneValue,
});

export default connect(mapState, {
  getOneProduct,
})(ShopOne);
