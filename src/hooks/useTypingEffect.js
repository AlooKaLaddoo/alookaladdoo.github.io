import { useState, useEffect, useRef } from 'react';

/**
 * @typedef {Object} TypewriterOptions
 * @property {string} text
 * @property {number} [speed]
 * @property {number} [delay]
 * @property {function} [onComplete]
 */

/**
 * @param {TypewriterOptions} options
 */
export function useTypingEffect({
  text,
  speed = 100,
  delay = 0,
  onComplete,
}) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setDisplayText('');
    setIsDone(false);
    setIsTyping(false);
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    const timer = window.setTimeout(() => {
      setIsTyping(true);
    }, delay);
    
    return () => {
      if (timer) clearTimeout(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayText.length >= text.length) {
      setIsDone(true);
      setIsTyping(false);
      if (onComplete) onComplete();
      return;
    }

    timeoutRef.current = window.setTimeout(() => {
      setDisplayText(text.substring(0, displayText.length + 1));
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isTyping, onComplete, speed, text]);

  return { displayText, isTyping, isDone };
}
