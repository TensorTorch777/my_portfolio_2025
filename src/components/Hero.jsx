import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion';

const Hero = () => {
    return (
        <div className="hero-container-wrapper">
            <video
                autoPlay
                muted
                loop
                className="hero-video-bg"
            >
                <source src="/videos/blackhole.webm" type="video/webm" />
            </video>

            <motion.div
                initial="hidden"
                animate="visible"
                className="container hero-content-grid"
            >
                <div className="hero-content-left">


                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="hero-title-wrapper"
                    >
                        <h1 className="hero-title">
                            <span className="gradient-text">AI Engineer</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="hero-subtitle"
                    >
                        Specializing in defense applications, computer vision, and reinforcement learning.
                    </motion.p>

                    <motion.div
                        variants={slideInFromLeft(1)}
                        className="hero-cta"
                    >
                        <a href="#projects" className="btn-primary">Learn more</a>
                    </motion.div>
                </div>

                <motion.div
                    variants={slideInFromRight(0.8)}
                    className="hero-content-right"
                >
                    <img src="/hero-bg.svg" alt="work icons" className="hero-icons-img" />
                </motion.div>
            </motion.div>

            <a href="#encryption" className="scroll-indicator">
                <ArrowDown size={24} className="bounce" />
            </a>
        </div>
    );
};

export default Hero;
