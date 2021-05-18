import React from 'react';
import Welcome from './components/Welcome';
import { Counter } from './components/Counter';
import { DisplayCount } from './components/DisplayCount';
import { Lessons } from './components/Lessons';
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
        <br />
        <Lessons />
      </header>
    </div>
  );
}

export default App;
