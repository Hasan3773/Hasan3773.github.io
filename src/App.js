import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects";
import PIDController from './components/Projects-PIDController';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects-PIDController" element={<PIDController />} />
      </Routes>
    </div>
  );
}

export default App;