import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Cookies from "js-cookie";

// components
// css
import "./signIn.css";
import { motion } from "framer-motion/dist/framer-motion";

export default function SignIn(props) {
  // error states
  const [emailVariant, setEmailVariant] = useState(false);
  const [passwordVariant, setPasswordVariant] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [signEmail, setEmail] = useState("");
  const [signPassword, setPassword] = useState("");

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
    setEmailVariant(false);
    setEmailHelperText("");
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    setPasswordVariant(false);
    setPasswordHelperText("");
  };

  const sendPostData = async () => {
    // validate user input
    if (signEmail === "") {
      setEmailVariant(true);
      setEmailHelperText("Email Required");
    } else if (signPassword === "") {
      setPasswordVariant(true);
      setPasswordHelperText("Password Required");
    } else {
      let api_url = "http://127.0.0.1:8000/api/auth/";
      let res = await axios.post(
        api_url,
        {
          email: signEmail,
          password: signPassword,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      );

      // manipulate data
      let data = res.data;
      if (data["status"] === "error") {
        // if account does not exist
        if (data["type"] === "not found") {
          setEmailVariant(true);
          setEmailHelperText("Invalid email");
        } else {
          setPasswordVariant(true);
          setPasswordHelperText("Password incorrect");
        }
      } else {
        // set cookie
        Cookies.set("email", signEmail, { secure: true });
        // redirect to index page if auth has passed
        window.location.href = "/index";
      }
    }
  };
  return (
    <div className="sign-in-container">
      <motion.div
        className="content-frame"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="logo">
          <img src="static/chatium-logo.png" alt="logo" />
        </div>
        <div className="signIn-form">
          <TextField
            id="email-input"
            label="Email"
            variant="filled"
            color="secondary"
            helperText={emailHelperText}
            error={emailVariant}
            inputProps={{
              style: {
                color: "white",
                backgroundColor: "#282e58",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            onChange={handleEmailInput}
            value={signEmail}
          />
          <TextField
            id="password-input"
            label="Password"
            variant="filled"
            type="password"
            margin="normal"
            color="secondary"
            helperText={passwordHelperText}
            error={passwordVariant}
            inputProps={{
              style: {
                color: "white",
                backgroundColor: "#282e58",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            onChange={handlePasswordInput}
            value={signPassword}
          />
          <div className="submit-area">
            <Button id="create-btn" href="/signup">
              Create Account
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#795ae098" }}
              id="signin-btn"
              onClick={sendPostData}
            >
              Sign In
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
