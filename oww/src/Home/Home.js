import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import BG from "../Contents/Img/home-BG.png";
import Logo from "../Contents/Img/ourworld-05.png";
import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>OurWorld | Home</title>
        <meta
          name="description"
          content="Homepage of the OurWorld official website!"
        />
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
        <h1 style={{ fontFamily: "Conthrax" }} className="mb-5">
          Who are we?
        </h1>

        <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              Here's us!
            </h5>
            <h6 className="card-subtitle mb-2" style={{ color: "black" }}>
              (The Short Version)
            </h6>
            <p className="card-text" style={{ color: "black" }}>
              We are OurWorld, a technology company. We are working hard every
              day to bring the future to you!
            </p>
            <motion.button
              style={{
                background: "transparent",
                color: "transparent",
                border: "transparent",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/about")}
              >
                The Long version
              </button>
            </motion.button>

            <motion.button
              style={{
                background: "transparent",
                color: "transparent",
                border: "transparent",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button type="button" className="btn btn-secondary">
                <a
                  href="https://discord.gg/2hgX8S3GJz"
                  target={"_blank"}
                  style={{ color: "white" }}
                >
                  Join the Discord
                </a>
              </button>
            </motion.button>
          </div>
        </div>

        <h1 style={{ fontFamily: "Conthrax" }} className="mb-5">
          What are we working on?
        </h1>

        <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              Here's a list of our projects!
            </h5>
            <p className="card-text" style={{ color: "black" }}>
              -OurWorldVR
            </p>
            <motion.button
              style={{
                background: "transparent",
                color: "transparent",
                border: "transparent",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/projects")}
              >
                More Detail
              </button>
            </motion.button>
          </div>
        </div>

        <h1 style={{ fontFamily: "Conthrax" }} className="mb-5">
          Can I contact you?
        </h1>

        <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              Yes! Contact us via our business or support email!
            </h5>
            <p className="card-text" style={{ color: "black" }}>
              (Click the button)
            </p>
            <motion.button
              style={{
                background: "transparent",
                color: "transparent",
                border: "transparent",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/contact")}
              >
                Contact Us!
              </button>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
