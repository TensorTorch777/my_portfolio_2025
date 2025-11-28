import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scene3D from './components/Scene3D';
import Encryption from './components/Encryption';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ParticleBackground from './components/ParticleBackground';
import Nancy from './components/Nancy';
import MobileNancyChat from './components/MobileNancyChat';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <Routes>
      {isMobile && (
        <Route path="/nancy" element={<MobileNancyChat />} />
      )}
      <Route
        path="/"
        element={
          <div className="app">
            {/* <ParticleBackground /> */}
            <Scene3D />
            <Header />
            <main>
              <Hero />
              <Skills />
              <Encryption onOpenChat={() => setIsChatOpen(true)} />
              <Experience />
              <Projects />
              <About />
              <Contact />
            </main>
            <Footer />
            {!isMobile && <Nancy isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
          </div>
        }
      />
    </Routes>
  );
}

export default App;
