import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terminal: {
          black: '#1a1b26',
          red: '#f7768e',
          green: '#73daca',
          yellow: '#e0af68',
          blue: '#7aa2f7',
          magenta: '#bb9af7',
          cyan: '#7dcfff',
          white: '#c0caf5',
          brightBlack: '#414868',
          brightRed: '#f7768e',
          brightGreen: '#73daca',
          brightYellow: '#e0af68',
          brightBlue: '#7aa2f7',
          brightMagenta: '#bb9af7',
          brightCyan: '#7dcfff',
          brightWhite: '#ffffff',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'type-text': 'type 3.5s steps(40, end)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        type: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
      boxShadow: {
        'terminal': '0 0 60px -15px rgba(122, 162, 247, 0.3)',
      },
    },
  },
  plugins: [
    tailwindScrollbar({ nocompatible: true }),
  ],
};;
