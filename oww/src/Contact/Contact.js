import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import BG from "../Contents/Img/home-BG.png";
import Logo from "../Contents/Img/ourworld-05.png";
import { motion } from "framer-motion";

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>OurWorld | Contact</title>
        <meta
          name="description"
          content="Contact page of the official OurWorld website."
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
        <h1 style={{ fontFamily: "Conthrax" }} className="mb-3">
          Wish to contact us?
        </h1>
        <h3 className="mb-5" style={{ fontFamily: "Conthrax" }}>We'd love to hear from you!</h3>

        <div className="card mx-auto" style={{width: "50vw"}}>
          <div
            className="card-body text-center"
            style={{ backgroundColor: "white", color: "black"}}
            
          >
            <h2 style={{fontFamily: "Conthrax"}}>Business Enquiries Email:</h2>
            <h4 as={{Link}} style={{cursor: "pointer"}} onClick={() => window.location = 'mailto:business@ourworldmetaverse.xyz'}>business@ourworldmetaverse.xyz</h4>
          </div>
        </div>

        <div className="card mx-auto" style={{width: "50vw"}}>
          <div
            className="card-body text-center"
            style={{ backgroundColor: "white", color: "black"}}
            
          >
            <h2 style={{fontFamily: "Conthrax"}}>Support Email:</h2>
            <h4 as={{Link}} style={{cursor: "pointer"}} onClick={() => window.location = 'mailto:support@ourworldmetaverse.xyz'}>support@ourworldmetaverse.xyz</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
