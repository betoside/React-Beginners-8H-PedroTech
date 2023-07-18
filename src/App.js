import './App.css';
import { useToggle } from './components/useToggle';

function App() {

  const {state: isVisible, toggle} = useToggle();

  return (
    <div className="App">

      <button onClick={toggle}>
        {!isVisible ? 'Show' : 'Hide'}
      </button>

      {isVisible && <h1>Hidden text</h1>}

    </div>
  );
  
}

export default App;
