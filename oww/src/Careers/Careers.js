import React, { useEffect } from "react";
import RGF from "react-google-forms";
import { Helmet } from "react-helmet";

export default function Careers() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
      
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
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe1Q95eVASqk4c1bvim-suWmp6sJRlKAez99YHrtBd-6-ZvHA/viewform?embedded=true"
        width="640"
        height="942"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}
