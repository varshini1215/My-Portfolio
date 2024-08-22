import React,{useState,useEffect} from 'react';
import EducationCard from './EducationCard';
import '../Styles/Education.css';

const Education = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const education =[
        {
            degree:'Biomedical Engineering(B.E)',
            GPA:'8.7 CGPA',
            institution:'Dr.N.G.P.Institute Of Technology',
            year:'2019-2023'
        },
        {
            degree:'HSC',
            GPA:'82%',
            institution:'A.V.P.Trust Matriculation Higher Secondary School',
            year:'2018-2019'
        },
        {
            degree:'SSLC',
            GPA:'96%',
            institution:'Vidya Mandir Matriculation Higher Secondary School',
            year:'2016-2017'
        }
    ];
    return (
        <div className="education-container" >
            <h1 className="education-heading">Educational Qualifcation</h1>
        <div className="education-list">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </div>
        </div>
      );
    }
    
    export default Education;

