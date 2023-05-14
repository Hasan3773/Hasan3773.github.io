import { BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Projects from "./components/Projects";
import PIDController from './components/Projects-PIDController';
import ArduinoCar from './components/Projects-ArduinoCar';
import ASR from './components/Projects-ASR';
import Toyota from './components/Projects-ToyotaHackathon';
import Jesture from './components/Projects-JestureBot';
import Emotion from './components/Projects-EmotionalCardiography';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects-PIDController" element={<PIDController />} />
        <Route path="/Projects-ArduinoCar" element={<ArduinoCar />} />
        <Route path="/Projects-ASR" element={<ASR />} />
        <Route path="/Projects-ToyotaHackathon" element={<Toyota />} />
        <Route path="/Projects-JestureBot" element={<Jesture />} />
        <Route path="/Projects-EmotionalCardiography" element={<Emotion />} />
      </Routes>
    </div>
  );  
}

export default App;