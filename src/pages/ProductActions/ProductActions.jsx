import React from "react";
import { createProduct } from "../../redux/actions/productsActions";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import "./ProductActions.css";
import ShopHeader from "../../components/ShopHeader/ShopHeader";

const ProductActions = (props) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productImage, setProductImage] = useState({
    file: [],
    filepreview: null,
  });
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [edition, setEdition] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleInputChange = (event) => {
    setProductImage({
      ...productImage,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const submit = async () => {
    const formdata = new FormData();
    formdata.append("productName", productName);
    formdata.append("price", price);
    formdata.append("productImage", productImage.file);
    formdata.append("description", description);
    formdata.append("size", size);
    formdata.append("author", author);
    formdata.append("ISBN", ISBN);
    formdata.append("edition", edition);
    formdata.append("releaseDate", releaseDate);

    props.createProduct(formdata);
  };
  return (
    <div className="create-body">
      <ShopHeader />
      <Box className="box-container">
        <TextField
          value={productName}
          required
          style={{ display: "block", margin: "20px" }}
          variant="outlined"
          type="text"
          label="product name"
          placeholder="product name"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <TextField
          value={price}
          required
          style={{ display: "block", margin: "20px" }}
          variant="outlined"
          type="number"
          label="Price"
          placeholder="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          value={size}
          required
          style={{ display: "block", margin: "20px" }}
          variant="outlined"
          type="number"
          label="Size"
          placeholder="Size"
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <TextField
          value={author}
          required
          style={{ display: "block", margin: "20px" }}
          variant="outlined"
          type="text"
          label="Author"
          placeholder="Author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        />
        <TextField
          value={ISBN}
          required
          style={{ display: "block", margin: "20px" }}
          variant="outlined"
          type="number"
          label="ISBN"
          placeholder="ISBN"
          onChange={(e) => {
            setISBN(e.target.value);
          }}
        />
        <TextField
          value={edition}
          required
          style={{ display: "block", margin: "20px" }}
          variant="outlined"
          type="number"
          label="Edition"
          placeholder="Edition"
          onChange={(e) => {
            setEdition(e.target.value);
          }}
        />
        <TextField
          value={releaseDate}
          style={{ display: "block", margin: "20px" }}
          variant="outlined"
          type="date"
          onChange={(e) => {
            setReleaseDate(e.target.value);
          }}
        />
        <TextField
          style={{ display: "block", margin: "20px" }}
          variant="outlined"
          type="file"
          onChange={handleInputChange}
        />{" "}
        <TextField
          value={description}
          required
          style={{ display: "block", margin: "20px" }}
          width="900px"
          variant="outlined"
          type="text"
          label="Description"
          placeholder="Description"
          multiline
          minRows={4}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button
          size="large"
          variant="contained"
          style={{ backgroundColor: "#1F618D", color: "#fff", height: "40px" }}
          onClick={() => submit()}
        >
          Save
        </Button>{" "}
      </Box>{" "}
      {productImage.filepreview !== null ? (
        <img
          className="previewimg"
          src={productImage.filepreview}
          alt="UploadImage"
          style={{
            width: "200px",
            height: "250px",
            display: "block",
            margin: "20px auto",
          }}
        />
      ) : null}
      <ToastContainer theme="colored" />{" "}
    </div>
  );
};

export default connect(null, {
  createProduct,
})(ProductActions);
