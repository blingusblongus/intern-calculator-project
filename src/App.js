import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator/Calculator';

function App() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("Nick");

  const Greeting = (props) => {
    return <div>Hello There {props.name}</div>
  }

  return (
    <div className="">
      <Greeting name="something" />

      <button
        onClick={() => setCounter(counter + 1)}
      >CLICK ME</button>

      <input type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></input>

      <Calculator />
    </div>
  );
}

export default App;
