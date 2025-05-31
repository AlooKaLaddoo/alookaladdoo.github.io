import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

/**
 * @typedef {Object} ContactSectionProps
 * @property {Object} about
 * @property {string} about.name
 * @property {string} about.email
 * @property {string} about.location
 * @property {string} about.github
 * @property {string} about.linkedin
 * @property {string} about.twitter
 */

/**
 * @param {ContactSectionProps} props
 */
const ContactSection = ({ about }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="my-2"
    >
      <div className="mb-4">
        <h2 className="text-lg font-bold text-terminal-yellow mb-2">Contact Information</h2>
        <p className="text-terminal-brightBlack text-sm mb-3">
          Feel free to reach out to me through any of these channels:
        </p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Mail size={16} className="text-terminal-cyan" />
          <a 
            href={`mailto:${about.email}`}
            className="text-terminal-white hover:text-terminal-brightWhite"
          >
            {about.email}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <MapPin size={16} className="text-terminal-cyan" />
          <span className="text-terminal-white">{about.location}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Github size={16} className="text-terminal-cyan" />
          <a 
            href={about.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-white hover:text-terminal-brightWhite"
          >
            {about.github}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Linkedin size={16} className="text-terminal-cyan" />
          <a 
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-white hover:text-terminal-brightWhite"
          >
            {about.linkedin}
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Twitter size={16} className="text-terminal-cyan" />
          <a 
            href={about.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-white hover:text-terminal-brightWhite"
          >
            {about.twitter}
          </a>
        </div>
      </div>
      
      <div className="mt-6 p-4 border border-terminal-brightBlack/30 rounded bg-terminal-brightBlack/10">
        <p className="text-terminal-brightWhite text-sm">
          <span className="text-terminal-green">Note:</span> I'm always interested in new opportunities 
          and collaborations. Don't hesitate to reach out if you'd like to work together!
        </p>
      </div>
    </motion.div>
  );
};

export default ContactSection;
