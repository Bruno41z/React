import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);
  
  const plus = () => {
    setCount(count+1);
  }

  const minus = () => {
    setCount(count-1);
  }

  return (
    <div id='div1'>
      <p>{count}</p>
      <button id='b1' onClick={plus}>+</button>
      <button id='b2' onClick={minus}>-</button>
    </div>
  );

}



export default App;
