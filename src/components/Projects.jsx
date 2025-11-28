import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { RESUME_DATA } from '../constants/resumeData';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>

                <div className="projects-grid">
                    {RESUME_DATA.projects.map((project, index) => (
                        <div key={index} className="project-card glass-panel">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tools.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                                            <Github size={20} />
                                        </a>
                                    )}

                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
