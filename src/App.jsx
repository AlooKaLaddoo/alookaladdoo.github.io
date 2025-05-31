import React from 'react';
import Terminal from './components/Terminal/Terminal';

function App() {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-terminal-black to-terminal-brightBlack p-2 md:p-4 flex items-start justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(122,162,247,0.1),transparent_60%)]" />
      <Terminal />
    </div>
  );
}

export default App;
