import Welcome from '../Welcome';
import { Counter } from '../Counter';
import './Home.css';
import { Form } from '../Form';

export const Home = () => {
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
      </header>
    </div>
  );
}
