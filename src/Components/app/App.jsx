import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import Home from '../Home/Home';
import CustomNavbar from '../CustomNavbar/CustomNavbar';
import Karaktarerna from '../Karaktarerna/Karaktarerna';
import Upphovspersoner from '../Upphovspersoner/Upphovspersoner';
import Bocker from '../Bocker/Bocker';
import Footer from '../Footer/Footer';
import Licens from '../Licens/Licens';
import Forlag from '../Forlag/Forlag';
import Historia from '../Historia/Historia';
import Aterforsaljare from "../Aterforsaljare/Aterforsaljare";
import Snabbfakta from "../Snabbfakta/Snabbfakta";
import Medverkande from "../Medverkande/Medverkande";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/karaktarerna" component={Karaktarerna} />
          <Route path="/upphovspersoner" component={Upphovspersoner} />
          <Route path="/bocker" component={Bocker} />
          <Route path="/licens" component={Licens} />
          <Route path="/forlag" component={Forlag} />
          <Route path="/historia" component={Historia} />
          <Route path="/aterforsaljare" component={Aterforsaljare} />
          <Route path="/snabbfakta" component={Snabbfakta} />
          <Route path="/medverkande" component={Medverkande} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
