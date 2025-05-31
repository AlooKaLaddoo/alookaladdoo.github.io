import React, { useState, useRef, useEffect } from 'react';
import Cursor from './Cursor';

/**
 * @typedef {Object} CommandLineProps
 * @property {string} [prompt]
 * @property {function(string): void} onSubmit
 * @property {function(): string} onArrowUp
 * @property {function(): string} onArrowDown
 */

/**
 * @param {CommandLineProps} props
 */
const CommandLine = ({
  prompt = '$',
  onSubmit,
  onArrowUp,
  onArrowDown,
}) => {
  const [command, setCommand] = useState('');
  const inputRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (command.trim()) {
      onSubmit(command);
      setCommand('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevCommand = onArrowUp();
      if (prevCommand) setCommand(prevCommand);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextCommand = onArrowDown();
      setCommand(nextCommand);
    }
  };

  // Auto focus the input field
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="command-prompt">
      <span className="text-terminal-green">alookaladdoo@iiit {prompt}</span>
      <input
        ref={inputRef}
        type="text"
        className="command-input"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        spellCheck="false"
        autoComplete="off"
        aria-label="Command input"
      />
      {!command && <Cursor />}
    </form>
  );
};

export default CommandLine;
