// src/App.js
import React from 'react';
import './App.css';
import Canvas from './components/Canvas.js';
import Toolbar from './components/Toolbar.js';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Canvas />
    </div>
  );
}

export default App;
