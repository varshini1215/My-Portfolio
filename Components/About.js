import React from 'react'
import  '../Styles/About.css';
import pic from '../Assets/Varshinipic.jpg'
export default function About() {
  return (
    <div className="about-container">
    <div className="about-content">
      <div className="about-text">
        <h1 className='about-heading'>About Me...</h1> 
        <p>
        I'm a biomedical engineer who's passionate about web development. I specialize in creating user-friendly interfaces using React.js and have experience with full-stack development using the MERN stack. I love collaborating on projects that challenge me to grow and learn. I'm dedicated to continuous improvement and enjoy exploring new technologies.
In addition to my technical skills, I have a strong foundation in problem-solving and analytical thinking, which I developed through my biomedical engineering background. This unique perspective allows me to approach web development with a meticulous and user-centered mindset. I am proficient in designing and implementing responsive web applications that are both aesthetically pleasing and functionally robust.
        </p>
      </div>
      <div className="about-image">
        <img src={pic} alt="Varshini's Picture" />
      </div>
    </div>
  </div>
  )
}
