import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Upphovspersoner.css'

export default class Upphovspersoner extends Component {

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={3} className="upphov-profile-pic">
            <Image src="images/upphovs/lisa.jpg" />
          </Col>
          <Col xs={12} sm={8} className="upphov-profile-text">
            <h2>Författare</h2>
            <h3>Lisa dos Santos (Grane)</h3>
            <p>Lisa, 38 år, tog sin juristexamen vid Lunds Universitet och gjorde sin notarietjänst vid tingsrätten i Ystad. Lisa arbetar, vid sidan av sitt författarskap som kammaråklagare i Stockholm. Lisa förekommer då och då i TV programmet Brottsplatsen.

Lisa debuterade som barnboksförfattare med bok - och musiksagan "Vännerna i Kungaskogen", där hon skrivit både sagan och musiktexterna. Lisa har också förekommit som textförfattare på Svensktoppen.

Lisa fortsatte skrivandet och publicerade två nya manus i serien om Vännerna i Kungaskogen inklusive 19 nya vistexter på sånger i Kungaskogen. De nya musiksagorna heter "Vännerna i Kungaskogen går på utflykt" och "Vi är kompisar, sa Snick och Snack".

Lisa har också släppt en fictionbok "Leo Bell och jakten på ljuset". En bok för de lite äldre och som ska stimulera barnens fantasi och läsning.

Lisas skrivintresse har alltid varit stort och hon har skrivit dikter, sagor och texter sedan sju års ålder. Lisa visste inte när hon lämnade ifrån sig manuset om kungaskogen vilken "grej" "Vännerna i Kungaskogen" skulle bli.

”Ett av de bästa material som någonsin har gjorts för barn” är återkommande kommentarer på bokmässan i Göteborg.</p>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} sm={3} className="upphov-profile-pic">
            <Image src="images/upphovs/ingela.jpg" />
          </Col>
          <Col xs={12} sm={8} className="upphov-profile-text">
            <h2>Illustratör</h2>
            <h3>Ingela Bergmann</h3>
            <p>Ingela Bergmann, uppvuxen i Malmö, har tecknat och målat så länge hon kan minnas. Fyra års färg- och formstudier på Konstskolan Forum i Malmö. Två års grafisk utbildning i Lund. Medlem av Norske Billedkunstnere.

Ingela har illustrerat barnböcker, bokomslag, affischer, träpussel och träspel för barn, gjort temperamålningar och akvareller samt illustrerat ett 10-tal olika lära-skriva-räkna-läsa-böcker till förskolan. - Idéer saknas inte och så länge som naturen bjuder på liv finns det färger och former som ger stoff åt nya bilder, säger Ingela. Efter att de senaste tiden bott i Tronheim i Norge har Ingela med familj flyttat tillbaka till Skåne och Lund.

- Visst gör man mycket bildskapande i datorn numera, men några dagar i veckan ägnar jag åt "odatoriserat" bildskapande utom- eller inomhus. Jag håller nu på med nya bilder till nya Kungaskogenmaterial samtidigt som jag illustrerar bilder för kort och kuddar.</p>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} sm={3} className="upphov-profile-pic">
          </Col>
          <Col xs={12} sm={8} className="upphov-profile-text">
            <h2>Kompositör</h2>
            <h3>Joc Lind</h3>
            <p>
              Joc Lind (pseudonym). Arbetar med en mängd olika musikstilar allt från pianostycken, folkvisor, mello, old, barnvisor mm. Tycker att bra musik ska ha en tydlig melodi. En klassisk musikförebild är Chopin.

              Utbildning: Fil kand Lunds Universitet.

              Har arbetat tillsammans med många framstående personer inom marknad barn som Astrid Lindgren, Börje Ahlstedt, Ilon Wikland, Björn Berg, Gunilla Wolde, Lucy Cousins, Sofia (Tove) Jansson (Moomin), Torbjörn Egner, m fl

              Lyssnar gärna på all musik, gärna tokblandning av gammalt
              och nytt i olika stilar, svenskt som utländskt.

              Det är viktigt att barn tidigt får sjunga, lyssna och dramatisera till bra musik. En bra melodi ska gärna ha ett karaktäristiskt prefix.

              Sångtexterna till "Vännerna i Kungaskogen" är fantastiska och det har varit ett nöje att lyssna och spela fram alla melodier, säger Joc Lind.

              Joc Lind är pappa till många barn.
            </p>
          </Col>
        </Row>
        <Row className="show-grid">

          <Col xs={12} sm={3} className="upphov-profile-pic">
            <Image src="images/upphovs/ville.jpg" className="ville"/>
          </Col>

          <Col xs={12} sm={8} className="upphov-profile-text">
            <h2>Kompositör</h2>
            <h3>Vilhelm Ersmark</h3>
            <p>
              Vilhelm har gjort några av musikstyckena till Kungaskogen samtidigt som han gjort arrangemang, sjungit och producerat huvuddelen av musiken till Kungaskogen. Kungaskogen har nu kommit in på nytt i Vilhelms värld då ett av hans tre barn sjunger och arbetar med Kungaskogen på förskolan. Ett bra kvitto på nedlagt jobb, säger Vilhelm.

              Utbildning: Civilekonom Lunds Universitet

              Vid sidan av att sjunga visor har Vilhelm haft "årets sommarplåga" för en del år sedan. Sången spelas fortfarande i hela världen.

              Båda kompositörerna är medlemmar i Stim och Skap.
            </p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
