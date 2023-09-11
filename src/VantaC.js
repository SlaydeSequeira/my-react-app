import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min'
const BirdsComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        birdSize: 1.00,
        wingSpan: 20.00,
        speedLimit: 4.00,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        wingSpan: 28.00,
        color1: 0xFFFFFF, 
        color2: 0x003366,
        colorMode:'lerp',
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} style={{ width: '100%', height: '100vh'}}>
    </div>
    
  );
};

export default BirdsComponent;

