import React, { useEffect, useState } from "react";
import {
  getAllProducts,
  getOneProduct,
} from "../../redux/actions/productsActions";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllClasses } from "../../redux/actions/classActions";
import { getClassesOfCategory } from "../../redux/actions/categoryClassActions";
import { getProductsOfClass } from "../../redux/actions/classProductActions";
import { connect } from "react-redux";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import * as AiIcons from "react-icons/ai";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "./Shop.css";
import logo from "../../assets/wordft.png";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/shard.jpeg";

const Shop = (props) => {
  const {
    allProducts,
    isLoaded,
    fetchedProduct,
    allCategories,
    allClasses,
    allClassesOfCategory,
    allProductsOfClass,
  } = props;

  const [onePdt, setOnePdt] = useState(false);
  const [newProduct, setNewProduct] = useState("");
  const [buttonIsClicked, setbuttonIsClicked] = useState(true);
  const [categId, setCategId] = useState("");
  const [classId, setClassId] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [classes, setClasses] = useState([]);
  const [products, setProducts] = useState([]);
  const [onClass, setOnClass] = useState(false);

  const nav = useNavigate();

  useEffect(() => {
    props.getAllProducts();

    props.getAllCategories();

    props.getAllClasses();

    if (fetchedProduct.body !== undefined) {
      setNewProduct(fetchedProduct.body.data);
    }
    if (allClassesOfCategory !== undefined) {
      setClasses(allClassesOfCategory.data);
    }
    if (allProductsOfClass !== undefined) {
      setProducts(allProductsOfClass.data);
    }
  }, [fetchedProduct.body, allClassesOfCategory.data, allProductsOfClass.data]);

  // useEffect(() => {
  //   props.getClassesOfCategory();
  // }, [allClassesOfCategory.body]);

  // useEffect(() => {
  //   props.getProductsOfClass();
  // }, [allProductsOfClass.body]);

  const getOnePdt = (e) => {
    if (e.target.name !== undefined) {
      props.getOneProduct(e.target.name);
    }
    if (e.target.id !== undefined) {
      props.getOneProduct(e.target.id);
    }
    setOnePdt(true);
  };

  const getClassOfCat = (e) => {
    if (e.target.id !== undefined) {
      console.log(e.target.id);
      props.getClassesOfCategory(e.target.id);
    }
    setbuttonIsClicked(true);
    setOnClass(true);
  };

  const getProductsOfClass = (e) => {
    if (e.target.id !== undefined) {
      console.log(e.target.id);
      props.getProductsOfClass(e.target.id);
    }
  };

  const availableProducts = allProducts.body;
  const availableCategories = allCategories.body;
  const availableClasses = allClasses.body;

  const categoriesWithClasses = availableCategories?.filter((values) => {
    return values.Classes != "";
  });
  const classesWithProducts = availableClasses?.filter((values) => {
    return values.Products;
  });
  const productsOfClasses = availableProducts?.filter((values) => {
    return values.classId == classId;
  });

  const getProducts = (e) => {
    setClassId(e.target.id);
    setbuttonIsClicked(true);
  };

  const handleFilter = (e) => {
    setbuttonIsClicked(true);
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = availableProducts.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setbuttonIsClicked(true);
  };

  const searchNotFound = () => {
    setbuttonIsClicked(true);
  };
  const displayCategories = () => {
    setbuttonIsClicked((value) => !value);
  };

  console.log(
    "**********_----------availableClasses----------_**********",
    products
  );

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
          position: "fixed",
          width: "100%",
          borderBottom: "1px solid #606060",
          background: "#fff",
          top: "70px",
          zIndex: "1000",
        }}
        className="sub_header_container"
      >
        <div>
          <div className="shop_categories">
            <h3>CATEGORIES</h3>
            {buttonIsClicked ? (
              <span>
                <FiIcons.FiArrowDown
                  className="down_arrow_icons"
                  onClick={displayCategories}
                />
              </span>
            ) : (
              <>
                <span>
                  <FiIcons.FiArrowUp
                    className="down_arrow_icons"
                    onClick={displayCategories}
                  />
                </span>
              </>
            )}
          </div>
          {!buttonIsClicked ? (
            <>
              {" "}
              <div style={{ zIndex: "100", position: "absolute" }}>
                <div className="dataResult">
                  {categoriesWithClasses.map((value) => {
                    return (
                      <div className="dataItem" key={value.categoryId}>
                        <p onClick={getClassOfCat} id={value.categoryId}>
                          {value.categoryName}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>{" "}
            </>
          ) : null}

          <div>
            {productsOfClasses?.map((values) => {
              return (
                <div key={values.productName} style={{ margin: "20px" }}>
                  <h1 style={{ textAlign: "center", fontWeight: "600" }}>
                    {values.productName}
                  </h1>
                  <p style={{ textAlign: "center" }}>$ {values.price}</p>
                  <p style={{ width: "400px", height: "250px" }}>
                    <img
                      src={values.productImage}
                      alt={values.productId}
                      name={values.productId}
                      style={{ width: "100%", height: "100%" }}
                      id={values.productId}
                      onClick={getOnePdt}
                    />
                  </p>
                </div>
              );
            })}
          </div>
        </div>{" "}
        <div>
          {buttonIsClicked && (
            <div>
              {classesWithProducts?.map((values) => {
                <div key={values.classId} style={{ margin: "20px" }}>
                  <h1 style={{ textAlign: "center", fontWeight: "600" }}>
                    {values.className}
                  </h1>
                </div>;
              })}
            </div>
          )}
        </div>
        <div
          className="search_container"
          style={{ height: "auto", padding: "10px" }}
        >
          <div className="align">
            <input
              type="text"
              placeholder="Enter your search..."
              value={wordEntered}
              onChange={handleFilter}
            />{" "}
            <div>
              {filteredData.length === 0 ? (
                <BiIcons.BiSearch
                  className="searchIcon"
                  onClick={searchNotFound}
                />
              ) : (
                <IoIcons.IoClose
                  id="clearBtn"
                  onClick={clearInput}
                  className="searchIcon"
                />
              )}
            </div>
          </div>
          <div>
            {filteredData.length != 0 && (
              <div className="dataResult">
                {filteredData.map((value) => {
                  return (
                    <div className="dataItem" key={value.productId}>
                      <p onClick={getOnePdt} id={value.productId}>
                        {value.productName}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          minHeight: "100vh",
          width: "90%",
          margin: "0 auto",
          height: "fit-content",
          paddingTop: "80px",
        }}
      >
        {!onePdt ? (
          <>
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
                        onClick={getOnePdt}
                      />
                    </p>
                    <h1 style={{ textAlign: "center", width: "180px" }}>
                      {values.productName}
                    </h1>
                    <p style={{ textAlign: "center", fontWeight: "600" }}>
                      {values.price} $
                    </p>
                  </div>
                );
              })}
            </div>
            {onClass ? (
              <div>
                <div
                  style={{
                    margin: "20px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {classes?.map((values) => {
                    return (
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
                          onClick={getProductsOfClass}
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
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                {isLoaded ? (
                  <>
                    <div>
                      <div
                        style={{
                          margin: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {classes?.map((values) => {
                          return (
                            <div
                              key={values.classId}
                              style={{
                                margin: "0 20px",
                                cursor: "pointer",
                                // border: "1px solid #000",
                                padding: "10px",
                                borderRadius: "5px",
                                background: "#008080",
                                color: "#fff",
                              }}
                            >
                              <h1>{values.className}</h1>
                            </div>
                          );
                        })}
                      </div>
                    </div>{" "}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                      }}
                    >
                      {availableProducts.map((values) => {
                        return (
                          <div
                            key={values.productName}
                            style={{ margin: "20px" }}
                          >
                            <p style={{ width: "200px", height: "250px" }}>
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
                                onClick={getOnePdt}
                              />
                            </p>
                            <h1 style={{ textAlign: "center", width: "180px" }}>
                              {values.productName}
                            </h1>
                            <p
                              style={{ textAlign: "center", fontWeight: "600" }}
                            >
                              {values.price} $
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </>
                ) : null}
              </div>
            )}
          </>
        ) : (
          // (*****************************************************************************) //
          <>
            <div>
              <BsIcons.BsArrowLeftSquareFill
                onClick={() => {
                  setOnePdt(false);
                }}
                style={{
                  fontSize: "40px",
                  color: "#00808095",
                  margin: "50px",
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
                      color: "#008080",
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
                        margin: "20px auto",
                      }}
                    />
                  </p>

                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "600",
                      color: "#000",
                    }}
                  >
                    $ {newProduct.price}
                  </p>
                  <p style={{ textAlign: "center" }} className="one_shop_text">
                    {newProduct.description}
                  </p>
                </div>
              </h1>
            </div>
          </>
        )}{" "}
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

const mapState = ({
  products,
  oneProduct,
  categories,
  classes,
  classesOfCategory,
  productsOfClass,
}) => ({
  allProducts: products.data,
  fetchedProduct: oneProduct.oneValue,
  allCategories: categories.data,
  isLoaded: products.isLoaded,
  allClasses: classes.data,
  allClassesOfCategory: classesOfCategory.data,
  allProductsOfClass: productsOfClass.data,
});

export default connect(mapState, {
  getAllProducts,
  getOneProduct,
  getAllCategories,
  getAllClasses,
  getClassesOfCategory,
  getProductsOfClass,
})(Shop);
