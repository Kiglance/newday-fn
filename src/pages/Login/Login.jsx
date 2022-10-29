import React, { useState, useEffect } from "react";
import ShopHeader from "../../components/ShopHeader/ShopHeader";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

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
      .then(function (data) {
        data.json().then(function (response) {
          if (response.error !== undefined) {
            toast.error(response.error);
          }
          if (response.message !== undefined) {
            toast.success(response.message);

            setTimeout(() => {
              nav("/dashboard");
            }, 2000);
          }
          localStorage.setItem("token", response.token);
        });
      })
      .catch(function (err) {
        toast.error(err);
      });
  };

  const tokenId = window.location.href.split("?")[1];

  const verifyUser = async () => {
    const dt = fetch(
      `http://localhost:4040/api/v2/users/verify_user/${tokenId}`
    )
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        if (response.error !== undefined) {
          return toast.error(response.error);
        }
        if (response.message !== undefined) {
          return toast.success(response.message);
        }
      })
      .catch(function (err) {
        return toast.error(err);
      });
  };

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
            backgroundColor: "#1F618D",
            color: "#fff",
            height: "40px",
            margin: "0px auto 20px",
          }}
          onClick={() => submitRecord()}
        >
          Sign In
        </Button>
      </Box>
      <Button
        size="large"
        variant="contained"
        style={{
          backgroundColor: "#1F618D",
          color: "#fff",
          height: "40px",
          margin: "0px auto 20px",
          display: "none",
        }}
        onClick={() => verifyUser()}
      >
        verify
      </Button>

      <ToastContainer theme="colored" />
    </div>
  );
};

const mapState = ({ users }) => ({
  allUsers: users.data,
  isLoaded: users.isLoaded,
});

export default Login;
