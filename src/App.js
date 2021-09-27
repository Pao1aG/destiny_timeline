import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TimelineSample from './pages/TimelineSample';
import About from './pages/About';
import './styles/App.css';

function App() {
  return (
    <Router> 
      <Navbar />
      <Route exact path= "/">
        <Home />
      </Route>
      <Route exact path= "/timeline">
        <TimelineSample />
      </Route>
      <Route exact path= "/about">
        <About />
      </Route>
    </Router>
  );
}

export default App;
