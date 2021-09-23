import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Timeline from './pages/Timeline';
import About from './pages/About';
import logo from './logo.svg';
import './styles/App.css';

function App() {
  return (
    <Router> 
      <Navbar />
      <Route exact path= "/">
        <Home />
      </Route>
      <Route exact path= "/quiz">
          <Quiz />
      </Route>
      <Route exact path= "/timeline">
        <Timeline />
      </Route>
      <Route exact path= "/about">
        <About />
      </Route>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
