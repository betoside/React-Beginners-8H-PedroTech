import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {

  // const toolAPI = 'https://jsonplaceholder.typicode.com/posts';
  // const toolAPI = 'https://catfact.ninja/fact';
  // const toolAPI = 'https://api.agify.io/?name=';
  // const toolAPI = 'https://coffee.alexflipnote.dev/random.json';

  const [desculpa, setDesculpa] = useState('');

  const fetchDesculpa = (categoria) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${categoria}/`).then(
      (res) => {
        setDesculpa(res.data[0]);
      }
    );
  }

  return (
    <div className="App generateExcuse">
      <h3>Generate An Excuse</h3>
      <button onClick={() => {fetchDesculpa('party')}}>Party</button>
      <button onClick={() => {fetchDesculpa('family')}}>Family</button>
      <button onClick={() => {fetchDesculpa('office')}}>Office</button>
      <div className='desculpa'>
        <div className='id'>id: {desculpa.id}</div>
        <div className='excuse'>{desculpa.excuse}</div>
        <div className='category'>categoria: {desculpa.category}</div>
      </div>
    </div>
  );
}

export default App;
