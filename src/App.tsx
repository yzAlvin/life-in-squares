import type { Component } from 'solid-js';

import styles from './App.module.css';
import Square from './Square'

const App: Component = () => {
  const rows = Array.from(Array(10).keys())
  const grid = rows.map(row => Array.from(Array(10).keys()))

  return (
    <div class={styles.App}>
    <h1>Your life in years</h1>

    <p>Each row is a decade.</p>

    <svg width="100%" height="1400">
      {grid.map((row, y) => row.map((cell, x) => <Square x={10 + 110*(x-1)} y={10 + 110*y} fill={y % 2 == 0 ? "red" : "blue"}/>))}
    </svg>
    
    <p>yzAlvin</p>
    </div>
  );
};

export default App;
