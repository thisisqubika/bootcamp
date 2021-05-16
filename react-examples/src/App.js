import React, { useState } from 'react';
import Welcome from './Welcome';
import { Counter } from './Counter';
import { DisplayCount } from './DisplayCount';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const names = ["Ceci"];

  return (
    <div className="App">
      <header className="App-header">
        {names.map((name) => (
          <Welcome key={name} name={name}>
            Bienvenido al curso
          </Welcome>
        ))}
        <Counter count={count} />
        <DisplayCount count={count} setCount={setCount} />
      </header>
    </div>
  );
}

export default App;
