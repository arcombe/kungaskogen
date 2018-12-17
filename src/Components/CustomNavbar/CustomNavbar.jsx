import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Grid, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component {

  render() {
    return (
      <Navbar default collapseOnSelect fixedTop>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="/" >
                    <Image src="images/Welcome/valkommentillkungaskogen_enrad_flagga.png" responsive className="logo"/>
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse >
                <Nav pullRight>
                  <NavDropdown eventKey={1} title="OM" id="basic-nav-dropdown">
                    <MenuItem eventKey={1.1} componentClass={Link} href="/historia" to="/historia">Vår Historia</MenuItem>
                    <MenuItem eventKey={1.2} componentClass={Link} href="/snabbfakta" to="/snabbfakta">Snabbfakta</MenuItem>
                    <MenuItem eventKey={1.3} componentClass={Link} href="/karaktarerna" to="/karaktarerna">Karaktärer</MenuItem>
                    <MenuItem eventKey={1.4} componentClass={Link} href="/bocker" to="/bocker">Böcker</MenuItem>
                    <MenuItem eventKey={1.5} componentClass={Link} href="/forlag" to="/forlag">Förlag</MenuItem>
                    <MenuItem eventKey={1.6} componentClass={Link} href="/aterforsaljare" to="/aterforsaljare">Återförsäljare</MenuItem>
                    <MenuItem eventKey={1.7} componentClass={Link} href="/upphovspersoner" to="/upphovspersoner">Upphovspersoner</MenuItem>
                    <MenuItem eventKey={1.7} componentClass={Link} href="/medverkande" to="/medverkande">Medverkande</MenuItem>
                    <MenuItem eventKey={1.8} componentClass={Link} href="/licens" to="/licens">Licenser</MenuItem>
                  </NavDropdown>
                  <NavDropdown eventKey={2} title="PRODUKTER" id="basic-nav-dropdown">
                    <MenuItem eventKey={2.1}>Action</MenuItem>
                    <MenuItem eventKey={2.2}>Another action</MenuItem>
                    <MenuItem eventKey={2.3}>Something else here</MenuItem>
                    <MenuItem eventKey={2.4}>Separated link</MenuItem>
                  </NavDropdown>
                  <NavDropdown eventKey={3} title="MUSIK" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Bara Test</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                  </NavDropdown>
                  <NavDropdown eventKey={4} title="TEATER" id="basic-nav-dropdown">
                    <MenuItem eventKey={4.1}>Action</MenuItem>
                    <MenuItem eventKey={4.2}>Another action</MenuItem>
                    <MenuItem eventKey={4.3}>Something else here</MenuItem>
                    <MenuItem eventKey={4.4}>Separated link</MenuItem>
                  </NavDropdown>
                  <NavItem eventKey={5} href="http://wasaplay.se/access/logform.php" >
                    ACCESS
                  </NavItem>
                  <NavDropdown eventKey={6} title="ÖVRIGT" id="basic-nav-dropdown">
                    <MenuItem eventKey={6.1}>Action</MenuItem>
                    <MenuItem eventKey={6.2}>Another action</MenuItem>
                    <MenuItem eventKey={6.3}>Something else here</MenuItem>
                    <MenuItem eventKey={6.4}>Separated link</MenuItem>
                  </NavDropdown>
                  <NavDropdown eventKey={7} title="LANGUAGE" id="basic-nav-dropdown">
                    <MenuItem eventKey={7.1}>Svenska</MenuItem>
                    <MenuItem eventKey={7.2}>English</MenuItem>
                    <MenuItem eventKey={7.3}>Deutsch</MenuItem>
                    <MenuItem eventKey={7.4}>Norsk</MenuItem>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
      </Navbar>
    )
  }
}
