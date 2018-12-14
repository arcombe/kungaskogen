import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Bocker.css'

export default class Bocker extends Component {

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Image src="images/book/bok1_kojan.jpg" className="show-book"/>
        </Row>
        <Row className="show-grid">
          <p>Text om bok 1</p>
        </Row>
        <Row className="show-grid">
          <Image src="images/book/bok2_utflykt.jpg" className="show-book"/>
        </Row>
        <Row className="show-grid">
          <p>Text om bok 2</p>
        </Row>
      </Grid>
    )
  }
}
