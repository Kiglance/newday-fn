import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllProducts } from "../../redux/actions/productsActions";
import { connect } from "react-redux";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import "../../pages/shop/Shop.css";

const Categories = (props) => {
  const { allProducts, allCategories } = props;

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [buttonIsClicked, setbuttonIsClicked] = useState(true);

  useEffect(() => {
    props.getAllProducts();

    props.getAllCategories();
  }, []);

  const availableProducts = allProducts.body;
  const availableCategories = allCategories.body;

  const categoriesWithClasses = availableCategories?.filter((values) => {
    return values.Classes != "";
  });

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

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        borderBottom: "1px solid #606060",
        background: "#fff",
        top: "60px",
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
            <div>
              <div className="dataResult">
                {categoriesWithClasses?.map((value) => {
                  return (
                    <a href={`/category/${value.categoryId}`}>
                      <div
                        className="dataItem"
                        key={value.categoryId}
                        style={{ cursor: "pointer" }}
                      >
                        <p id={value.categoryId}>{value.categoryName}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>{" "}
          </>
        ) : null}
      </div>{" "}
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
                  <a href={`/product/${value.productId}`}>
                    <div className="dataItem" key={value.productId}>
                      <p id={value.productId}>{value.productName}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapState = ({ products, categories }) => ({
  allCategories: categories.data,
  isLoaded: products.isLoaded,
  allProducts: products.data,
});

export default connect(mapState, { getAllProducts, getAllCategories })(
  Categories
);
