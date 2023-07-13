import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [catFact, setCatFact] = useState('');

  // const toolJson = 'https://jsonplaceholder.typicode.com/posts';
  const toolJson = 'https://catfact.ninja/fact';

  const fetchCatFact = () => {
    Axios.get(toolJson).then((res) => {
      setCatFact(res.data.fact);
    });
  };

  useEffect(()=>{
    Axios.get(toolJson).then((res) => {
      setCatFact(res.data.fact);
    });
  }, []);


  return (
    <div className="App">

      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>

    </div>
  );
}

export default App;
