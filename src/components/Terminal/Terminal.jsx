import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TerminalHeader from './TerminalHeader.jsx';
import CommandLine from './CommandLine.jsx';
import CommandOutput from './CommandOutput.jsx';
import { processCommand } from '../../utils/commands.jsx';
import { terminalHistory } from '../../utils/terminalHistory.js';
import { useTypingEffect } from '../../hooks/useTypingEffect.js';

const Terminal = () => {
  const [history, setHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const terminalBodyRef = useRef(null);
  
  const asciiArt = `
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠀⠀⠀⢀⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⢀⣤⣶⣾⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⠟⠛⠛⠛⢻⣿⣿⣿⣿⠟⠉⢻⣿⣿⣿⣿⣿⣿⣆⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⣿⣿⡿⠛⢿⣿⣿⣷⠀⠀⠀⠈⠿⠿⠋⠀⠀⠀⠀⠙⢿⡿⠇⠈⠻⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⡟⠁⠀⠀⠙⠛⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⣠⢤⣜⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⣿⡿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠴⠒⠒⠒⠒⠿⢭⣙⠓⠶⣟⠳⡞⠀⠻⣿⣿⣯⣦⠖⠴⣤⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠠⡟⠀⠀⠀⢀⣠⡤⠴⠒⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢉⡷⠄⠈⣹⣅⠀⠀⣿⡟⣿⢧⣤⣀⠀⠙⣦⡀⠀
⠀⠀⠀⠀⠀⡀⣾⠇⠀⠰⠚⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⣀⡤⠖⣿⠈⣡⣾⡿⣜⢯⡻⣜⢿⣻⢶⣼⣶⡀
⠀⠀⣀⡴⠗⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠚⠋⠁⠀⠀⠘⠋⠁⠀⠙⢿⣞⡽⣹⢮⡳⣏⡾⣽⡇
⠀⡼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣻⣽⢣⡟⣵⡻⡼⡿⠀
⣼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣟⡮⢯⣽⢺⡵⣻⠗⠀
⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⣏⢾⣏⡞⣧⢟⣿⠃⠀
⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡝⣞⣳⢮⡽⣞⣽⡿⠀⠀
⢸⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡾⣗⢯⡽⣎⡷⣝⡮⣿⠃⠀⠀
⠀⠚⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⡶⣿⢻⡭⣗⢯⢾⣱⡻⣼⢣⣟⣿⠀⠀⠀
⠀⠀⠀⠙⠶⣤⣀⡀⠀⠀⠀⠀⠴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣤⣶⢾⡟⣯⢳⡽⣚⣧⢟⣮⣛⡮⢷⣹⢧⡟⣾⣇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠋⠛⠒⠲⠶⠶⣤⣤⣴⢶⡶⣶⢶⡶⡿⣟⢿⣫⢟⣮⢳⣝⡮⣽⢺⡝⣾⡹⣎⡟⡶⣭⣛⡧⣟⢮⡽⣽⡏⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣻⢼⣣⠿⣜⣧⢻⡵⣛⣮⢗⡯⣞⡽⣎⢷⡭⢷⣫⢷⡹⢧⣻⡝⣶⢫⢷⣹⡞⣵⢯⣿⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⢧⣻⢼⣿⣝⢮⡗⣯⣝⢮⣻⢼⣣⠿⣜⡯⣞⣻⢼⣣⢟⣯⢳⡽⣺⢭⢷⣣⢟⣮⢳⢿⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⢧⣛⢾⣿⡞⣧⢟⡾⣜⢯⡞⣧⢏⡿⣱⣻⡜⣧⡟⣼⣫⢞⣧⢻⡵⣛⣮⢗⡯⣞⣭⢟⣿⠀⠀

{ Type 'help' to see available commands. }`;

  const { displayText } = useTypingEffect({ 
    text: asciiArt,
    speed: 1,
  });

  const handleCommand = (command) => {
    const output = processCommand(command);
    
    if (output.content === 'CLEAR_TERMINAL') {
      setHistory([]);
      return;
    }
    
    const newHistoryItem = { command, output, timestamp: new Date() };
    terminalHistory.addHistoryItem(newHistoryItem);
    
    setHistory([...history, { command, output }]);
  };

  const handleArrowUp = () => {
    return terminalHistory.getPreviousCommand();
  };

  const handleArrowDown = () => {
    return terminalHistory.getNextCommand();
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Scroll to bottom when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  // Set initial theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <motion.div 
      className="terminal-window"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TerminalHeader 
        title={`${location.hostname}:~`} 
        onToggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      
      <div className="terminal-body" ref={terminalBodyRef}>
        <div className="mb-4 text-terminal-green whitespace-pre-line font-mono">
          {displayText}
        </div>
        
        {history.map((item, index) => (
          <CommandOutput 
            key={index} 
            command={item.command} 
            output={item.output} 
          />
        ))}
        
        <CommandLine 
          onSubmit={handleCommand}
          onArrowUp={handleArrowUp}
          onArrowDown={handleArrowDown}
        />
      </div>
    </motion.div>
  );
};

export default Terminal;
