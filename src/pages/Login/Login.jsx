import React, { useState, useEffect } from "react";
import { getAllUsers, loginUser } from "../../redux/actions/userActions";
import { connect } from "react-redux";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";

const Login = (props) => {
  const { allUsers, isLoaded } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    props.getAllUsers();
  }, []);

  const submitRecord = (e) => {
    const send = {
      email,
      password,
    };

    fetch(`http://localhost:4040/api/v2/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(send),
    })
      .then(function (response) {
        response.json().then(function (data) {
          toast(data.message);
          console.log(data.token == "");
          localStorage.setItem("token", data.token);
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const availableUsers = allUsers.body;

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
        }}
      >
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ Color: "secondary" }}
          style={{ width: "90%", margin: "20px" }}
        />
        <TextField
          variant="outlined"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ Color: "secondary" }}
          style={{ width: "90%", margin: "20px" }}
        />
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "#008080",
            color: "#fff",
            height: "40px",
            margin: "0px auto 20px",
          }}
          onClick={() => submitRecord()}
        >
          Sign In
        </Button>
      </Box>
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
        {availableUsers?.map((values) => {
          console.log("--------------", values.Profiles.picture == "");
          return (
            <div
              key={values.userId}
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <div>
                <img
                  src={values.Profiles.picture}
                  alt=""
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "1px solid red",
                    margin: "10px",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <h1
                  style={{
                    margin: "0 10px",
                  }}
                >
                  {values.firstName}
                </h1>
                <h1
                  style={{
                    margin: "0 10px",
                  }}
                >
                  {values.lastName}
                </h1>
                <h1
                  style={{
                    margin: "0 10px",
                  }}
                >
                  {values.email}
                </h1>
                <h1
                  style={{
                    margin: "0 10px",
                  }}
                >
                  {values.Profiles.phoneNumber}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  );
};

const mapState = ({ users }) => ({
  allUsers: users.data,
  isLoaded: users.isLoaded,
});

export default connect(mapState, {
  getAllUsers,
})(Login);
