import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./components/Header";
import Animated from './components/Animated';
import DoziviGolte from "./components/DoziviGolte.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
            <Route path='/experiencegolte' element={<DoziviGolte />} />
        </Routes>
        <div id="bckgr"></div>
        <div className="animation-wrapper">
          <Animated />
          <Animated />
        </div>
      </div>
    </Router>
  );
}

export default App;
