import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Snabbfakta.css'

export default class Snabbfakta extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col md="4" mdOffset="1">
            <Image src="images/snabbfakta.jpg" responsive />
          </Col>
          <Col md="6">
            <h3> DETTA ÄR SNICK & SNACK OCH VÄNNERNA I KUNGASKOGEN </h3>

            <p>• Sagan och musiken bygger och stärker relationer. Många vittnar om att barn visar mer respekt för varandra när de sjunger och läser om Vännerna i Kungaskogen.</p>

            <p>• Ålder 3–9 år men vuxna älskar sagan lika mycket som barnen.</p>

            <p>• Kungaparet har fått musiken från Kungaskogen framförd för sig personligen i ett specialuppträdande med barn inför Kungen och Drottning Silvia.</p>

            <p>• Vännerna i Kungaskogen är värdegrundande med buskapen ”att vara schysst och en bra kompis”, empati och vi är olika med lika bra.</p>

            <p>• Handling: Hur man är mot andra, vara rädd om naturen, livsstil, hälsa, miljö, hållbart.</p>

            <p>• Börje Ahlstedt är berättare i den första boken.</p>

            <p>• I bilderböckerna finns också CD-skivor (finns också på App) och noter.</p>

            <p>• Över 30 musiker och 15 skådespelare medverkar i de olika
            produktionerna.</p>

            <p>• Vännerna i Kungaskogen spelas som bioteater över hela Sverige och alla föreställningar är för de mesta utsålda. Förra året sågs föreställningarna av 20 000 barn på 47 platser i Sverige.</p>

            <p>• YouTube: Sökord "Kungaskogen" eller "Raffe räv" Appstore: Sökord "Kungaskogen"</p>

            <p>• 33 originalsånger finns till Kungaskogen. Många är redan barnviseklassiker. Kungaskogensångerna är förmodligen den mest använda barnmusiken på förskolan idag.</p>

            <p>• Sagan och musiken om Kungaskogen är skriven för 2000-talets barn.</p>

            <p>• Kungaskogen har stor potential att bli en skandinavisk barnklassiker.</p>

            <p>• Kungaskogen är just nu Sveriges största barnbokssatsning med musik.</p>

            <p>• Kringprodukter har tagits fram kring sagan men det finns många fler möjligheter. Senaste produkter: Memo, Handdockor, Appar, Almackstavla.</p>

            <p>Över 9000 förskolor i Sverige har Kungaskogen.</p>
            <p>Över 1 000 000 barn har mött sagofigurerna och musiken.</p>

            <p>Kompisarna i Kungaskogen är goda förebilder som
            barnen älskar och relaterar till i sin lek.</p>

            <p>Ca 800 000 föräldrar har mött Kungaskogen genom
            alla aktiviteter som gjorts/görs på förskola/skola med
            Kungaskogen. Stor privat efterfrågan.</p>

            <p>FÖRLAG: ILKA/Förlagshuset Wasa Malmö</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
