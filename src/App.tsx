import type { Component } from 'solid-js';

import styles from './App.module.css';

import Square from './Square'

const App: Component = () => {
  return (
    <div class={styles.App}>
    <h1>Your life in years</h1>

    <p>Each row is a decade.</p>

    <svg width="100%" height="100vh">
        <rect x="10" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="blue" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover" />
        <Square x={10 + 110*3}/>
        <Square x={10 + 110*1}/>
        <rect x="230" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="340" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="450" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="560" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="670" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="780" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="890" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="1000" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="1110" y="10" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />

        <rect x="10" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="blue" />
        <rect x="120" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="230" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="340" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="450" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="560" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="670" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="780" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="890" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="1000" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="1110" y="120" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />

        <rect x="10" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="blue" />
        <rect x="120" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="230" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="340" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="450" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="560" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="670" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="780" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="890" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="1000" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
        <rect x="1110" y="230" width="100" height="100" stroke="black" stroke-width="3" fill="yellow" />
    </svg>
    

    <p>yzAlvin</p>
    </div>
  );
};

export default App;
