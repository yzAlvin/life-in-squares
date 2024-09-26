import type { Component } from 'solid-js';

import styles from './App.module.css';
import Square from './Square'

const App: Component = () => {
  const rows = Array.from(Array(10).keys())
  const grid = rows.map(_ => Array.from(Array(10).keys()))

  const weeksRows = Array.from(Array(89).keys())
  const weeksGrid = weeksRows.map(_ => Array.from(Array(52).keys()))

  const isEarlyYears = (age) => {
    return age <= 5.5
  }

  const isElementarySchool = (age) => {
    return age > 5 && age <= 11.5
  }

  const isMiddleSchool = (age) => {
    return age > 11 && age <= 14.5
  }

  const isHighSchool = (age) => {
    return age > 14 && age <= 18.5
  }

  const isCollege = (age) => {
    return age > 18 && age <= 22.5
  }

  const isCareer = (age) => {
    return age > 22 && age <= 62
  }

  const isRetirement = (age) => {
    return age > 62
  }

  const squareColour = (x, y) => {
    const age = x + 10 * y + 1
    switch (true) {
      case isEarlyYears(age):
        return "lightblue"
      case isElementarySchool(age):
        return "darkgreen"
      case isMiddleSchool(age):
        return "lightgreen"
      case isHighSchool(age):
        return "yellow"
      case isCollege(age):
        return "orange"
      case isCareer(age):
        return "red"
      case isRetirement(age):
        return "purple"
      default:
        console.warn(`Don't know how to handle the age ${age}`)
        return "black"
    }
  }

  const squareColourYear = (x, y) => {
    const age = (((52 * y) + x) / 52).toFixed(2)
    switch (true) {
      case isEarlyYears(age):
        return "lightblue"
      case isElementarySchool(age):
        return "darkgreen"
      case isMiddleSchool(age):
        return "lightgreen"
      case isHighSchool(age):
        return "yellow"
      case isCollege(age):
        return "orange"
      case isCareer(age):
        return "red"
      case isRetirement(age):
        return "purple"
      default:
        console.warn(`Don't know how to handle the age ${age}`)
        return "black"
    }
  }

  return (
    <div class={styles.App}>
    <h1>Your life in years</h1>

    <p>Each row is a decade.</p>

    <svg width="100%" height="1200">
      {grid.map((row, y) => row.map((cell, x) => <Square x={10 + 110*(x)} y={10 + 110*y} fill={squareColour(x, y)}/>))}
    </svg>

    <h1>Your life in weeks</h1>

    <p>Each row is a year.</p>

    <svg width="100%" height="1600">
      {weeksGrid.map((row, y) => row.map((cell, x) => <Square x={10 + 10*(x)} y={10 + 10*y} fill={squareColourYear(x, y)} width={7} height={7} strokeWidth={0.5}/>))}
    </svg>
    
    <p>yzAlvin</p>
    </div>
  );
};

export default App;
