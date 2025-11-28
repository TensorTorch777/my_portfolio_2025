import React from 'react';
import Nancy from './Nancy';
import { useNavigate } from 'react-router-dom';

const MobileNancyChat = () => {
  const navigate = useNavigate();
  return (
    <div className="mobile-nancy-wrapper" style={{ position: 'fixed', width: '100vw', height: '100dvh', top: 0, left: 0, background: '#09001A', zIndex: 100000 }}>
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src={"/nancy_idle.mp4"}
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100dvh',
          objectFit: 'cover',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />
      {/* Chat overlay UI */}
      <div style={{ position: "relative", zIndex: 2, width: '100vw', height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <button
          style={{ position: 'absolute', top: 12, left: 12, zIndex: 3, background: '#181028', color: '#fff', border: 'none', borderRadius: '16px', padding: '8px 16px', fontWeight: 600, boxShadow: '0 1px 8px 0 #0005', cursor: 'pointer' }}
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
        <Nancy isOpen={true} portal={false} onClose={() => navigate('/')} />
      </div>
    </div>
  );
};

export default MobileNancyChat;
