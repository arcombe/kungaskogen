import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Footer.css'

export default class Footer extends Component {

  render() {
    return (
      <Grid>
        <Row className="footer-content">

          <Col md="1" className="footer-info kundservice">
            <h4> Kundservice </h4>
            <p> idea@ilka.se </p>
            <p> 040 - 120012 </p>
          </Col>
          <Col md="1" className="footer-info">
            <Link to="/kontakt" className="footer-link">
              <h4> Kontakt </h4>
            </Link>
          </Col>
          <Col md="1" className="footer-info">
            <Link to="/integritet" className="footer-link">
              <h4> Integritet </h4>
            </Link>
          </Col>
          <Col md="1" className="footer-info">
            <h4> Press </h4>
          </Col>
          <Col md="1" className="footer-info">
            <h4> Laungage </h4>
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
