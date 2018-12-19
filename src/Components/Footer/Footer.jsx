import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './Footer.css'

export default class Footer extends Component {

  render() {
    return (
      <Grid>
        <Row className="footer-content">

          <Col md="5" xs="6" className="footer-info kundservice">
            <div className="footer-info-content">
              <h4> Kundservice </h4>
              <p> idea@ilka.se </p>
              <p> 040 - 120012 </p>
            </div>
            <div className="footer-info-content">
              <Link to="/kontakt" className="footer-link">
                <h4> Kontakt </h4>
              </Link>
            </div>
            <div className="footer-info-content">
              <Link to="/integritet" className="footer-link">
                <h4> Integritet </h4>
              </Link>
            </div>
            <div className="footer-info-content">
              <h4> Press </h4>
            </div>
            <div className="footer-info-content lang">
                <ButtonToolbar>
                  <DropdownButton title="Laungage" id="dropdown-size-medium" noCaret dropup>
                    <MenuItem eventKey="1">Svenska</MenuItem>
                    <MenuItem eventKey="2">Norsk</MenuItem>
                    <MenuItem eventKey="3">English</MenuItem>
                    <MenuItem eventKey="4">Deutsch</MenuItem>
                  </DropdownButton>
                </ButtonToolbar>
            </div>

          </Col>
          <Col md="1" xs="6" className="footer-info">

          </Col>
          <Col md="1" className="footer-info">

          </Col>
          <Col md="1" className="footer-info">

          </Col>
          <Col md="1" className="footer-info">

          </Col>
          <Col md="2" mdOffset="3" className="footer-logo" >
            <Image src="images/forlagshusetwasa_krona.png"  className="loga-wasa"/>
          </Col>
          <Col md="1"  className="footer-logo" >
            <Image src="images/ilkaloggavit.png"  className="loga-ilka"/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
