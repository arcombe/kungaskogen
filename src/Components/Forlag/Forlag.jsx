import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Forlag.css'

export default class Forlag extends Component {

  render() {
    return (
      <Grid className="show-grid">
        <Row>
          <Col md="5">
            <Image src="images/ilkahuset_2012_big.jpg" responsive />
          </Col>
          <Col md="7">
            <h3>Om förlaget</h3>

            <p>För många år sedan startades förlaget ILKA i Malmö. Affärsidén var rejäla och vettiga leksaker. Med tiden har affärsidén kompletterats med egna läromedel, böcker, hobby, inredning, musik mm. </p>

            <p>Numera använder vi samlingsnamnet Förlagshuset Wasa för alla våra företag med varumärkena ILKA, Kungaskogen, Wasa Music och Hansa.</p>

            <p>I egen fastighet i centrala Malmö finns administration och produktutveckling. Logistik sköts från eget lager i Blekinge.</p>

            <p>Flera generationer barn har kommit i kontakt med varumärket ILKA och de senaste åren har hundratusentals barn lärt känna och älska Snick och Snack från Kungaskogen. Kungaskogens viktiga budskap om att vara schysst och en bra kompis tas emot på ett överväldigande sätt. Vuxna och barn samlas kring sagan med teman, kreativitet, drama och lek. Många jobbar numera år efter år med sagan och musiken som bas i barns lärande och utveckling.</p>

            <p>Kungaskogen är idag vår enskilt största produkt i svensk förskola. </p>


            <p>Välkommen till Förlagshuset Wasa, ILKA och Kungaskogen!</p>

            <p>Förlagshuset Wasa/ILKA - Wasaplay</p>
            <p>Box 4059  </p>
            <p>203 11 Malmö  </p>
            <p>Tel +46 40 120012 </p>
            <p>idea@ilka.se  </p>
            <p>org nr 556309 3961 </p>

            <p>2018-12-12 kl 13.15</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
