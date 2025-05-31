import React from 'react';
import { Circle, Sun, Moon } from 'lucide-react';

/**
 * @typedef {Object} TerminalHeaderProps
 * @property {string} [title]
 * @property {function} onToggleTheme
 * @property {boolean} isDarkMode
 */

/**
 * @param {TerminalHeaderProps} props
 */
const TerminalHeader = ({
  title = 'terminal',
  onToggleTheme,
  isDarkMode,
}) => {
  return (
    <div className="terminal-header">
      <div className="flex items-center gap-1.5">
        <Circle 
          size={12} 
          fill="#ff605c" 
          stroke="#ff605c" 
          className="cursor-pointer hover:opacity-80"
        />
        <Circle 
          size={12} 
          fill="#ffbd44" 
          stroke="#ffbd44" 
          className="cursor-pointer hover:opacity-80"
        />
        <Circle 
          size={12} 
          fill="#00ca4e" 
          stroke="#00ca4e" 
          className="cursor-pointer hover:opacity-80"
        />
      </div>
      
      <div className="flex-1 text-center text-sm text-terminal-brightWhite/70">
        {title}@{window.location.hostname}
      </div>
      
      <button 
        onClick={onToggleTheme}
        className="text-terminal-brightWhite/70 hover:text-terminal-white transition-colors"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <Sun size={14} />
        ) : (
          <Moon size={14} />
        )}
      </button>
    </div>
  );
};

export default TerminalHeader;
