// TruncatedText.js
import React, { useRef, useEffect } from 'react';

function TruncatedText({ description, maxLines }) {
  const textRef = useRef(null);

  useEffect(() => {
    const truncateToLines = (element, maxLines) => {
      if (!element) return; // Ensure the element exists

      const lineHeight = parseInt(window.getComputedStyle(element).lineHeight, 10);
      const maxHeight = lineHeight * maxLines;

      element.style.maxHeight = 'none';
      
      let text = element.innerText;
      const words = text.split(' ');
      
      while (element.scrollHeight > maxHeight && words.length > 0) {
        words.pop(); // Remove the last word
        element.innerText = words.join(' ') + '...'; // Re-apply the text with an ellipsis
      }
      
      element.style.maxHeight = `${maxHeight}px`;
    };

    if (textRef.current) {
      truncateToLines(textRef.current, maxLines);
    }
  }, [description, maxLines]);

  return <div ref={textRef} style={{ width: '100%', lineHeight: '1.4em' }}>{description}</div>;
}

export default TruncatedText;