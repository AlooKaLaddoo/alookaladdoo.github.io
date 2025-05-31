/**
 * @typedef {import('../types/types.js').HistoryItem} HistoryItem
 */

export class TerminalHistory {
  constructor() {
    this.history = [];
    this.commandHistory = [];
    this.historyIndex = -1;
  }

  /**
   * @param {HistoryItem} item
   */
  addHistoryItem(item) {
    this.history.push(item);
    
    // Only add to command history if it's not empty and not the same as the last command
    if (
      item.command.trim() && 
      (this.commandHistory.length === 0 || 
       this.commandHistory[this.commandHistory.length - 1] !== item.command)
    ) {
      this.commandHistory.push(item.command);
    }
    
    // Reset history index to point to the end
    this.historyIndex = this.commandHistory.length;
  }

  /**
   * @returns {HistoryItem[]}
   */
  getHistory() {
    return this.history;
  }

  clearHistory() {
    this.history = [];
  }

  /**
   * @returns {string}
   */
  getPreviousCommand() {
    if (this.commandHistory.length === 0 || this.historyIndex <= 0) {
      return '';
    }
    
    this.historyIndex = Math.max(0, this.historyIndex - 1);
    return this.commandHistory[this.historyIndex];
  }

  /**
   * @returns {string}
   */
  getNextCommand() {
    if (
      this.commandHistory.length === 0 ||
      this.historyIndex >= this.commandHistory.length - 1
    ) {
      this.historyIndex = this.commandHistory.length;
      return '';
    }
    
    this.historyIndex += 1;
    return this.commandHistory[this.historyIndex];
  }

  resetHistoryIndex() {
    this.historyIndex = this.commandHistory.length;
  }
}

export const terminalHistory = new TerminalHistory();
