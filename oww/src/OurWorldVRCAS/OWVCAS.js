import React, { useEffect } from "react";
import Logo from "../Contents/Img/ourworld-05.png";

export default function OWVCAS() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
            <section
              draggable="false"
              class="container pt-5"
              data-v-271253ee=""
            >
              <section class="mb-10 text-center">
                <h2 class="fw-bold mb-5">
                  <span>OurWorldVR Concept Artists</span>{" "}
                  <u class="text-primary"></u>
                </h2>
                <div class="row gx-lg-5 mx-auto">
                  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 mx-auto">
                    <div class="card">
                      <div
                        class="bg-image hover-overlay ripple"
                        data-ripple-color="light"
                      >
                        <img
                          src="https://github.com/OurWorldMetaverse/imgs/blob/main/TheWolfPack.png?raw=true"
                          class="w-100"
                          alt=""
                          aria-controls="#picker-editor"
                        />
                        <svg
                          class="position-absolute"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 320"
                          style={{ left: 0, bottom: 0 }}
                        >
                          <path
                            fill="#fff"
                            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                          ></path>
                        </svg>
                      </div>
                      <div class="card-body">
                        <h5 class="fw-bold">Real Moon</h5>
                        <p class="text-muted">Junior Concept Artist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
    </>
  );
}
