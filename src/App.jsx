import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import Home from './Components/Home/Home';
import Om from './Components/Om/Om';
import CustomNavbar from './Components/CustomNavbar/CustomNavbar';
import Karaktarerna from './Components/Karaktarerna/Karaktarerna';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/om" component={Om} />
          <Route path="/karaktarerna" component={Karaktarerna} />
          
          <footer>
            <div className="info">
              <h4> Kontakt </h4>
              <p> Förlagshuset Wasa </p>
              <p> Box </p>
            </div>

            <div className="info">
              <h4> Kundservice </h4>
              <p> idea@ilka.se </p>
              <p> 040 - 120012 </p>
            </div>

            <div className="info">
              <h4> Integritetspolicy </h4>
              <p> idea@ilka.se </p>
              <p> 040 - 120012 </p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
