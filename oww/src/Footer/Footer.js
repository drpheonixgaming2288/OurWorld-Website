import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      className=" text-center text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container p-4">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/OurWorldMetav"
            target={"_blank"}
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://discord.gg/mMV3VJp8Zt"
            target={"_blank"}
            role="button"
          >
            <i className="fab fa-discord"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/OurWorldMetaverse"
            target={"_blank"}
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        <section className="mb-4">
          <p>You found the secret message, congrats!</p>
        </section>
        <section>
          <div className="row">
            <div className="col-md-6 mx-auto mb-4 mb-md-0">
              <h5 className="text-uppercase">Stuff</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    onClick={() => {
                      navigate("/contact");
                    }}
                    className="text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/careers");
                    }}
                    className="text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/about");
                    }}
                    className="text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Who are we?
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/projects");
                    }}
                    className="text-white"
                    style={{ cursor: "pointer" }}
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="https://ourworldmetaverse.xyz/">
          {" "}
          OurWorld
        </a>
      </div>
    </footer>
  );
}
