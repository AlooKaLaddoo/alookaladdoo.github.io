import React from 'react';
import { motion } from 'framer-motion';

/**
 * @typedef {import('../../types/types.js').Command} Command
 */

/**
 * @typedef {Object} HelpSectionProps
 * @property {Command[]} commands
 */

/**
 * @param {HelpSectionProps} props
 */
const HelpSection = ({ commands }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="my-2"
    >
      <div className="mb-4">
        <h2 className="text-lg font-bold text-terminal-yellow mb-2">Available Commands</h2>
        <p className="text-terminal-brightBlack text-sm mb-3">
          Type any of the following commands to explore my portfolio:
        </p>
      </div>
      
      <div className="space-y-2">
        {commands.map((command) => (
          <div key={command.name} className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
            <div className="text-terminal-cyan font-mono">{command.usage}</div>
            <div className="md:col-span-2 text-terminal-white">{command.description}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-terminal-brightBlack text-sm">
        <p>💡 Tip: Use arrow keys to navigate through command history</p>
      </div>
    </motion.div>
  );
};

export default HelpSection;
