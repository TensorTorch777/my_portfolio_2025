import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

import { RESUME_DATA } from '../constants/resumeData';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo-container">
                    <img src="/logo.png" alt="Logo" className="logo-img" />
                    <span className="logo-text">Nimish Vadgaonkar</span>
                </div>

                <div className="nav-pill glass-panel">
                    <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>About me</a>
                        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
                        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    </nav>
                </div>

                <div className="social-links">
                    <a href={RESUME_DATA.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                    <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
};

export default Header;
