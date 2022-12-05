import React, { useState, useEffect } from "react";
import { createCategory } from "../../redux/actions/categoryActions";
import { getAllClasses } from "../../redux/actions/classActions";
import { getAllCategories } from "../../redux/actions/categoryActions";
import { getAllProducts } from "../../redux/actions/productsActions";
import { assignClassToCategory } from "../../redux/actions/categoryClassActions";
import { assignProductToClass } from "../../redux/actions/classProductActions";
import { createClass } from "../../redux/actions/classActions";
import { Box, TextField, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ShopHeader from "../../components/ShopHeader/ShopHeader";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Categories = (props) => {
  const { allCategories, allClasses, allProducts } = props;
  const [categoryName, setCategoryName] = useState("");
  const [clsName, setClsName] = useState("");
  const [catName, setCatName] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [classId, setClassId] = useState("");
  const [productId, setProductId] = useState("");
  const [prodName, setProdName] = useState("");
  const [className, setClassName] = useState("");
  const [coverImage, setCoverImage] = useState({
    file: [],
    filepreview: null,
  });

  useEffect(() => {
    props.getAllCategories();
    props.getAllClasses();
    props.getAllProducts();
  }, []);

  const getCategoryId = (e) => {
    setCategoryId(e.target.id);
  };

  const getClassId = (e) => {
    setClassId(e.target.id);
  };

  const getProductId = (e) => {
    setProductId(e.target.id);
  };

  const availableCategories = allCategories.body;
  const availableClasses = allClasses.body;
  const availableProducts = allProducts.body;

  const saveCategory = () => {
    const send = {
      categoryName,
    };

    props.createCategory(send);
  };

  const handleInputChange = (e) => {
    setCoverImage({
      ...coverImage,
      file: e.target.files[0],
      filepreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const saveClass = async () => {
    const formdata = new FormData();
    formdata.append("className", className);
    formdata.append("coverImage", coverImage.file);

    props.createClass(formdata);
  };

  const handleClass = (event) => {
    setClsName(event.target.value);
  };

  const handleCategory = (event, v) => {
    setCatName(event.target.value);
  };

  const handleProduct = (event, v) => {
    setProdName(event.target.value);
  };

  const assignClass = () => {
    const data = {
      categoryId,
      classId,
    };

    props.assignClassToCategory(data);
  };

  const assignProduct = () => {
    const data = {
      classId,
      productId,
    };

    props.assignProductToClass(data);
  };

  const arrayTitle = availableProducts?.map((x, idx) => {
    return x.ProductImages[0]?.imageUrl;
  });

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
      <Box
        style={{
          width: "300px",
          height: "max-content",
          margin: "100px auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "#fff",
          border: "1px solid #1F618D90",
          borderRadius: "5px",
        }}
      >
        <TextField
          variant="outlined"
          type="text"
          label="Category"
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
          style={{ width: "90%", margin: "20px" }}
        />
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "#1F618D",
            color: "#fff",
            height: "40px",
            margin: "0px auto 20px",
          }}
          onClick={() => saveCategory()}
        >
          Save
        </Button>
      </Box>
      <Box
        style={{
          width: "300px",
          height: "max-content",
          margin: "100px auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "#fff",
          border: "1px solid #1F618D90",
          borderRadius: "5px",
        }}
      >
        <TextField
          variant="outlined"
          type="text"
          label="Class"
          value={className}
          onChange={(e) => {
            setClassName(e.target.value);
          }}
          style={{ width: "90%", margin: "20px" }}
        />{" "}
        <TextField
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="file"
          onChange={handleInputChange}
        />{" "}
        {coverImage.filepreview !== null ? (
          <img
            className="previewimg"
            src={coverImage.filepreview}
            alt="UploadImage"
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />
        ) : null}
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "#1F618D",
            color: "#fff",
            height: "40px",
            margin: "0px auto 20px",
          }}
          onClick={() => saveClass()}
        >
          Save
        </Button>
      </Box>
      <Box
        style={{
          width: "300px",
          height: "max-content",
          margin: "100px auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "#fff",
          border: "1px solid #1F618D90",
          borderRadius: "5px",
        }}
      >
        {" "}
        <FormControl style={{ width: "90%", margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={catName}
            label="Class name"
            onChange={handleCategory}
          >
            {availableCategories?.map((values) => {
              return (
                <MenuItem
                  key={values.categoryId}
                  value={values.categoryName}
                  id={values.categoryId}
                  onClick={getCategoryId}
                >
                  {values.categoryName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl style={{ width: "90%", margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">Class</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={clsName}
            label="Class"
            onChange={handleClass}
          >
            {availableClasses?.map((values) => {
              return (
                <MenuItem
                  key={values.classId}
                  value={values.className}
                  id={values.classId}
                  onClick={getClassId}
                >
                  {values.className}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "#1F618D",
            color: "#fff",
            height: "40px",
            margin: "0px auto 20px",
          }}
          onClick={() => assignClass()}
        >
          Save
        </Button>
      </Box>

      <Box
        style={{
          width: "300px",
          height: "max-content",
          margin: "100px auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "#fff",
          border: "1px solid #1F618D90",
          borderRadius: "5px",
        }}
      >
        <FormControl style={{ width: "90%", margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">Class</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={clsName}
            label="Class name"
            onChange={handleClass}
          >
            {availableClasses?.map((values) => {
              return (
                <MenuItem
                  key={values.classId}
                  value={values.className}
                  id={values.classId}
                  onClick={getClassId}
                >
                  {values.className}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl style={{ width: "90%", margin: "20px" }}>
          <InputLabel id="demo-simple-select-label">Product</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={prodName}
            label="Product"
            onChange={handleProduct}
          >
            {availableProducts?.map((values, idx) => {
              return (
                <MenuItem
                  key={values.productId}
                  value={values.productName}
                  id={values.productId}
                  onClick={getProductId}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <img
                    src={arrayTitle[idx]}
                    alt=""
                    style={{
                      width: "40px",
                      height: "55px",
                      margin: "0 10px",
                    }}
                  />{" "}
                  {values.productName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "#1F618D",
            color: "#fff",
            height: "40px",
            margin: "0px auto 20px",
          }}
          onClick={() => assignProduct()}
        >
          Save
        </Button>
      </Box>
      <br />
      <br />

      <br />
      <br />

      <ToastContainer theme="colored" />
    </div>
  );
};

const mapState = ({ classes, categories, products }) => ({
  allClasses: classes.data,
  allCategories: categories.data,
  allProducts: products.data,
});

export default connect(mapState, {
  createCategory,
  getAllClasses,
  getAllCategories,
  assignClassToCategory,
  assignProductToClass,
  createClass,
  getAllProducts,
})(Categories);
