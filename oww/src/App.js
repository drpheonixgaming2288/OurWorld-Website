import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Team from "./Team/Team";
import Executive from "./Executive/Executive";
import OWVLead from "./OurWorldVRLead/OWVLead";
import OWVProg from "./OurWorldVRProg/OWVProg";
import OWVCAS from "./OurWorldVRCAS/OWVCAS";
import OWV3DM from "./OurWorldVR3DM/OWV3DM";
import Projects from "./Projects/Projects";
import OWV from "./OurWorldVR/OWV";
import Contact from "./Contact/Contact";
import Login from "./Login/Login";
import UserContextProvider from "./Contexts/Context";
import Register from "./Register/Register";
import Careers from "./Careers/Careers";

export default function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} /> */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/team-executive" element={<Executive />} />
            <Route exact path="/team-lead-ourworldvr" element={<OWVLead />} />
            <Route exact path="/team-ourworldvr-prog" element={<OWVProg />} />
            <Route exact path="/team-ourworldvr-cas" element={<OWVCAS />} />
            <Route exact path="/team-ourworldvr-3dm" element={<OWV3DM />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            {/* <Route exact path="/owv" element={<OWV />} /> */}
            <Route exact path="/careers" element={<Careers />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}
