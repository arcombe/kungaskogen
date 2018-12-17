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
                  <NavDropdown eventKey={1} title="OM" id="dropdown mega-dropdown">
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
                    <MenuItem eventKey={2.1}>PRODUKTER</MenuItem>
                    <MenuItem eventKey={2.2}>WEBBSHOP</MenuItem>
                  </NavDropdown>
                  <NavDropdown eventKey={3} title="MUSIK/MEDIA" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>MUSIK</MenuItem>
                    <MenuItem eventKey={3.2}>YOUTUBE</MenuItem>
                    <MenuItem eventKey={3.3}>APPAR</MenuItem>
                    <MenuItem eventKey={3.4}>MUSIKSPELARE</MenuItem>
                    <MenuItem eventKey={3.5}>CD SKIVOR</MenuItem>
                    <MenuItem eventKey={3.6}>STUDIO</MenuItem>
                    <MenuItem eventKey={3.7}>MUSIKFÖRLAG/LABEL</MenuItem>
                    <MenuItem eventKey={3.8}>RADIOSTATIONER</MenuItem>
                    <MenuItem eventKey={3.9}>TV KANALER</MenuItem>
                    <MenuItem eventKey={3.10}>UPPHOVSPERSONER</MenuItem>

                  </NavDropdown>
                  <NavDropdown eventKey={4} title="TEATER" id="basic-nav-dropdown">
                    <MenuItem eventKey={4.1}>BIOTEATER</MenuItem>
                    <MenuItem eventKey={4.2}>RAFFE RÄV HÄLSAR PÅ</MenuItem>
                    <MenuItem eventKey={4.3}>BOKNING</MenuItem>
                    <MenuItem eventKey={4.4}>BIOGRAFER</MenuItem>
                    <MenuItem eventKey={4.5}>ARRANGÖRER</MenuItem>
                    <MenuItem eventKey={4.6}>TEATERGRUPPER</MenuItem>
                    <MenuItem eventKey={4.7}>EGNA ELEVFÖRESTÄLLNINGAR PÅ SKOLA/FÖRSKOLA</MenuItem>
                    <MenuItem eventKey={4.8}>SÅ HÄR TYCKER ANDRA</MenuItem>
                  </NavDropdown>
                  <NavDropdown eventKey={5} title="ANVÄNDARE" id="basic-nav-dropdown">
                    <MenuItem eventKey={5.1}>FÖRSKOLA/SKOLA</MenuItem>
                    <MenuItem eventKey={5.2}>SÅ HÄR JOBBAR ANDRA FÖRSKOLOR
</MenuItem>
                    <MenuItem eventKey={5.3}>RAFFE RÄVS BREVLÅDA
</MenuItem>
                    <MenuItem eventKey={5.4}>PRODUKTER</MenuItem>
                    <MenuItem eventKey={5.5}>PRIVAT HEM, FÖRÄLDRAR mm
</MenuItem>
                    <MenuItem eventKey={5.6}>MUSIKER/ARTISTER
</MenuItem>
                    <MenuItem eventKey={5.7}>RÖRIS</MenuItem>
                    <MenuItem eventKey={5.8}>KULTURSKOLOR</MenuItem>
                    <MenuItem eventKey={5.9}>LICENSIERING/FÖRETAG</MenuItem>
                    <MenuItem eventKey={5.10}>SÅ HÄR TYCKER ANDRA
</MenuItem>
                    <MenuItem eventKey={5.11}>SYNPUNKTER FEED BACK
</MenuItem>

                  </NavDropdown>
                  <NavItem eventKey={6} href="http://wasaplay.se/access/logform.php" >
                    ACCESS
                  </NavItem>
                  <NavDropdown eventKey={7} title="ÖVRIGT" id="basic-nav-dropdown">
                    <MenuItem eventKey={7.1}>LÄNKAR</MenuItem>
                    <MenuItem eventKey={7.2}>NYHETER</MenuItem>
                    <MenuItem eventKey={7.3}>COPYRIGHT</MenuItem>
                    <MenuItem eventKey={7.4}>NÖJEN OCH BARNKULTUR</MenuItem>
                    <MenuItem eventKey={7.5}>ARRANGÖRER Barn
</MenuItem>
                    <MenuItem eventKey={7.6}>UTLÄNDSK MARKNAD
</MenuItem>
                    <MenuItem eventKey={7.7}>VANLIGA FRÅGOR
</MenuItem>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
      </Navbar>
    )
  }
}
