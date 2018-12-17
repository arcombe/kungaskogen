import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Kontakt.css'

export default class Kontakt extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col className="contact">

            <h4>Kontaktadress</h4>

            <p>Förlagshuset Wasa/ILKA</p>
            <p>Box 4059</p>
            <p>203 11 Malmö</p>
            <p>Sweden</p>

            <p>Tel: 040 120012</p>

            <p>idea@ilka.se</p>

            <p>org nr 556309 3961</p>


            <p>Öppet i Malmö (support Kungaskogen och access, teaterbiljetter, info om produkter med varumärket ILKA): </p>
            <p>Vardagar 9.00 - 14.30 (fast vi brukar svara senare än så. Skulle vi inte svara så ser vi ditt telefonnummer och vi ringer upp.)</p>

          </Col>
        </Row>
      </Grid>
    )
  }
}
