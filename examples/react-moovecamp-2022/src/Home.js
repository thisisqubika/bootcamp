import logo from "./logo.svg";
import "./Home.css";
import Welcome from "./Welcome";
import Counter from "./Counter";

function Home() {
  const name = "Viky";
  const technologies = ["HTML", "CSS", "Javascript"];

  const logSomething = () => console.log("logging...");

  return (
    <div className="App">
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome name={name} onClick={logSomething} />

        <p>We already learned about:</p>
        <ol>
          {technologies.map((technology) => (
            <li>{technology}</li>
          ))}
        </ol>
        <p>This is a react app example!</p>
        <Counter />
      </div>
    </div>
  );
}

export default Home;
