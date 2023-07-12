import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleSomar = ()=>{
    setCount(count+1);
  }
  const handleZerar = ()=>{
    setCount(0);
  }
  const handleDiminuir = ()=>{
    {count > 0 && setCount(count-1)}
  }


  return (
    <div className="App">
      
      <p>{count}</p>

      <div>
        <button onClick={handleSomar}>Increase</button>
        <button onClick={handleZerar}>zerar</button>
        <button onClick={handleDiminuir}>Decrease</button>
      </div>


    </div>
  );
}

export default App;
