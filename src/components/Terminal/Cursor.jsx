import React from 'react';

/**
 * @typedef {Object} CursorProps
 * @property {boolean} [blinking]
 */

/**
 * @param {CursorProps} props
 */
const Cursor = ({ blinking = true }) => {
  return (
    <span 
      className={`inline-block w-2 h-5 bg-terminal-white ml-0 ${
        blinking ? 'animate-cursor-blink' : ''
      }`}
      aria-hidden="true"
    />
  );
};

export default Cursor;
