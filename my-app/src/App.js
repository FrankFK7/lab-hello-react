import logo from "./logo.svg";
import "./App.css";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Section1 />
      <Section2 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
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
