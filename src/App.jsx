import { useState } from "react";
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1); //step value for increment/decrement

  //Event Handlers
  const increment = () => setCount(count + step);
  const decrement = () => {
    if(count - step >= 0) {
      setCount(count - step);
    }
  };

  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1>Counter App</h1>
      <h2>{count}</h2>


      {/* Step Input*/}
      <div className="step-control">
        <label>Step: </label>
        <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        min="1"
        />
      </div>

      {/*Buttons*/}
      <div className="buttons">
        <button onClick={increment}> + Increment </button>
        <button onClick={decrement} disabled={count === 0}> - Decrement </button>
        <button onClick={reset}> Reset </button>
      </div>




    </div>
  );

}


export default App;