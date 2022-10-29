import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllProducts } from "../../redux/actions/productsActions";
import { connect } from "react-redux";
import * as FiIcons from "react-icons/fi";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";
import * as MdIcons from "react-icons/md";
import "../../pages/shop/Shop.css";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, TextField, Checkbox, FormControlLabel } from "@material-ui/core";

const Categories = (props) => {
  const { allProducts, allCategories } = props;

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [sortProp, setSortProp] = useState({
    0: true,
    1: false,
  });
  const [sortWord, setSortWord] = useState("name");

  useEffect(() => {
    props.getAllProducts();
    props.getAllCategories();
  }, []);

  const availableProducts = allProducts.body;
  const availableCategories = allCategories.body;

  const [anchorSr, setAnchorSr] = useState(null);
  const openSr = Boolean(anchorSr);

  const categoriesWithClasses = availableCategories?.filter((values) => {
    return values.Classes != "";
  });

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = availableProducts.filter((value) => {
      return value.productName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setAnchorSr(e.currentTarget);
    }
  };

  const handleCloseSr = () => {
    setAnchorSr(null);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorSort, setAnchorSort] = useState(null);
  const openSort = Boolean(anchorSort);
  const handleSort = (e) => {
    setAnchorSort(e.currentTarget);
  };
  const handleCloseSort = () => {
    setAnchorSort(null);
  };

  const [dts, setDts] = useState("");

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        boxShadow:
          "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
        background: "#fff",
        top: "60px",
        zIndex: "1000",
      }}
      className="sub_header_container"
    >
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        <div className="shop_categories">
          <h3>Categories</h3>
          <MdIcons.MdOutlineArrowDropDown
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            className="down_arrow_icons"
            onClick={handleClick}
          />
        </div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {categoriesWithClasses?.map((value) => {
            return (
              <a
                href={`/category/${value.categoryId}`}
                style={{ color: "#333" }}
                key={value.categoryId}
              >
                <MenuItem id={value.categoryId}>{value.categoryName}</MenuItem>
              </a>
            );
          })}
        </Menu>
        <div className="shop_categories">
          <h3>Sort by {sortWord}</h3>
          <MdIcons.MdOutlineArrowDropDown
            id="basic-button"
            aria-controls={openSort ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openSort ? "true" : undefined}
            className="down_arrow_icons"
            onClick={handleSort}
          />{" "}
        </div>{" "}
        <Menu
          id="basic-menu"
          anchorEl={anchorSort}
          open={openSort}
          onClose={handleCloseSort}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={(e) => {
              setSortWord(e.target.innerText);
              setAnchorSort(null);
            }}
          >
            name{" "}
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              setSortWord(e.target.innerText);
              setAnchorSort(null);
            }}
          >
            size{" "}
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              setSortWord(e.target.innerText);
              setAnchorSort(null);
            }}
          >
            price{" "}
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              setSortWord(e.target.innerText);
              setAnchorSort(null);
            }}
          >
            release-date{" "}
          </MenuItem>
          <hr />
          <MenuItem>
            <FormControlLabel
              control={<Checkbox defaultChecked style={{ color: "#1F618D" }} />}
              label="Ascending"
            />
          </MenuItem>
        </Menu>
      </div>{" "}
      <div
        className="search_container"
        style={{ height: "auto", padding: "10px" }}
      >
        <div className="align">
          <TextField
            variant="outlined"
            type="text"
            placeholder="Enter your search..."
            value={wordEntered}
            onChange={handleFilter}
            aria-controls={openSr ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openSr ? "true" : undefined}
          />{" "}
          <div>
            {filteredData.length === 0 ? (
              <BiIcons.BiSearch className="searchIcon" />
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
            <div>
              <Menu
                id="basic-menu"
                anchorEl={anchorSr}
                open={openSr}
                onClose={handleCloseSr}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ maxHeight: "70vh" }}
              >
                {filteredData.map((value) => {
                  return (
                    <a
                      href={`/product/${value.productId}`}
                      key={value.productId}
                    >
                      <MenuItem id={value.productId} sx={{ color: "#333" }}>
                        <img
                          src={value.productImage}
                          alt=""
                          style={{
                            width: "40px",
                            height: "55px",
                            margin: "0 10px",
                          }}
                        />
                        {value.productName}
                      </MenuItem>
                    </a>
                  );
                })}
              </Menu>
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
