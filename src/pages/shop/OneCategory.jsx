import React, { useEffect, useState } from "react";
import { getClassesOfCategory } from "../../redux/actions/categoryClassActions";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "./Shop.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/shard.jpeg";
import Categories from "../../components/Categories/Categories";

const OneCategory = (props) => {
  const { allClassesOfCategory } = props;
  const [classes, setClasses] = useState([]);

  const categId = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const nav = useNavigate();

  useEffect(() => {
    props.getClassesOfCategory(categId);
    if (allClassesOfCategory.data !== undefined) {
      setClasses(allClassesOfCategory.data);
    }
  }, [allClassesOfCategory.data]);

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
      >
        {" "}
        <BsIcons.BsArrowLeftSquareFill
          onClick={() => nav(-1)}
          style={{
            fontSize: "40px",
            color: "#00808095",
            margin: "50px",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            margin: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {classes?.map((values) => {
            return (
              <a href={`/category/class/${values.classId}`}>
                <div
                  key={values.classId}
                  style={{
                    position: "relative",
                    textAlign: "center",
                    color: "white",
                    margin: "20px",
                    zIndex: "1",
                  }}
                >
                  <img
                    src={img1}
                    alt=""
                    style={{
                      width: "200px",
                      height: "250px",
                      border: "1px solid #979797",
                    }}
                  />

                  <h1
                    id={values.classId}
                    style={{
                      zIndex: "1",
                      position: "absolute",
                      top: " 50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "100%",
                      background: "#979797ca",
                      padding: "20px 0",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    {values.className}
                  </h1>
                </div>
              </a>
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

const mapState = ({ classesOfCategory }) => ({
  allClassesOfCategory: classesOfCategory.data,
});

export default connect(mapState, {
  getClassesOfCategory,
})(OneCategory);
