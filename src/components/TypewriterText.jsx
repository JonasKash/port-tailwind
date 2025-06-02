import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex > text.length) {
          clearInterval(interval);
          setIsTypingComplete(true);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
      <span className="neon-gradient-text">{displayedText}</span>
      {isTypingComplete && (
        <motion.span
          className="text-[#00F0FF] inline-block"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{ marginLeft: '1px' }}
        >
          /
        </motion.span>
      )}
    </h1>
  );
};

export default TypewriterText; 