import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Historia.css'

export default class Historia extends Component {

  render() {
    return (
      <Grid className="show-grid">
        <Row>
          <Col md="7">
            <Image src="images/historia.jpg" responsive/>
          </Col>
          <Col md="5">

            <h3>Vår historia – Hur Kungaskogen kom till</h3>

            <p>En dag samlades ett team på förlaget ILKA i Malmö för att göra en visa om vänskap. Texten skrevs och när dagen var slut var melodin också klar. Vännervisan hade fått liv. Visan tycktes internt vara så bra att det bestämdes att skriva en hel saga med vänskapstema. </p>

            <p>Sagan skulle anpassas för 2000-talets barn. Förlaget har genom åren haft långa samarbeten med kändisar som Astrid Lindgren, Ilon Wiland, Björn Berg, Gunilla Wolde m.fl. där en hel del erfarenhet lagrats om barn, sagor, illustrationer och barnböcker. Det var dags för förlaget att göra egna nya barnbokskaraktärer, nya berättelser med ny musik för barn. </p>

            <p>Arbetet tog flera år och för en tid sedan kom första utgivningen av ”Snick och Snack Vännerna i Kungaskogen bygger en koja” med ny musik. </p>

            <p>Efter några år på marknaden förstod vi att de nya barnbokskaraktärerna med sin historia om att bygga en koja hade gjort stora intryck på barn och vuxna. Pedagoger upptäckte vilken outömlig källa sagan hade för att prata om vänskap, djur och natur. En ny barnsagoklassiker hade tydligen fötts i Sverige.</p>

            <p>Förlaget hängde på och nu finns hela 34 sånger om Kungaskogen med nya berättelser med tema vänskap men också med livsstil, hälsa, miljö och hållbart samhälle. Hela 9 barnbokskaraktärer har fått liv genom Snick, Snack, Raffe Räv, Bitis, Hotta, Maraca, Älgvis, Silke och Gronilla. Författaren Lisa dos Santos har verkligen lyckats med berättarkonst för barn och fokus på att vara riktigt goda vänner. </p>

            <p>Välkommen till Kungaskogen!</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
