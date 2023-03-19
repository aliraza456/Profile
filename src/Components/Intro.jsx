import React from "react";
import "./Intro.css";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Instagram from "../img/instagram.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import facee from "../img/facee.png";
import thumbup from "../img/thumbup.png";
import crown from "../img/crown.png";
import glassesimoji from "../img/glassesimoji.png";
import FloatingDiv from "./FloatingDiv";
import { themeContext } from "../Context";
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy, I am</span>
          <span>Ali Raza</span>
          <span>
            Frontend Developer with high level of Experience in Web Designing
            and Graphic Designing, producing the Quality work.
          </span>
        </div>
        <a href="https://ali9211.carrd.co/">
          <button className="button i-button">Business Card</button>
        </a>
        <div className="i-icon">
          <a href="https://github.com/">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right side */}

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={facee} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }} className="floatingdiv">
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }} className="floatingdiv">
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-8rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
