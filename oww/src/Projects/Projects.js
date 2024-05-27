import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Helmet>
      <title>OurWorld | Projects</title>
    </Helmet>
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
        <div className="card mx-auto" style={{ width: "500px" }}>
          <img
            src="https://github.com/OurWorldMetaverse/imgs/blob/main/OWVLOGO.png?raw=true"
            className="card-img-top"
            alt="Fissure in Sandstone"
          />
          <div className="card-body" style={{ color: "black" }}>
            <h5 className="card-title">OurWorldVR</h5>
            <p className="card-text">
              OurWorldVR is a hyper-realistic VR metaverse with advanced
              physics, countries, and a giant open world.
            </p>
            <motion.button whileHover={{scale: "1.2"}} style={{background: "transparent", backgroundColor: "transparent", border: "transparent"}}>
              <a /*onClick={() => navigate("/owv")}*/ className="btn disabled">
                [DELAYED UNTIL FURTHER NOTICE, STAY TUNED.]
              </a>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
