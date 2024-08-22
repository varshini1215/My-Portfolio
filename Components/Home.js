import React from 'react';
import '../Styles/Home.css';

export default function Home() {
  
  // const handleDownloadCV = () => {
  //   window.open('file:///C:/Users/VARSHINI%20S/Downloads/VARSHINI%20RESUME%20(1).pdf', '_blank','noopener noreferrer');
  // };

  const handleHireMe = () => {
    window.open('https://wa.me/8489833478', '_blank', 'noopener noreferrer');
  };
 
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text-container">
          <h2 className="home-text">Hi It's me....</h2>
          <h1 className="home-text">Varshini</h1>
          <h2 className="home-texts">I'm a MERN Stack Developer</h2>
          {/* <button className="home-button" onClick={handleDownloadCV}>Download CV</button> */}
          <a href=" file:///C:/Users/VARSHINI%20S/Downloads/VARSHINI%20RESUME%20(1).pdf" download="VARSHINI RESUME(1).pdf">
        <button className="home-button">Download Resume</button>
    </a>
          <button className="home-button" onClick={handleHireMe}>Hire me</button>
        </div>
      </div>
    </div>
  );
}
