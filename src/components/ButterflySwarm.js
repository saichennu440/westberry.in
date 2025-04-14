import React, { useEffect, useState } from 'react';
import './ButterflySwarm.css';

// Use GIFs instead of PNGs
const butterflyGIFs = [
  require('../assets/butterfly1.gif'),
 // require('../assets/butterfly2.gif'),
 // require('../assets/butterfly3.gif')
];

function ButterflySwarm() {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    const newButterflies = [];

    for (let i = 0; i < 10; i++) {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const image = butterflyGIFs[Math.floor(Math.random() * butterflyGIFs.length)];
      const id = `butterfly-${Date.now()}-${i}`;
      newButterflies.push({ id, direction, image });
    }

    setButterflies(newButterflies);

    const timer = setTimeout(() => {
      setButterflies([]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {butterflies.map((b) => (
        <img
          key={b.id}
          src={b.image}
          className={`swarm-butterfly fly-${b.direction}`}
          alt="Flying Butterfly"
        />
      ))}
    </div>
  );
}

export default ButterflySwarm;
