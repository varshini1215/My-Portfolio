import React from 'react';
import '../Styles/Education card.css';
import { MdDoubleArrow } from "react-icons/md";
 const EducationCard =({education,scrollY})=>{
    const isScrolled = scrollY > 100;
    return(
<div className={`education-card ${isScrolled ? 'scrolled' : ''}`}>
             <div className="year-box">
        <p className="education-year">{education.year}</p>
      </div>
      <MdDoubleArrow className="arrow-icon" />
      <div className="details-box">
            <h2 className='education-degree'>{education.degree}</h2>
            <h4  className="education-gpa">{education.GPA}</h4>
            <h3 className="education-institution">{education.institution}</h3>
            </div> 
        </div>
    );
 }
 export default EducationCard;