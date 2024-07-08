import { useState } from 'react';
import './App.css'
import Counter from './Counter';
import Display from './Display';

function App() {
  const [count, setCount] = useState(0)
  const [displayString, setState] = useState(false)

  function display() {
    setState(!displayString)

  }

  function addCount() {
    setCount(count + 1)
    console.log(count);
  }
  return (
    <div className="App"><Display displayString={displayString} />
      
      {displayString ? <Display /> : null
      }

      <button onClick={addCount}>Add</button>
      <button onClick={display}>Display</button>
      <Counter count={count} />

    </div>

  );
}


export default App;
