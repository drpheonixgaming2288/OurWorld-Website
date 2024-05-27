import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Logo from "../Contents/Img/OWVLOGO-NOBG.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function OWV() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>OurWorldVR</title>
        <meta name="description" content="OurWorldVR's Webpage!" />
      </Helmet>
      <div
        className="bg-image p-5 text-center shadow-1-strong text-white"
        style={{
          backgroundImage:
            "url('https://github.com/OurWorldMetaverse/imgs/blob/main/home-BG.png?raw=true')",
          height: "100",
        }}
      >
        <img src="https://github.com/OurWorldMetaverse/imgs/blob/main/OWVLOGO-NOBG.png?raw=true" height="90px" />

        <p style={{ fontFamily: "Conthrax" }}>The future of metaverses.</p>
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
          What is OurWorldVR?
        </h1>

        <div
          className="card mx-auto mb-5 text-center"
          style={{ width: "50rem" }}
        >
          <div
            className="card-body"
            style={{ color: "black", fontFamily: "Conthrax" }}
          >
            OurWorldVR is OurWorld's VR metaverse. It is currently very
            barebones, but it has been researched very much, and we know what
            we're doing. What's so special? OurWorldVR is an original idea. We
            are going to implement many physics based aspects to make it feel as
            realistic as possible, it will have a giant open world for people to
            have fun in. There will also be countries, cities, places to live
            and stuff to buy, etc etc etc.
          </div>

          <div
            className="card-footer"
            style={{ color: "black", fontFamily: "Conthrax" }}
          >
            OurWorldVR does not have an alpha version currently, stay tuned!
          </div>
        </div>

        {/* <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              Want to back us?
            </h5>
            <h6 className="card-subtitle mb-2" style={{ color: "black" }}>
              (Do ya?)
            </h6>
            <p className="card-text" style={{ color: "black" }}>
              You can back us via the OurWorldVR Kickstarter. It means a lot if you do!
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
              <a href="https://www.kickstarter.com/projects/ourworldvr/ourworldvr" target={"_blank"}>
                <button type="button" className="btn btn-secondary">
                  Back us!
                </button>
              </a>
            </motion.button>
          </div>
        </div> */}

        <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              Join the Discord!
            </h5>
            <h6 className="card-subtitle mb-2" style={{ color: "black" }}>
              (Join it)
            </h6>
            <p className="card-text" style={{ color: "black" }}>
              If you join the Discord server you will get access to very early
              updates, and an amazing community.
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
              <a href="https://discord.gg/2hgX8S3GJz" target={"_blank"}>
                <button type="button" className="btn btn-secondary">
                  Join it!
                </button>
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
