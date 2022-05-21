import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
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
      <div data-testid="counter">{counter}</div>
      <button
        data-testid="plus-btn"
        onClick={() => setCounter(counter + 1)}
        disabled={disabled}
      >
        +
      </button>
      <div>
        <button
          data-testid="on-off-button"
          style={{ backgroundColor: 'blue' }}
          onClick={() => setDisabled(!disabled)}
        >
          on/off
        </button>
      </div>
    </div>
  );
}

export default App;
