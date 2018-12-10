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
            <Image src="images/Raffe.gif" circle className="profile-pic" />
            <h3>Raffe Räv</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/Snack.gif" circle className="profile-pic" />
            <h3>Raffe Räv</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="images/Snick.gif" circle className="profile-pic" />
            <h3>Raffe Räv</h3>
            <p>Lite text om Raffe Räv</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
