import { useEffect, useState } from "react";
import "./IntroAnimation.css";

interface Props {
  onComplete: () => void;
}

const IntroAnimation: React.FC<Props> = ({ onComplete }) => {
  const [moveToCorner, setMoveToCorner] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setMoveToCorner(true);
    }, 2000); // duration of logo stay in center

    const timer2 = setTimeout(() => {
      onComplete();
    }, 3500); // duration until full animation completes

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className={`intro-container ${moveToCorner ? "corner" : ""}`}>
      <img src="/s-logo.png" alt="Logo" className="intro-logo" />
    </div>
  );
};

export default IntroAnimation;
