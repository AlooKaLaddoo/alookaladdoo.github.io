import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

/**
 * @typedef {Object} AboutProps
 * @property {Object} about
 * @property {string} about.name
 * @property {string} about.title
 * @property {string} about.location
 * @property {string} about.email
 * @property {string} about.github
 * @property {string} about.linkedin
 * @property {string} about.instagram
 * @property {string} about.bio
 */

/**
 * @param {AboutProps} props
 */
const AboutSection = ({ about }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="my-2"
    >
      <div className="mb-3">
        <h2 className="text-xl font-bold text-terminal-yellow">{about.name}</h2>
        <p className="text-terminal-green">{about.title}</p>
        <p className="text-terminal-brightBlack">{about.location}</p>
      </div>
      
      <div className="mb-4 text-sm">
        {about.bio.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-2">{paragraph}</p>
        ))}
      </div>
      
      <div className="flex space-x-4 mt-4">
        <a 
          href={about.github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-terminal-white hover:text-terminal-brightWhite"
          aria-label="GitHub Profile"
        >
          <Github size={16} />
        </a>
        <a 
          href={about.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-terminal-white hover:text-terminal-brightWhite"
          aria-label="LinkedIn Profile"
        >
          <Linkedin size={16} />
        </a>
        <a 
          href={about.instagram} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-terminal-white hover:text-terminal-brightWhite"
          aria-label="Instagram Profile"
        >
          <Instagram size={16} />
        </a>
        <a 
          href={`mailto:${about.email}`} 
          className="text-terminal-white hover:text-terminal-brightWhite"
          aria-label="Email"
        >
          <Mail size={16} />
        </a>
      </div>
      
      <div className="mt-6 text-terminal-brightBlack text-sm">
        <p>Type 'help' to see available commands</p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
