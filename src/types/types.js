export const CommandType = {
  TEXT: 'text',
  COMPONENT: 'component',
  ERROR: 'error'
};

// Since we're using JavaScript, we'll use JSDoc comments for type documentation

/**
 * @typedef {Object} Command
 * @property {string} name
 * @property {string} description
 * @property {string} usage
 * @property {function(string[]): CommandOutput} execute
 */

/**
 * @typedef {Object} CommandOutput
 * @property {'text' | 'component' | 'error'} type
 * @property {string | React.ReactNode} content
 */

/**
 * @typedef {Object} HistoryItem
 * @property {string} command
 * @property {CommandOutput} output
 * @property {Date} timestamp
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string[]} technologies
 * @property {string} [link]
 * @property {string} [github]
 * @property {string} [image]
 */

/**
 * @typedef {Object} Skill
 * @property {string} category
 * @property {string[]} items
 */
