import React, { useContext } from "react";
import "./Navbar.css";
import Logo from "../Contents/Img/ourworld-05.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../Contexts/Context";
import {getAuth} from 'firebase/auth'
import firebase from "../firebase-config";

export default function Navbar() {
  const Navigate = useNavigate();

  const user = useContext(UserContext);
  const auth = getAuth(firebase);

  function handleLogout() {
    console.log("AAAAAAAAA")
    auth.signOut(user)
    document.location.reload()
  }

  // function DisplayLogin() {
  //   if (!user.isLoggedIn) {
  //     return(
  //       <motion.button
  //       style={{
  //         border: "transparent",
  //         color: "transparent",
  //         backgroundColor: "transparent",
  //       }}
  //       whileHover={{ scale: 1.2 }}
  //     >
  //       <li className="nav-item">
  //         <a
  //           className="nav-link"
  //           style={{ fontFamily: "Conthrax", cursor: "pointer" }}
  //           onClick={() => Navigate("/login")}
  //         >
  //           Login/Register
  //         </a>
  //       </li>
  //     </motion.button>
  //     )
  //   } else{
  //     return(
  //       <motion.button
  //       style={{
  //         border: "transparent",
  //         color: "transparent",
  //         backgroundColor: "transparent",
  //       }}
  //       whileHover={{ scale: 1.2 }}
  //     >
  //       <li className="nav-item">
  //         <a
  //           className="nav-link"
  //           style={{ fontFamily: "Conthrax", cursor: "pointer" }}
  //           onClick={() => handleLogout()}
  //         >
  //           Logout
  //         </a>
  //       </li>
  //     </motion.button>
  //     )
  //   }
  // }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      id="Navbar__Gradient"
      style={{ position: "sticky", top: "0px", zIndex: "99" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => Navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <motion.button
            style={{
              border: "transparent",
              color: "transparent",
              backgroundColor: "transparent",
            }}
            whileHover={{ scale: 1.5 }}
          >
            <img src="https://github.com/OurWorldMetaverse/imgs/blob/main/ourworld-05.png?raw=true" alt="OurWorld logo" height={"45px"} />
          </motion.button>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <motion.button
              style={{
                border: "transparent",
                color: "transparent",
                backgroundColor: "transparent",
              }}
              whileHover={{ scale: 1.2 }}
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ fontFamily: "Conthrax", cursor: "pointer" }}
                  onClick={() => Navigate("/about")}
                >
                  Who are we?
                </a>
              </li>
            </motion.button>
            <motion.button
              style={{
                border: "transparent",
                color: "transparent",
                backgroundColor: "transparent",
              }}
              whileHover={{ scale: 1.2 }}
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ fontFamily: "Conthrax", cursor: "pointer" }}
                  onClick={() => Navigate("/team")}
                >
                  The OurWorld Team
                </a>
              </li>
            </motion.button>
            <motion.button
              style={{
                border: "transparent",
                color: "transparent",
                backgroundColor: "transparent",
              }}
              whileHover={{ scale: 1.2 }}
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ fontFamily: "Conthrax", cursor: "pointer" }}
                  onClick={() => Navigate("/projects")}
                >
                  Projects
                </a>
              </li>
            </motion.button>
            <motion.button
              style={{
                border: "transparent",
                color: "transparent",
                backgroundColor: "transparent",
              }}
              whileHover={{ scale: 1.2 }}
            >
              <li className="nav-item">
                <a
                  className="nav-link"
                  style={{ fontFamily: "Conthrax", cursor: "pointer" }}
                  onClick={() => Navigate("/contact")}
                >
                  Contact Us
                </a>
              </li>
            </motion.button>
            {/* <DisplayLogin /> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
