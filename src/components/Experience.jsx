import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <div className="experience-container">
                <div className="experience-card-wrapper">
                    <div className="timeline-dot"></div>
                    <motion.div
                        className="experience-card glass-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="experience-header">
                            <h3>K.J. Somaiya College of Engineering</h3>
                            <span className="experience-date">Jan 2025 - Apr 2025</span>
                        </div>
                        <h4 className="experience-role">Deep Learning Intern (Mumbai, India)</h4>
                        <ul className="experience-list">
                            <li>Preprocessed and cleaned dermatological disease image datasets; performed lesion segmentation.</li>
                            <li>Applied Transfer Learning using ResNet, DenseNet, and EfficientNet for skin disease classification.</li>
                            <li>Developed and fine-tuned Vision Transformer (ViT) models and custom ViT-CNN hybrid architectures.</li>
                            <li>Engineered heavy augmentation pipelines to balance underrepresented classes (5,000 images per class).</li>
                            <li>Implemented regularization strategies (Dropout, L2, Early Stopping) to reduce overfitting.</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="experience-card-wrapper">
                    <div className="timeline-dot"></div>
                    <motion.div
                        className="experience-card glass-panel"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="experience-header">
                            <h3>Aminuteman Technologies</h3>
                            <span className="experience-date">May 2025 - Present</span>
                        </div>
                        <h4 className="experience-role">Data Science Intern (Remote)</h4>
                        <ul className="experience-list">
                            <li>Developed advanced object detection models for satellite imagery using triplet loss and hard negative mining.</li>
                            <li>Implemented Spectral-Aware NMS to handle overlapping detections in multi-spectral satellite data.</li>
                            <li>Built multi-scale feature indexing system using FAISS for efficient similarity search.</li>
                            <li>Utilized and fine-tuned DIVOV2 model for dense object detection in aerial and satellite imagery.</li>
                            <li>Contributed to development of specialized small language models (SLM) for defense documentation.</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
