import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Licens.css'

export default class Licens extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col md="8" mdOffset="2">
            <Image src="images/licensbild.jpg" responsive/>
          </Col>
        </Row>
        <Row>
          <Col className="text-licens">
            <h3>Företag, arrangörer, producenter mm </h3>

            <p>”Vännerna i Kungaskogen”, sagoböcker, sånger, CD skivor, appar, bioteater, har på rekordtid tagit plats i den klassiska skandinaviska barnboksvärlden genom att över 9000 förskolor i Sverige använder sagan.</p>

            <p>100 000 tals barn känner sagan och sjunger sångerna. Föräldrar har mött karaktärerna på förskolan. Kungaskogen är en värdegrundande saga som skrivits för barn på 2000 talet. Dramatenskådespelaren Börje Ahlstedt är berättare i en av produktionerna om Kungaskogen. Vi vågar påstå att även sångerna till Kungaskogen är de mest sjungna på förskolan idag.</p>

            <p>Bioteater Kungaskogen har också blivit en succé med över 90 000 besökare. Turnerar i hela Sverige från Trelleborg i söder till Boden i norr. I år kommer den att ses av ytterligare 20 000 barn</p>

            <p>Vi vill synliggöra Kungaskogen och visa på dess möjligheter.</p>

            <p>Vi söker samarbete med den (företag, arrangörer, producenter mm) som har ett öppet sinne, gör sig tid för att lyssna på något nytt, förstår att tiderna ändras och den med efterfrågan. Ibland dyker helt nya saker upp som man dra nytta av direkt och under lång tid. Man kan helt enkelt vara först!</p>

            <p>Vi arbetar nu aktivt med varumärket Kungaskogen, strategi/skydd/styleguide i det upphovsrättliga verket.</p>
            <p>Vi förbereder också utlandslansering av Kungaskogen.</p>

            <p>Alla rättigheter till Kungaskogen finns hos Förlagshuset Wasa och ILKA Förlagsprodukter AB.</p>

            <p>Licensförfrågningar: Vänligen kontakta</p>
            <p>ILKA Förlagsprodukter AB, Box 4059, 203 11 Malmö,</p>
            <p>idea@ilka.se tel 040 120012.</p>


            <p>Välkommen till Kungskogen!</p>
            <p>Förlagshuset Wasa/ILKA</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
