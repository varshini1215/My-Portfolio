import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiMongodb } from 'react-icons/si';
import '../Styles/Technologies.css';

const Technologies = () => {
  return (
    <div className="technologies-container">
      <h1 style={{color:"purple"}}>Technologies</h1>
      <div className="technologies-list">
        <div className="technology-box">
          <FaHtml5 className="technology-icon html-icon" />
          <p>HTML5</p>
        </div>
        <div className="technology-box">
          <FaCss3Alt className="technology-icon css-icon" />
          <p>CSS3</p>
        </div>
        <div className="technology-box">
          <IoLogoJavascript className="technology-icon js-icon" />
          <p>JavaScript</p>
        </div>
        <div className="technology-box">
          <FaReact className="technology-icon react-icon" />
          <p>React</p>
        </div>
        <div className="technology-box">
          <FaNodeJs className="technology-icon node-icon" />
          <p>Node.js</p>
        </div>
        <div className="technology-box">
          <SiExpress className="technology-icon express-icon" />
          <p>Express</p>
        </div>
        <div className="technology-box">
          <SiMongodb className="technology-icon mongodb-icon" />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
