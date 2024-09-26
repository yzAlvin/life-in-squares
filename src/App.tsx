import type { Component } from 'solid-js';

import styles from './App.module.css';
import Square from './Square'

const App: Component = () => {
  const rows = Array.from(Array(10).keys())
  const grid = rows.map(row => Array.from(Array(10).keys()))

  const isEarlyYears = (age) => {
    return age <= 5
  }

  const isElementarySchool = (age) => {
    return age <= 11 && age > 5
  }

  const squareColour = (x, y) => {
    const age = x + 10 * y + 1
    if (isEarlyYears(age)) {
      "red"
    }
    else if (isElementarySchool(age)) {
      return "blue"
    } 
    else {
      return "yellow"
    }
  }

  return (
    <div class={styles.App}>
    <h1>Your life in years</h1>

    <p>Each row is a decade.</p>

    <svg width="100%" height="1400">
      {grid.map((row, y) => row.map((cell, x) => <Square x={10 + 110*(x)} y={10 + 110*y} fill={squareColour(x, y)}/>))}
    </svg>
    
    <p>yzAlvin</p>
    </div>
  );
};

export default App;
