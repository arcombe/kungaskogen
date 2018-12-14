import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Karaktarerna.css'

export default class Karaktarerna extends Component {

  render() {
    return (
      <Grid>
        <Row className="text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/rafferav.jpg" className="profile-pic" />
            <h3>Raffe Räv</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/snack.jpg" className="profile-pic" />
            <h3>Snack</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/snick.jpg" className="profile-pic" />
            <h3>Snick</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/algvis.jpg" className="profile-pic" />
            <h3>Algvis</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/bitis.jpg" className="profile-pic" />
            <h3>Bitis</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/gronilla.jpg" className="profile-pic" />
            <h3>Gronilla</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/hotta.jpg" className="profile-pic" />
            <h3>Hotta</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/maraca.jpg" className="profile-pic" />
            <h3>Maraca</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/karaktarerna_2/silke.jpg" className="profile-pic" />
            <h3>Silke</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
