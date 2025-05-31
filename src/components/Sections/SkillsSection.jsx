import React from 'react';
import { motion } from 'framer-motion';

/**
 * @typedef {import('../../types/types.js').Skill} Skill
 */

/**
 * @typedef {Object} SkillsSectionProps
 * @property {Skill[]} skills
 */

/**
 * @param {SkillsSectionProps} props
 */
const SkillsSection = ({ skills }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="my-2"
    >
      <div className="mb-4">
        <h2 className="text-lg font-bold text-terminal-yellow mb-2">Skills & Technologies</h2>
        <p className="text-terminal-brightBlack text-sm mb-3">
          Here are the technologies and tools I work with:
        </p>
      </div>
      
      <div className="space-y-4">
        {skills.map((skillCategory, index) => (
          <motion.div 
            key={skillCategory.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-terminal-brightBlack/30 rounded p-4 bg-terminal-brightBlack/10"
          >
            <h3 className="text-terminal-green font-semibold mb-3">{skillCategory.category}</h3>
            
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill) => (
                <span 
                  key={skill}
                  className="text-sm bg-terminal-brightBlack/30 text-terminal-brightWhite px-3 py-1 rounded border border-terminal-brightBlack/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-6 text-terminal-brightBlack text-sm">
        <p>💡 Tip: Type 'skills [category]' to view specific skill categories</p>
      </div>
    </motion.div>
  );
};

export default SkillsSection;
