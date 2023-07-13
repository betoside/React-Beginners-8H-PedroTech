import './App.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  // const toolAPI = 'https://jsonplaceholder.typicode.com/posts';
  // const toolAPI = 'https://catfact.ninja/fact';
  const toolAPI = 'https://api.agify.io/?name=';

  const [name, setName] = useState("");
  const [predictAge, setPredictAge] = useState(null);

  const fetchData = (nome) => {
    Axios.get(toolAPI+name).then((res)=>{
      setPredictAge(res.data);
    })
  };

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder='Ex. Pedro...'
        onChange={(event) => {setName(event.target.value)}} />
      <br />
      <br />
      <button onClick={fetchData}>Predict Age</button>
      <p>Name: {predictAge?.name}</p>
      <p>Age: {predictAge?.age}</p>
      <p>Count: {predictAge?.count}</p>
    </div>
  );
}

export default App;
