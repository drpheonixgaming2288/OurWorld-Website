import React, { useEffect } from "react";
import Logo from "../Contents/Img/ourworld-05.png";

export default function OWVProg() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div id="preview" class="preview mx-auto">
        <div style={{ display: "none" }}></div>
        <div>
          <div data-draggable="true" style={{ position: "relative" }}>
            <section
              draggable="false"
              class="container pt-5"
              data-v-271253ee=""
            >
              <section class="mb-10 text-center">
                <h2 class="fw-bold mb-5">
                  <span>OurWorldVR Programming Team</span> <u class="text-primary"></u>
                </h2>
                <div class="row gx-lg-5 mx-auto">
                  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 mx-auto">
                    <div class="card">
                      <div
                        class="bg-image hover-overlay ripple"
                        data-ripple-color="light"
                      >
                        <img
                          src="https://github.com/OurWorldMetaverse/imgs/blob/main/face.jpg?raw=true"
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
                        <h5 class="fw-bold">Dylan Rogers</h5>
                        <p class="text-muted">Chief Programmer</p>
                        <p class="text-muted">dylan@ourworldmetaverse.xyz</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 mb-4 mb-lg-0 mx-auto">
                    <div class="card">
                      <div
                        class="bg-image hover-overlay ripple"
                        data-ripple-color="light"
                      >
                        <img
                          src="https://github.com/OurWorldMetaverse/imgs/blob/main/OurWorldLogo.png?raw=true"
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
                            d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                          ></path>
                        </svg>
                      </div>
                      <div class="card-body">
                        <h5 class="fw-bold">SE.RE</h5>
                        <p class="text-muted">
                          Junior Programmer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 mb-4 mb-lg-0 mx-auto">
                    <div class="card">
                      <div
                        class="bg-image hover-overlay ripple"
                        data-ripple-color="light"
                      >
                        <img
                          src="https://github.com/OurWorldMetaverse/imgs/blob/main/OurWorldLogo.png?raw=true"
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
                            d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                          ></path>
                        </svg>
                      </div>
                      <div class="card-body">
                        <h5 class="fw-bold">EzOvi</h5>
                        <p class="text-muted">
                          Junior Programmer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
