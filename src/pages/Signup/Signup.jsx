import React from "react";
import { registerUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@material-ui/core";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import "../ProductActions/ProductActions.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { countries } from "../../Data";
import Modal from "@mui/material/Modal";
import Menu from "@mui/material/Menu";

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

    console.log(formdata, "formdata");

    props.registerUser(formdata);
  };

  return (
    <div className="create-body">
      <ShopHeader />
      <Box className="box-container">
        <TextField
          value={firstName}
          required
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="text"
          name="firstName"
          label="First Name"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="text"
          name="lastName"
          label="Last Name"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="email"
          name="email"
          label="Email"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="password"
          name="password"
          label="Password"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="date"
          name="date"
          label="Date of birth"
          InputLabelProps={{
            shrink: true,
          }}
          value={birthDate}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <FormControl
          style={{ display: "block", margin: "10px" }}
          InputLabelProps={{
            shrink: true,
          }}
        >
          <InputLabel
            required
            InputLabelProps={{
              shrink: true,
            }}
          >
            Gender
          </InputLabel>
          <Select
            value={gender}
            defaultValue="male"
            label="Gender"
            InputLabelProps={{
              shrink: true,
            }}
            name="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="block w-[200px]"
          >
            <MenuItem value="male">male</MenuItem>
            <MenuItem value="female">female</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField
          required
          variant="outlined"
          select
          label="Phone Number"
          InputLabelProps={{
            shrink: true,
          }}
        >
          <MenuItem key="male" value="male">
            male
          </MenuItem>
          <MenuItem value="female">female</MenuItem>
        </TextField> */}
        <TextField
          required
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="number"
          name="number"
          label="Phone Number"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        {/* <FormControl
          style={{ display: "block", margin: "10px" }}
          InputLabelProps={{
            shrink: true,
          }}
        >
          <InputLabel
            required
            InputLabelProps={{
              shrink: true,
            }}
          >
            Country
          </InputLabel>
          <Select
            value={country}
            defaultValue="male"
            label="Gender"
            InputLabelProps={{
              shrink: true,
            }}
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            style={{ display: "block", width: "200px" }}
          >
            {countries?.map((values) => {
              return (
                <MenuItem key={values} value={values} id={values}>
                  {values}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl> */}
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 200 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={(e) => {
            const val = e.target.innerText.split(" (");
            setCountry(val[0]);
          }}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 }, width: 300 }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
                style={{ marginRight: "10px" }}
              />
              {option.label} (+{option.phone})
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              variant="outlined"
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          )}
        />
        <TextField
          required
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="text"
          name="city"
          label="City"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <TextField
          required
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="text"
          name="street"
          label="Street"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Street"
          value={street}
          onChange={(e) => {
            setStreet(e.target.value);
          }}
        />
        <TextField
          style={{ display: "block", margin: "10px", width: "200px" }}
          variant="outlined"
          type="file"
          name="picture"
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
            backgroundColor: "#1F618D",
            color: "#fff",
            height: "40px",
            marginLeft: "30px",
          }}
          onClick={() => submit()}
        >
          Send
        </Button>{" "}
      </Box>
      <ToastContainer theme="colored" />{" "}
    </div>
  );
};

export default connect(null, {
  registerUser,
})(Signup);
