import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Inicio from './pages/Home';
import Colecciones from './pages/Colecciones';
import Lenceria from './pages/Lenceria';
import Inferiores from './pages/Inferiores';
import Complementos from './pages/Complementos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Colecciones" element={<Colecciones/>} />
        <Route path="/Lenceria" element={<Lenceria/>} />
        <Route path="/Inferiores" element={<Inferiores/>} />
        <Route path="/Complementos" element={<Complementos/>} />
      </Routes>
    </Router>
  );
}


export default App;
