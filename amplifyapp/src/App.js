import logo from './index.jpg';
import './App.css';
import './navbars/navbar.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <body>
        <Router>
        <div class="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <div class="dropdown">
            <button class="dropbtn">Dropdown 
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/#">Link 1</a>
              <a href="/#">Link 2</a>
              <a href="/#">Link 3</a>
            </div>
          </div> 
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        </Router>


        <h3>Sneezy Soup Personal Website</h3>
        <p></p>

      </body>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
      </header>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
