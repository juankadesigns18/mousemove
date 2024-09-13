import React, { useState, useEffect } from 'react';
import './MouseEffect.css'; 

const MouseEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-effect"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: `translate(-50%, -50%)`, 
      }}
    />
  );
};

export default MouseEffect;
