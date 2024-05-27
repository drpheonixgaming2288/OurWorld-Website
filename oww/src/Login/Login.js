import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Contents/Img/ourworld-05.png";
import { UserContext } from "../Contexts/Context";
import firebase from "../firebase-config";
import {Alert} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default function Login() {
  const user = useContext(UserContext);

  const auth = getAuth(firebase);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("IN USE EFFECT" + user.IsLoggedIn);
  }, [user]);

  async function handleSubmit(e) {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCred) => {
        console.log("IS LOGGED IN" + user.IsLoggedIn);
        user.setIsLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setShowError(true);

        console.log(errorMessage);
      });
  }

  return (
    <>
      {user.IsLoggedIn}
      <Helmet>
        <title>OurWorld | Login</title>
      </Helmet>
      <div
        className="bg-image p-5 text-center shadow-1-strong text-white"
        style={{
          backgroundImage:
            "url('https://github.com/OurWorldMetaverse/imgs/blob/main/home-BG.png?raw=true')",
          height: "100",
        }}
      >
        <img src="https://github.com/OurWorldMetaverse/imgs/blob/main/ourworld-05.png?raw=true" height="90px" />

        <p style={{ fontFamily: "Conthrax" }}>
          Making the future, for the people.
        </p>
      </div>
      <div
        className="bg-image p-5 text-center shadow-1-strong text-white"
        style={{
          background: "hsla(0, 0%, 27%, 1)",

          background:
            "linear-gradient(135deg, hsla(0, 0%, 27%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)",

          background:
            "-moz-linear-gradient(135deg, hsla(0, 0%, 27%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)",

          background:
            "-webkit-linear-gradient(135deg, hsla(0, 0%, 27%, 1) 0%, hsla(0, 0%, 0%, 1) 100%)",
          height: "100%",
        }}
      >
        <h1 className="mb-4" style={{ fontFamily: "Conthrax" }}>
          Login
        </h1>
        <div
          class="input-group mb-3 mx-auto text-center"
          style={{ width: "30vw" }}
        >
          <input
            type="email"
            class="form-control text-center"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
        </div>

        <div
          class="input-group mx-auto mb-3 text-center"
          style={{ width: "30vw" }}
        >
          <input
            type="password"
            class="form-control text-center"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon2"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
          />
        </div>

        <motion.button
          whileHover={{ scale: "1.3" }}
          style={{
            border: "none",
            background: "transparent",
            backgroundColor: "transparent",
          }}
        >
          <button class="btn btn-secondary mb-4" onClick={handleSubmit}>
            Login
          </button>
        </motion.button>
        <p
          onClick={() => navigate("/register")}
          style={{ fontFamily: "Conthrax", cursor: "pointer" }}
        >
          New User?
        </p>
      </div>

      <Alert show={showError} variant="danger">
        <Alert.Heading>Error!</Alert.Heading>
        <p>Check your email and password!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowError(false)} variant="outline-danger">
            Dismiss
          </Button>
        </div>
      </Alert>
    </>
  );
}
