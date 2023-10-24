import './styles/App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Colecciones from './pages/Colecciones';
import Lenceria from './pages/Lenceria';
import Inferiores from './pages/Inferiores';
import Complementos from './pages/Complementos';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" component={Inicio} />
          <Route path="/Colecciones" component={Colecciones} />
          <Route path="/Lenceria" component={Lenceria} />
          <Route path="/Inferiores" component={Inferiores} />
          <Route path="/Complementos" component={Complementos} />
        </Routes>


      </Router>

    </>
  );
}

export default App;
