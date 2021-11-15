import Header from "./components/Header";
import Animated from './components/Animated';
import DoziviGolte from "./components/DoziviGolte.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="animation-wrapper">
        <Animated />
        <Animated />
      </div>
      <DoziviGolte />
    </div>
  );
}

export default App;
