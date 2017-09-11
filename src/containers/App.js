import React from 'react';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from '../components/Projects';

const App = (props) => {
  return (
    <Router>
      <div>
    
        <NavBar />
        <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        </div>

      </div>

    </Router>
  );
};

export default App
