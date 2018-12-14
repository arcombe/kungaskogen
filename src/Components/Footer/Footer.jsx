import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Footer.css'

export default class Footer extends Component {

  render() {
    return (
      <Grid>
        <Row className="footer-content">
          <Col md="2" className="footer-info">
            <h4> Kontakt </h4>
            <p> Förlagshuset Wasa </p>
            <p> Box </p>
          </Col>
          <Col md="2" className="footer-info">
            <h4> Kundservice </h4>
            <p> idea@ilka.se </p>
            <p> 040 - 120012 </p>
          </Col>
          <Col md="2" className="footer-info">
            <h4> Integritetspolicy </h4>
            <p> idea@ilka.se </p>
            <p> 040 - 120012 </p>
          </Col>
          <Col md="3" mdOffset="3" className="footer-logo" >
            <Image src="images/forlagshusetwasa_krona.png" responsive className="loga-wasa"/>
          </Col>
        </Row>
      </Grid>
    )
  }
}
