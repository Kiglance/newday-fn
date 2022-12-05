import React, { useEffect, useRef, useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io5";
import * as FaIcons from "react-icons/fa";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllClasses } from "../../redux/actions/classActions";

const Dashboard = (props) => {
  const { allCategories, allClasses } = props;

  const [show, setShow] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showArticles, setShowArticles] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };
  const nav = useNavigate();

  const availableCategories = allCategories.body;
  const availableClasses = allClasses.body;

  useEffect(() => {
    props.getAllCategories();
    props.getAllClasses();
  }, []);
  return (
    <div>
      <div className="classes">
        <div className="sides">
          <div className="dash-side-bar">
            <ul>
              <li>
                <AiIcons.AiOutlineAreaChart
                  className="dash-icons"
                  style={{
                    color: isActive ? "#1f618d" : "#ffffff",
                  }}
                  onClick={handleClick}
                />{" "}
                Dashboard
              </li>

              <input type="checkbox" id="users" name="user" />
              <label
                htmlFor="users"
                className="label"
                onClick={() => {
                  setShowUsers((value) => !value);
                }}
              >
                <li>
                  {" "}
                  <FaIcons.FaUsers className="dash-icons" /> Users{" "}
                  {showUsers ? (
                    <IoIcons.IoChevronUp
                      style={{ position: "absolute", right: "20px" }}
                    />
                  ) : (
                    <IoIcons.IoChevronDown
                      style={{ position: "absolute", right: "20px" }}
                    />
                  )}
                </li>
              </label>

              <div className="div">
                {" "}
                <ul>
                  <li>Admins</li>
                  <li>Managers</li>
                  <li>Workers</li>
                  <li>Clients</li>
                  <li
                    onClick={() => {
                      nav("/users");
                    }}
                  >
                    All
                  </li>
                </ul>
              </div>

              <input type="checkbox" id="category" name="categ" />
              <label
                htmlFor="category"
                className="label"
                onClick={() => {
                  setShow((value) => !value);
                }}
              >
                <li>
                  <MdIcons.MdClass className="dash-icons" /> Categories
                  {show ? (
                    <IoIcons.IoChevronUp
                      style={{ position: "absolute", right: "20px" }}
                    />
                  ) : (
                    <IoIcons.IoChevronDown
                      style={{ position: "absolute", right: "20px" }}
                    />
                  )}
                </li>
              </label>

              <div className="div">
                {" "}
                <ul>
                  {availableCategories?.map((values) => {
                    return (
                      <li key={values.categiryId}>
                        {values.categoryName}{" "}
                        <BsIcons.BsThreeDotsVertical className="side-actions" />
                      </li>
                    );
                  })}
                  <li>All</li>
                </ul>
              </div>

              <input type="checkbox" id="class" name="categ" />
              <label
                htmlFor="class"
                className="label"
                onClick={() => {
                  setShowClasses((value) => !value);
                }}
              >
                <li>
                  <MdIcons.MdCategory className="dash-icons" /> Classes
                  {showClasses ? (
                    <IoIcons.IoChevronUp
                      style={{ position: "absolute", right: "20px" }}
                    />
                  ) : (
                    <IoIcons.IoChevronDown
                      style={{ position: "absolute", right: "20px" }}
                    />
                  )}
                </li>
              </label>

              <div className="div">
                <ul>
                  {availableClasses?.map((values) => {
                    return (
                      <li key={values.classId}>
                        {values.className}{" "}
                        <BsIcons.BsThreeDotsVertical className="side-actions" />
                      </li>
                    );
                  })}
                  <li>All</li>
                </ul>
              </div>

              <li>
                <AiIcons.AiOutlineCodeSandbox className="dash-icons" /> Products
              </li>

              <input type="checkbox" id="article" name="art" />
              <label
                htmlFor="article"
                className="label"
                onClick={() => {
                  setShowArticles((value) => !value);
                }}
              >
                <li>
                  <MdIcons.MdArticle className="dash-icons" /> Articles{" "}
                  {showArticles ? (
                    <IoIcons.IoChevronUp
                      style={{ position: "absolute", right: "20px" }}
                    />
                  ) : (
                    <IoIcons.IoChevronDown
                      style={{ position: "absolute", right: "20px" }}
                    />
                  )}
                </li>
              </label>

              <div className="div">
                {" "}
                <ul>
                  <li>Blogs</li>
                  <li>Tweets</li>
                </ul>
              </div>
              <li>
                <MdIcons.MdReviews className="dash-icons" /> Reviews
              </li>
              <li>
                <RiIcons.RiNotificationBadgeFill className="dash-icons" />{" "}
                Notifications
              </li>
              <li>
                <IoIcons.IoSettingsSharp className="dash-icons" /> Settings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = ({ categories, classes }) => ({
  allCategories: categories.data,
  allClasses: classes.data,
});

export default connect(mapState, { getAllCategories, getAllClasses })(
  Dashboard
);
