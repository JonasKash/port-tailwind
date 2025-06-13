import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, speed = 50, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  const renderText = () => {
    const parts = text.split(" ");
    const firstPart = parts[0] + " " + parts[1]; // "Agentes que"
    const restOfText = parts.slice(2).join(" "); // "transformam o invisível em tangível"

    return (
      <>
        <span className="text-white">{firstPart}</span>
        <span className="bg-gradient-to-r from-[#00f0ff] via-[#6B8AFF] to-[#9442fe] text-transparent bg-clip-text">
          {" " + restOfText}
        </span>
      </>
    );
  };

  return (
    <div className={`inline-block ${className}`}>
      {renderText()}
    </div>
  );
};

export default TypewriterText; 