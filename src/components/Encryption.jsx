import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromTop } from '../utils/motion';

const Encryption = ({ onOpenChat }) => {
    return (
        <div className="encryption-section" id="encryption">
            <div className="encryption-title-container">
                <motion.div
                    variants={slideInFromTop}
                    className="encryption-title"
                >
                    Dive into <span className="gradient-text">AI</span>
                </motion.div>
            </div>

            <div className="encryption-lock-container">
                <div className="lock-group">
                    <motion.div
                        className="lock-top"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src="/lock-top.png"
                            alt="Lock Top"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <img
                        src="/lock-main.png"
                        alt="Lock Main"
                        width={70}
                        height={70}
                        className="lock-main"
                    />
                </div>

                <div
                    className="encryption-badge glass-panel"
                    onClick={onOpenChat}
                    style={{ cursor: 'pointer' }}
                >
                    <span className="encryption-text">Talk with Nancy!</span>
                </div>

            </div>


            <div className="encryption-video-container">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                    className="encryption-video"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                    <source src="/videos/encryption-bg.webm" type="video/webm" />
                </video>
            </div>
        </div>
    );
};

export default Encryption;
