import Welcome from './Welcome';
import { Counter } from './Counter';
import './App.css';
import { Form } from './Form';
import { Interval } from './Interval';

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
        <Form />
        <Interval />
      </header>
    </div>
  );
}

export default App;
