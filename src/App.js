import Header from "./components/Header";
import Animated from './components/Animated';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="animation-wrapper">
        <Animated />
        <Animated />
      </div>
    </div>
  );
}

export default App;
