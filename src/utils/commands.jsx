import React from 'react';
import { about } from '../data/about.js';
import { projects } from '../data/projects.js';
import { skills } from '../data/skills.js';
import AboutSection from '../components/Sections/AboutSection.jsx';
import ProjectsSection from '../components/Sections/ProjectsSection.jsx';
import SkillsSection from '../components/Sections/SkillsSection.jsx';
import ContactSection from '../components/Sections/ContactSection.jsx';
import HelpSection from '../components/Sections/HelpSection.jsx';

/**
 * @typedef {import('../types/types.js').Command} Command
 * @typedef {import('../types/types.js').CommandOutput} CommandOutput
 */

/**
 * @type {Command[]}
 */
export const commandList = [
  {
    name: 'help',
    description: 'Display available commands',
    usage: 'help',
    execute: () => ({
      type: 'component',
      content: React.createElement(HelpSection, { commands: commandList }),
    }),
  },
  {
    name: 'about',
    description: 'Display information about me',
    usage: 'about',
    execute: () => ({
      type: 'component',
      content: React.createElement(AboutSection, { about }),
    }),
  },
  {
    name: 'projects',
    description: 'Display my projects',
    usage: 'projects [project-id]',
    execute: (args) => {
      if (args.length > 0) {
        const projectId = args[0];
        const project = projects.find((p) => p.id === projectId);
        
        if (!project) {
          return {
            type: 'error',
            content: `Project "${projectId}" not found. Type 'projects' to see all projects.`,
          };
        }
        
        return {
          type: 'component',
          content: React.createElement(ProjectsSection, { 
            projects: [project], 
            showSingle: true 
          }),
        };
      }
      
      return {
        type: 'component',
        content: React.createElement(ProjectsSection, { 
          projects, 
          showSingle: false 
        }),
      };
    },
  },
  {
    name: 'skills',
    description: 'Display my skills and technologies',
    usage: 'skills [category]',
    execute: (args) => {
      if (args.length > 0) {
        const category = args[0].toLowerCase();
        const skillCategory = skills.find(
          (s) => s.category.toLowerCase() === category
        );
        
        if (!skillCategory) {
          return {
            type: 'error',
            content: `Category "${args[0]}" not found. Type 'skills' to see all categories.`,
          };
        }
        
        return {
          type: 'component',
          content: React.createElement(SkillsSection, { skills: [skillCategory] }),
        };
      }
      
      return {
        type: 'component',
        content: React.createElement(SkillsSection, { skills }),
      };
    },
  },
  {
    name: 'contact',
    description: 'Display my contact information',
    usage: 'contact',
    execute: () => ({
      type: 'component',
      content: React.createElement(ContactSection, { about }),
    }),
  },
  {
    name: 'clear',
    description: 'Clear the terminal',
    usage: 'clear',
    execute: () => ({
      type: 'text',
      content: 'CLEAR_TERMINAL',
    }),
  },
  {
    name: 'echo',
    description: 'Echo a message',
    usage: 'echo [message]',
    execute: (args) => ({
      type: 'text',
      content: args.join(' ') || '',
    }),
  },
  {
    name: 'date',
    description: 'Display current date and time',
    usage: 'date',
    execute: () => ({
      type: 'text',
      content: new Date().toString(),
    }),
  },
  {
    name: 'whoami',
    description: 'Display user information',
    usage: 'whoami',
    execute: () => ({
      type: 'text',
      content: `${about.name} (${about.title})`,
    }),
  },
];

/**
 * @param {string} input
 * @returns {CommandOutput}
 */
export const processCommand = (input) => {
  const trimmedInput = input.trim();
  if (!trimmedInput) {
    return { type: 'text', content: '' };
  }

  const args = trimmedInput.split(' ');
  const commandName = args.shift()?.toLowerCase() || '';
  const command = commandList.find((cmd) => cmd.name === commandName);

  if (!command) {
    return {
      type: 'error',
      content: `Command not found: ${commandName}. Type 'help' for available commands.`,
    };
  }

  return command.execute(args);
};
