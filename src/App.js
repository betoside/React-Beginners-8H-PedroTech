import './App.css';
import { Person } from "./components/Person";

function App() {


  return (
    <div className="App text-left">

      <Person 
        name='Pedro'
        email='email@pedro.com'
        age={21}
        isMarried={true}
        friends={['Gordão', 'Mark Fish', 'Pixoxó', 'Elias', 'João']}
      />

    </div>
  );
  
}

export default App;
