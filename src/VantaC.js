import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min'
const BirdsComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        birdSize: 1.00, // Adjust the bird size as needed
        wingSpan: 20.00, // Adjust the wing span as needed
        speedLimit: 4.00, // Adjust the speed limit as needed
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        wingSpan: 28.00,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} style={{ width: '100%', height: '100vh' }}>
      {/* Your content goes here */}
    </div>
  );
};

export default BirdsComponent;

