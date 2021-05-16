import React from 'react';
import Welcome from './Welcome';
import { Counter } from './Counter';
import { DisplayCount } from './DisplayCount';
import './App.css';

function App() {
  const names = ["Ceci"];

  return (
    <div className="App">
      <header className="App-header">
        {names.map((name) => (
          <Welcome key={name} name={name}>
            Bienvenido al curso
          </Welcome>
        ))}
        <Counter />
        <DisplayCount />
      </header>
    </div>
  );
}

export default App;
