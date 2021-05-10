import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edito <code>src/App.js</code> y se recarga automaticamente
        </p>
        <a
          className="App-link"
          href="https://github.com/moove-it/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
