import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        const currentChar = text[index];
        setDisplayedText((prevDisplayedText) => prevDisplayedText + currentChar);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;