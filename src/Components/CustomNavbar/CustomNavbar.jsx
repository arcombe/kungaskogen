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
                    <Image src="images/Welcome/flagga_kungaskogen.png" className="logo"/>
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse className="dropdown-x">
                <Nav pullRight>

                  <NavDropdown eventKey={1} title="OM" >
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
                    <MenuItem eventKey={2.1}>Produkter</MenuItem>
                    <MenuItem eventKey={2.2}>Webshop</MenuItem>
                  </NavDropdown>

                  <NavDropdown eventKey={3} title="MUSIK/MEDIA" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Musik</MenuItem>
                    <MenuItem eventKey={3.2} componentClass={Link} href="/youtube" to="/youtube">Youtube</MenuItem>
                    <MenuItem eventKey={3.3}>Appar</MenuItem>
                    <MenuItem eventKey={3.4}>Musikspelare</MenuItem>
                    <MenuItem eventKey={3.5}>CD Skivor</MenuItem>
                    <MenuItem eventKey={3.6}>Studio</MenuItem>
                    <MenuItem eventKey={3.7}>Musikförlag/Label</MenuItem>
                    <MenuItem eventKey={3.8}>Radiostationer</MenuItem>
                    <MenuItem eventKey={3.9}>TV Kanaler</MenuItem>
                    <MenuItem eventKey={3.10}>Upphovspersoner</MenuItem>
                  </NavDropdown>

                  <NavDropdown eventKey={4} title="TEATER" id="basic-nav-dropdown">
                    <MenuItem eventKey={4.1}>Bioteater</MenuItem>
                    <MenuItem eventKey={4.2}>Raffe Räv Hälsar På</MenuItem>
                    <MenuItem eventKey={4.3}>Bokning</MenuItem>
                    <MenuItem eventKey={4.4}>Biografer</MenuItem>
                    <MenuItem eventKey={4.5}>Arrangörer</MenuItem>
                    <MenuItem eventKey={4.6}>Teatergrupper</MenuItem>
                    <MenuItem eventKey={4.7}>Egna Elevföreställningar På Skola/Förskola</MenuItem>
                    <MenuItem eventKey={4.8}>Så Här Tycker Andra</MenuItem>
                  </NavDropdown>

                  <NavDropdown eventKey={5} title="ANVÄNDARE" id="basic-nav-dropdown">
                    <NavDropdown eventKey={8} title="Förskola/Skola" className="nav-dropdown-right">
                      <MenuItem eventKey={8.4} componentClass={Link} href="/bocker" to="/bocker">Produkter</MenuItem>
                      <MenuItem eventKey={8.2}>Tips</MenuItem>
                      <MenuItem eventKey={8.3}>Feedback</MenuItem>
                      <MenuItem eventKey={8.3}>Handledning/Access</MenuItem>
                    </NavDropdown>
                    <MenuItem eventKey={5.1}>Privata/Hem</MenuItem>
                    <NavDropdown eventKey={9} title="Övrig Användare" className="nav-dropdown-right">
                      <MenuItem eventKey={9.6}>Musiker/Artister</MenuItem>
                      <MenuItem eventKey={9.7}>Röris</MenuItem>
                      <MenuItem eventKey={9.8}>Kulturskolor</MenuItem>
                    </NavDropdown>

                  </NavDropdown>
                  <NavDropdown eventKey={6} title="ÖVRIGT" id="basic-nav-dropdown">
                    <MenuItem eventKey={6.1}>Länkar</MenuItem>
                    <MenuItem eventKey={6.2}>Nyheter</MenuItem>
                    <MenuItem eventKey={6.3}>Copyright</MenuItem>
                    <MenuItem eventKey={6.4}>Nöjen Och Barnkultur</MenuItem>
                    <MenuItem eventKey={6.5}>Arrangörer Barn
</MenuItem>
                    <MenuItem eventKey={6.6}>Utländsk Marknad
</MenuItem>
                    <MenuItem eventKey={6.7}>Vanliga Frågor
</MenuItem>
                  </NavDropdown>
                  <NavItem eventKey={7} href="http://wasaplay.se/access/logform.php" >
                    ACCESS
                  </NavItem>

                </Nav>
              </Navbar.Collapse>
      </Navbar>
    )
  }
}
