import React from 'react';
import { motion } from 'framer-motion';

/**
 * @typedef {Object} PictureSectionProps
 * @property {Object} about
 * @property {string} about.name
 * @property {string} about.asciiArt
 */

/**
 * @param {PictureSectionProps} props
 */
const PictureSection = ({ about }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="my-2"
    >
      {/* <div className="mb-4">
        <h2 className="text-lg font-bold text-terminal-yellow mb-2">Avatar of {about.name}</h2>
      </div> */}
      
      <div className="flex justify-center mb-4">
        <pre className="text-terminal-cyan text-xs leading-none">{about.asciiArt}</pre>
      </div>
      
      <div className="mt-6 text-terminal-brightBlack text-sm text-center">
        <p>ASCII art generated using CharTist</p>
        <p className="mt-1">💡 Tip: Type 'projects' to learn more about CharTist</p>
      </div>
    </motion.div>
  );
};

export default PictureSection;
