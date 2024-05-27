import React, { useEffect } from "react";
import "./Team.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Team() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
    <Helmet>
      <title>OurWorld | Team</title>
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
        <div className="text-center">
          <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                Executive Leadership
              </h5>
              <h6 className="card-subtitle mb-2" style={{ color: "black" }}>
                (Description)
              </h6>
              <p className="card-text" style={{ color: "black" }}>
                These are the top leadership in the OurWorld company.
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
                  onClick={() => navigate("/team-executive")}
                >
                  View team members
                </button>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                OurWorldVR Leadership
              </h5>
              <h6 className="card-subtitle mb-2" style={{ color: "black" }}>
                (Description)
              </h6>
              <p className="card-text" style={{ color: "black" }}>
                These are the top leadership in the OurWorldVR metaverse development.
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
                  onClick={() => navigate("/team-lead-ourworldvr")}
                >
                  View team members
                </button>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                OurWorldVR Programmers
              </h5>
              <h6 className="card-subtitle mb-2" style={{ color: "black" }}>
                (Description)
              </h6>
              <p className="card-text" style={{ color: "black" }}>
                These are the programmers working on OurWorldVR.
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
                  onClick={() => navigate("/team-ourworldvr-prog")}
                >
                  View team members
                </button>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                OurWorldVR 3D Modeling Artists
              </h5>
              <h6 className="card-subtitle mb-2" style={{ color: "black" }}>
                (Description)
              </h6>
              <p className="card-text" style={{ color: "black" }}>
                These are the 3D modeling artists working on OurWorldVR.
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
                  onClick={() => navigate("/team-ourworldvr-3dm")}
                >
                  View team members
                </button>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="card mx-auto mb-5" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title" style={{ color: "black" }}>
                OurWorldVR Concept Artists
              </h5>
              <h6 className="card-subtitle mb-2" style={{ color: "black" }}>
                (Description)
              </h6>
              <p className="card-text" style={{ color: "black" }}>
                These are the concept artists working on OurWorldVR.
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
                  onClick={() => navigate("/team-ourworldvr-cas")}
                >
                  View team members
                </button>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
