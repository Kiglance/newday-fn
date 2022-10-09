import React from "react";
import { registerUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "../ProductActions/ProductActions.css";

const Signup = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState({
    file: [],
    filepreview: null,
  });
  const [birthDate, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const [isSucces, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    setPicture({
      ...picture,
      file: e.target.files[0],
      filepreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const submit = async () => {
    const formdata = new FormData();
    formdata.append("firstName", firstName);
    formdata.append("lastName", lastName);
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("birthDate", birthDate);
    formdata.append("gender", gender);
    formdata.append("phoneNumber", phoneNumber);
    formdata.append("country", country);
    formdata.append("city", city);
    formdata.append("street", street);
    formdata.append("picture", picture.file);

    props.registerUser(formdata);
  };

  return (
    <div className="create-body">
      <ShopHeader />
      <Box className="box-container">
        <TextField
          value={firstName}
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="text"
          label="First Name"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="text"
          label="Last Name"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="email"
          label="Email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="password"
          label="Password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="date"
          value={birthDate}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="text"
          label="Gender"
          placeholder="Gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="number"
          label="Phone Number"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="text"
          label="Country"
          placeholder="Country"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="text"
          label="City"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="text"
          label="Street"
          placeholder="Street"
          value={street}
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />
        <TextField
          style={{ display: "block", margin: "20px", width: "200px" }}
          variant="outlined"
          type="file"
          onChange={handleInputChange}
        />{" "}
        {picture.filepreview !== null ? (
          <img
            className="previewimg"
            src={picture.filepreview}
            alt="UploadImage"
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />
        ) : null}
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "#008080",
            color: "#fff",
            height: "40px",
            marginLeft: "30px",
          }}
          onClick={() => submit()}
        >
          Send
        </Button>{" "}
      </Box>
      <ToastContainer />{" "}
    </div>
  );
};

export default connect(null, {
  registerUser,
})(Signup);
