import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Karaktarerna.css'

export default class Karaktarerna extends Component {

  render() {
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/rafferav.jpg" circle className="profile-pic" />
            <h3>Raffe Räv</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/snack.jpg" circle className="profile-pic" />
            <h3>Snack</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/snick.jpg" circle className="profile-pic" />
            <h3>Snick</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/algvis.jpg" circle className="profile-pic" />
            <h3>Algvis</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/bitis.jpg" circle className="profile-pic" />
            <h3>Bitis</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/gronilla.jpg" circle className="profile-pic" />
            <h3>Gronilla</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/hotta.jpg" circle className="profile-pic" />
            <h3>Hotta</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/maraca.jpg" circle className="profile-pic" />
            <h3>Maraca</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/caracters/silke.jpg" circle className="profile-pic" />
            <h3>Silke</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
