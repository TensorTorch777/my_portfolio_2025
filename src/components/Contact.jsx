import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container contact-container">
                <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
                <p className="contact-subtitle">
                    Interested in collaborating or just want to say hi? Drop me a message.
                </p>

                <a href="mailto:nimishvadgaonkar@zohomail.in" className="contact-button btn-primary">
                    <Mail size={20} />
                    <span>Say Hello</span>
                </a>
            </div>
        </section>
    );
};

export default Contact;
