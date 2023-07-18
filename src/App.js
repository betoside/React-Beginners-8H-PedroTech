import './App.css';
import { Cat } from "./components/Cat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCount } from "./useCount";

function App() {

  const { count, increase, decrease, restart } = useCount();

  return (
    <div className="App">

      {count}
      <br />
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={restart}>restart</button>

    </div>
  );
  
}

export default App;
