import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                </motion.div>

                <div className="about-grid">
                    {/* Text Content */}
                    <motion.div
                        className="about-text glass-panel"
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="about-description">
                            Results-driven <span className="highlight">Deep Learning & AI Enthusiast</span> with expertise in defense applications, computer vision, and reinforcement learning.
                        </p>
                        <p className="about-description">
                            Skilled in designing, training, and optimizing advanced AI models for military systems including <span className="highlight">predictive maintenance</span>, <span className="highlight">cybersecurity</span>, <span className="highlight">satellite imagery analysis</span>, missile guidance, and strategic planning.
                        </p>
                        <p className="about-description">
                            Proficient in leveraging cutting-edge AI frameworks to drive innovation in defense technology.
                        </p>

                        <div className="education-section">
                            <h3 className="subsection-title"><GraduationCap size={24} /> Education</h3>

                            <div className="education-item">
                                <div className="edu-header">
                                    <h4>K.J. Somaiya College of Engineering</h4>
                                    <span className="edu-year">Oct 2022 - Present</span>
                                </div>
                                <p className="edu-degree">B.Tech in Electronics and Computer Engineering</p>
                                <div className="edu-meta">
                                    <span><MapPin size={14} /> Mumbai, India</span>
                                </div>
                            </div>

                            <div className="education-item">
                                <div className="edu-header">
                                    <h4>Indian Institute of Technology, Ropar</h4>
                                    <span className="edu-year">Nov 2024 - Present</span>
                                </div>
                                <p className="edu-degree">Minor in Artificial Intelligence</p>
                                <div className="edu-meta">
                                    <span><MapPin size={14} /> Online</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="image-wrapper">
                            <img
                                src="/IMG_9409.JPG"
                                alt="Nimish Vadgaonkar"
                                className="profile-image"
                            />
                            <div className="image-overlay"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
