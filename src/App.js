import './App.css';
import { PlanetsComponent } from './PlanetsComponent';

function App() {

  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true }
  ]; 

  return (
    <div className="App">

      {planets.map((planeta, key) => (
        <PlanetsComponent name={planeta.name} isGasPlanet={planeta.isGasPlanet} />
        
      ) )}
      
    </div>
  );
}

export default App;
