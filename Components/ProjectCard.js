import React from 'react';
import { FaGithub, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiMongodb } from 'react-icons/si';

const ProjectCard = ({ project }) => {
    const getIcon = (tech) => {
        switch (tech) {
            case 'React.js':
                return <FaReact style={{ color: '#61dafb' }} />;
            case 'HTML':
                return <FaHtml5 style={{ color: '#e34c26' }} />;
            case 'CSS':
                return <FaCss3Alt style={{ color: '#264de4' }} />;
            case 'Node.js':
                return <FaNodeJs style={{ color: '#3c873a' }} />;
            case 'JavaScript':
                return <IoLogoJavascript style={{ color: '#f0db4f' }} />;
            case 'Express.js':
                return <SiExpress style={{ color: '#000000' }} />;
            case 'MongoDB':
                return <SiMongodb style={{ color: '#4db33d' }} />;
            default:
                return null;
        }
    };

    return (
        <div className="project-container">
            <h2 className="project-title">{project.title}</h2>
            <div className="project-content">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-details">
                    <p className="description">{project.description}</p>
                    <h3>Technologies Used</h3>
                    <ul className="technologies-list">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>
                                <button className="technology-button">
                                    {getIcon(tech)}
                                    {tech}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="button-row">
                        <button className="github-button">
                            <FaGithub /> {/* GitHub icon */}
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </button>
                        {project.demoLink && (
                            <button className="demo-button">
                                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
