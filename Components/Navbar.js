import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "../Styles/navbar.css";
const Navbar=()=>{
    return(
        <nav className="navbar">
            <div className="left-section">
                <h4>My Portfolio</h4>
            </div>
            <div className="right-section">
                <a href="http://linkedin.com/in/varshini-siva-222523224" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/varshini1215" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://wa.me/8489833478" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </div>
          
        </nav>
    );
}
export default Navbar;