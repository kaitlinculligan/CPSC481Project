import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';

const TypingAnimation = ({ text, typingSpeed = 50 ,fontSize,fontFamily,colorOfText}) => {

  const fontSizeValue = fontSize + "px";
  const fontFamilyValue = fontFamily
  const [displayedText, setDisplayedText] = useState('');
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const textTimer = setInterval(() => {
      setDisplayedText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(textTimer);
      }
    }, typingSpeed);

    const cursorTimer = setInterval(() => {
      setIsCursorVisible((visible) => !visible);
    }, 530);

    return () => {
      clearInterval(textTimer);
      clearInterval(cursorTimer);
    };
  }, [text, typingSpeed]);

  return (
    <div style={{ fontSize: fontSizeValue, fontFamily: fontFamilyValue, color: colorOfText }}>
      {displayedText}
      <span className={`cursor`}>|</span>
    </div>
  );
};

export default TypingAnimation;