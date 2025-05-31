import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

/**
 * @typedef {import('../../types/types.js').Project} Project
 */

/**
 * @typedef {Object} ProjectsSectionProps
 * @property {Project[]} projects
 * @property {boolean} [showSingle]
 */

/**
 * @param {ProjectsSectionProps} props
 */
const ProjectsSection = ({ projects, showSingle = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="my-2"
    >
      <div className="mb-4">
        <h2 className="text-lg font-bold text-terminal-yellow mb-2">
          {showSingle ? 'Project Details' : 'My Projects'}
        </h2>
        {!showSingle && (
          <p className="text-terminal-brightBlack text-sm mb-3">
            Here are some of my recent projects. Use 'projects [project-id]' for details.
          </p>
        )}
      </div>
      
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border border-terminal-brightBlack/30 rounded p-4 bg-terminal-brightBlack/10"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-terminal-green font-semibold">{project.title}</h3>
              <span className="text-terminal-cyan text-xs font-mono">[{project.id}]</span>
            </div>
            
            <p className="text-terminal-white text-sm mb-3">{project.description}</p>
            
            <div className="mb-3">
              <div className="text-terminal-brightBlack text-xs mb-1">Technologies:</div>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs bg-terminal-brightBlack/30 text-terminal-brightWhite px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terminal-white hover:text-terminal-brightWhite flex items-center gap-1 text-sm"
                  aria-label="GitHub Repository"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terminal-white hover:text-terminal-brightWhite flex items-center gap-1 text-sm"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      {!showSingle && (
        <div className="mt-6 text-terminal-brightBlack text-sm">
          <p>💡 Tip: Type 'projects [project-id]' to view specific project details</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectsSection;
