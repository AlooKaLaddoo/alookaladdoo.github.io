import React from 'react';

/**
 * @typedef {import('../../types/types.js').CommandOutput} CommandOutput
 */

/**
 * @typedef {Object} CommandOutputProps
 * @property {string} command
 * @property {CommandOutput} output
 */

/**
 * @param {CommandOutputProps} props
 */
const CommandOutput = ({ command, output }) => {
  return (
    <div className="mb-2">
      <div className="command-prompt">
        <span className="text-terminal-green">alookaladdoo@iiit $</span>
        <span className="ml-2 text-terminal-white">{command}</span>
      </div>
      
      <div className={`mt-1 ${output.type === 'error' ? 'text-terminal-red' : 'text-terminal-white'}`}>
        {typeof output.content === 'string' ? (
          output.content.split('\n').map((line, i) => (
            <div key={i}>{line}</div>
          ))
        ) : (
          output.content
        )}
      </div>
    </div>
  );
};

export default CommandOutput;
