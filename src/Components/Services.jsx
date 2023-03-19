import React from 'react'; 
import './Services.css';
import Card from './Card';
import HeartEmoji from '../img/heartemoji.png';
import Glasses from '../img/glasses.png';
import Humble from '../img/humble.png';
import Resume from './Resume.jpg';
import {themeContext} from '../Context';
import {useContext} from "react";

const Services = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
        <span style={{color:darkMode? 'white' : ''}}>My Awesome</span>
        <span>Services</span>
        <span>
            Rerum, aperiam laboriosam culpa delectus porro repellat architecto.
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        </span>
        <a href={Resume} download>
        <button className="button s-button">Resume</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
<div style={{left:'14rem'}}>
    <Card
    emoji = {HeartEmoji}
    heading = {"Design"}
    detail = {"Figma, Adobe Suite"}
    />
</div>
<div style={{left:'-4rem', top: '12rem'}}>
    <Card
    emoji = {Glasses}
    heading = {"Developer"}
    detail = {"HTML, CSS, Javascript,React"}
    />
</div>
<div style={{left:'12rem', top: '19rem'}}>
    <Card
    emoji = {Humble}
    heading = {"UI/UX"}
    detail = {"Behance, Canva"}
    />
</div>
<div className='blur s-blur2' style={{background: "var(--purple)" }}>

</div>
        </div>
    </div>
  )
}

export default Services;
 