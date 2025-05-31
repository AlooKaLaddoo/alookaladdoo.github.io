import React, { useState, useEffect } from 'react';
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
  const [userIP, setUserIP] = useState('...');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserIP = async () => {
      try {
        setIsLoading(true);
        // Primary API
        const response = await fetch('https://api.ipify.org?format=json');
        
        if (!response.ok) {
          throw new Error('Primary API failed');
        }
        
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        console.error('Primary IP fetch failed:', error);
        
        // Fallback API
        try {
          const fallbackResponse = await fetch('https://httpbin.org/ip');
          const fallbackData = await fallbackResponse.json();
          setUserIP(fallbackData.origin.split(',')[0]); // In case of multiple IPs
        } catch (fallbackError) {
          console.error('Fallback IP fetch failed:', fallbackError);
          // Final fallback
          setUserIP('localhost');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserIP();
  }, []);
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
        AlooKaLaddoo@{isLoading ? '...' : userIP}
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
