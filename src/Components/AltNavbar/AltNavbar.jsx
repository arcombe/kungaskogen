import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AltNavbar.css'

export default class AltNavbar extends Component {

  render() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
          <div className="container navbar-container">
            <div className="navbar-header">

              <Link to="/" >
                <Image src="images/Welcome/flagga_kungaskogen.png" classNameName="logo"/>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto navbar-right">


                <li className="nav-item dropdown">

                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Om
                  </a>

                  <div className="dropdown-menu mega-menu" aria-labelledby="navbarDropdown">
                    <div className="row">
                      <div className="col-md-3">
                        <h3>Om</h3>
                        <Link to="/historia">Vår Historia </Link>
                      </div>
                      <div className="col-md-3">
                        <h3>något annat</h3>
                        <Link to="/historia">Vår Historia </Link>
                      </div>
                      <div className="col-md-3">
                        <h3>fler annat</h3>
                        <Link to="/historia">Vår Historia </Link>
                      </div>
                      <div className="col-md-3">
                        <h3>slut annat</h3>
                        <Link to="/historia">Vår Historia </Link>
                      </div>
                    </div>
                  </div>
                </li>


              </ul>
            </div>

          </div>
        </nav>
    )
  }
}
