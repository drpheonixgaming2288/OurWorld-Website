import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Helmet>
      <title>OurWorld | About</title>
    </Helmet>
      <BrowserView>
        <div
          id="carouselBasicExample"
          class="carousel slide carousel-fade"
          data-mdb-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-mdb-target="#carouselBasicExample"
              data-mdb-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://github.com/OurWorldMetaverse/imgs/blob/main/pexels-tara-winstead-8386440%20(1).jpg?raw=true"
                class="d-block w-100"
                height={"800px"}
                alt="Robot touching data"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>What do we do?</h5>
                <p>
                  We work very hard every day to create extremely high tech
                  projects to help make the future amazing.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://github.com/OurWorldMetaverse/imgs/blob/main/pexels-cottonbro-studio-4069291.jpg?raw=true"
                class="d-block w-100"
                height={"800px"}
                alt="Working hard"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Why do we do it?</h5>
                <p>
                  The future of the world isn't certain. We want to increase the
                  probability of it being amazing. We have an extreme passion
                  for technology and do our absolute best to make it amazing.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://github.com/OurWorldMetaverse/imgs/blob/main/pexels-rocketmann-team-9486675%20(1).jpg?raw=true"
                class="d-block w-100"
                height={"800px"}
                alt="Cliff Above a Stormy Sea"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>"You're just gonna give up."</h5>
                <p>
                  You can believe that if you want, but we don't plan on it. We
                  have extreme work ethic and plan to keep it that way.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </BrowserView>

      <MobileView>
        <div className="card mx-auto mb-5" style={{ width: "18rem", marginTop: "20px" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              What do we do?
            </h5>
            <p className="card-text" style={{ color: "black" }}>
              We work very hard every day to create extremely high tech projects
              to help make the future amazing.
            </p>
          </div>
        </div>

        <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              Why do we do it?
            </h5>
            <p className="card-text" style={{ color: "black" }}>
              The future of the world isn't certain. We want to increase the
              probability of it being amazing. We have an extreme passion for
              technology and do our absolute best to make it amazing.
            </p>
          </div>
        </div>

        <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ color: "black" }}>
              "You're just gonna give up." -random person
            </h5>
            <p className="card-text" style={{ color: "black" }}>
              You can believe that if you want, but we don't plan on it. We have
              extreme work ethic and plan to keep it that way.
            </p>
          </div>
        </div>
      </MobileView>
    </>
  );
}
