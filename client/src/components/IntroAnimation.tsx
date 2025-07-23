// src/components/IntroAnimation.tsx

import React, { useEffect, useState } from "react";
import "../styles/IntroAnimation.css";

const IntroAnimation: React.FC = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 5000); // hide after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="logo-wrapper">
      <div className="diamond">
        <span>S</span>
      </div>
    </div>
  );
};

export default IntroAnimation;
