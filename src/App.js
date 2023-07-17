import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';

export const AppContext = createContext();

function App() {
  
  const [username, setUsername] = useState('Betoside');
 
  const TopComponent = () => {
    const [state, setState] = useState();
    return(
      <div>
        <MiddleComponent state={state} />
      </div>
    );
  };

// objbanner = document.querySelector('#showroom')
{/* <section id=​"showroom" class=​"Cek21w">​…​</section>​ */}

// objbanner.style.display = 'none'

  const MiddleComponent = (state) => {
    return(
      <div>
        <BottomComponent state={state} />
      </div>
    );
  };
  
  const BottomComponent = (state) => {
    return(
      <div>
        {state}
      </div>
    );
  };


  return (
    <div className="App">
      <AppContext.Provider value={{username, setUsername}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />}  />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>

      
    </div>
  );
  
}

export default App;
