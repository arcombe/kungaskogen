import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Integritet.css'

export default class Integritet extends Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col>

            <h3>INTEGRITET</h3>

            <p>Denna information delges alla kunder enligt ny EU lag gällande fom 25 maj 2018, GDPR</p>

            <h4>1. Allmänt</h4>

            <p>Förlagshuset Wasa/ILKA värnar om din personliga integritet och arbetar för att säkerställa att dina personuppgifter skyddas vid användning av våra tjänster. Nedan följer vår policy avseende integritet ("Integritetspolicy") som fastställer hur ILKA Förskoleprodukter AB, org. nr 55556309-3961, BOX 4059, 203 11 Malmö, Sverige, idea@ilka.se använder, bearbetar och skyddar dina personuppgifter. Integritetspolicyn gäller när Förlagshuset Wasa/ILKA tillhandahåller tjänster och produkter i anslutning till köp, serviceärenden och övrig kontakt med Förlagshuset Wasa/ILKA. När du godkänner policyn på hemsidan i samband med köp eller lämnande av uppgifter samtycker du till behandling av dina personuppgifter i enlighet med nedanstående.</p>

            <p>Integritetspolicyn gäller även den behandling av personuppgifter som görs inom ramen för de som väljer att prenumerera på våra marknadsföringstjänster, nyhetsbrev.</p>

            <h4>2. Vem ansvarar för dina personuppgifter?</h4>
            <p>Förlagshuset Wasa/ILKA är personuppgiftsansvarig och har följande kontaktuppgifter:</p>
            <p>Post: Förlagshuset Wasa/ILKA, Box 4059, 203 11 Malmö</p>
            <p>Tel: 040 120012 E-post: idea@ilka.se</p>

            <p>Förlagshuset Wasa/ILKA avser att behandla alla personuppgifter på ett lagligt, öppet och rättvist sätt i enlighet med tillämplig lagstiftning (EU:s dataskyddsförordning 2016/679 av den 27 april 2016).</p>

            <p>När behandlar vi dina personuppgifter?</p>
            <p>Förlagshuset Wasa/ILKA samlar in och behandlar personuppgifter om dig när du genomför ett köp på Förlagshuset Wasa/ILKA:s hemsida, använder dig av Förlagshuset Wasa/ILKA:s support och tjänster, besöker Förlagshuset Wasa/ILKA:s hemsida eller på annat sätt har kontakt med ILKA. Huvudsakligen sker insamling och behandling av personuppgifter för ingående av köpeavtal samt tillhandahållande av tjänster och erbjudanden.</p>

            <p>Som prenumerant, nyhetsbrev, hos Förlagshuset Wasa/ILKA behandlar vi personuppgifter om dig, exempelvis inköpshistorik, vilka erbjudanden du varit intresserad av genom att läsa ett mail eller klicka på en länk samt hur du interagerar med Förlagshuset Wasa/ILKA:s hemsida.</p>

            <p>Förlagshuset Wasa/ILKA samlar även in och uppdaterar adressuppgifter via tredjepartstjänster för adressuppdatering.</p>

            <h4>4. Vilka personuppgifter samlar vi in och behandlar om dig?</h4>
            <p>Förlagshuset Wasa/ILKA samlar in följande personuppgifter om dig i egenskap av kund:</p>
            <p>•Namn och id-nummer (personnummer eller nationellt id)</p>
            <p>•Adress</p>
            <p>•Telefonnummer</p>
            <p>•E-post</p>
            <p>•Betalningsuppgifter</p>
            <p>•Kundnummer</p>
            <p>•IP-adress</p>
            <p>•Information om din användning av ILKA:s hemsida</p>

            <p>Förlagshuset Wasa/ILKA samlar in följande personuppgifter om dig i egenskap av prenumerant hos ILKA:</p>
            <p>•Namn och id-nummer (personnummer eller nationellt id)</p>
            <p>•Adress</p>
            <p>•Telefonnummer</p>
            <p>•E-post</p>
            <p>•Betalningsuppgifter</p>
            <p>•Kontoinformation</p>
            <p>•IP-adress</p>
            <p>•Information om din användning av ILKA:s hemsida</p>
            <p>•Information om produkter och erbjudande du har varit intresserad av, din interaktion med våra nyhetsbrev och om du har anmält dig till något event</p>
            <p>•Uppgifter om dina inköp</p>

            <h4>5. Varför behandlar vi uppgifter om dig?</h4>
            <p>Personuppgifter för kunder hos Förlagshuset Wasa/ILKA behandlas huvudsakligen i syfte att:</p>
            <p>•Fullgöra förpliktelser gentemot dig som kund. Exempelvis fullgörande av varuköp, fakturering och tillhandahållande av support.</p>
            <p>•Uppfylla leverans- och garantiåtaganden.</p>
            <p>•Erbjuda allmän kundvård och kundservice. Exempelvis besvara frågor och rätta felaktiga uppgifter.</p>
            <p>•Hantera kundförhållandet och tillhandahålla våra tjänster.</p>
            <p>•Bedöma vilka betalningsmetoder vi kan erbjuda dig, till exempel genom kreditbedömningar.</p>
            <p>•Förbättra och utveckla tjänster, produkter och funktioner.</p>
            <p>•Genomföra marknadsundersökningar med möjlighet att påverka erbjudanden och tjänster.</p>
            <p>•Utföra riskhantering samt förhindra bedrägerier.</p>
            <p>•Förhindra missbruk eller olämplig användning av våra tjänster.</p>
            <p>•Uppfylla förpliktelser i samband med tävlingar.</p>
            <p>•Efterleva tillämplig lagstiftning.</p>
            <p>•Administrera och hantera ditt personliga konto hos Förlagshuset Wasa/ILKA.</p>

            <p>Personuppgifter för prenumeranter kan, utöver uppräkningen ovan, behandlas i syfte att:</p>
            <p>•Förbättra upplevelsen för prenumeranter genom att erbjuda möjlighet att ha förifyllda uppgifter, spara favoritprodukter, ha fler betalningsalternativ och smidigare hantering av ärenden och reklamationer.</p>
            <p>•Lämna information och anpassad marknadsföring på hemsidan, per post, e-post, SMS/MMS samt telefon avseende ILKA:s och utvalda samarbetspartners varor och tjänster.</p>
            <p>•Möjliggöra kommunikation med dig som prenumerant via post, e-post, telefon eller SMS/MMS.</p>

            <p>Förlagshuset Wasa/ILKA kan även komma att använda lagrade personuppgifter för statistik, marknadsundersökningar, marknads- och kundanalyser, affärsuppföljning samt utveckling av affärssystem och metoder för köp av varor och tjänster.</p>

            <h4>6. Profilering</h4>
            <p>För prenumeranter kan Förlagshuset Wasa/ILKA komma att behandla personuppgifter genom profilering. Vi analyserar information om hur du använder vår hemsida, vilka varor, tjänster och erbjudanden du varit intresserad av, uppgifter om dina inköp, vilka av våra nyhetsbrev du interagerat med, om du eventuellt har anmält dig till något av våra event samt information om ditt kontoinnehav. Detta gör vi för att tillhandahålla dig erbjudanden som vi tror passar dig och för att bjuda in dig till event vi tror att du skulle vilja gå på.</p>

            <p>Du äger rätt att närsomhelst invända mot sådan profilering. Eventuell invändning skickas till idea@ilka.se När Förlagshuset Wasa/ILKA har mottagit din anmälan kommer vi upphöra med att behandla dina personuppgifter för detta ändamål.</p>

            <h4>7. Rättsliga grunder för Förlagshuset Wasa/ILKA:s behandling av personuppgifter</h4>
            <p>All insamling och behandling av personuppgifter baseras på rättsliga grunder. Dina personuppgifter kan komma att behandlas för att kunna fullgöra avtal med dig som kund, exempelvis för att genomföra varuköp och fullgöra åtaganden.</p>

Dina personuppgifter kan komma att behandlas med stöd av samtycke från dig. Ditt samtycke måste vara frivilligt, specifikt, informerat och innebära ett otvetydigt medgivande för att gälla som rättslig grund. Vi samlar in samtycken från dig som Prenumerant för att kunna administrera uppgifter och erhålla information om dina inköp. Vidare lagras ditt beteende på vår hemsida, ditt intresse av våra erbjudanden och produkter samt din interaktion med Förlagshuset Wasa/ILKA för att kunna fullgöra vårt åtagande att tillhandahålla dig personliga erbjudanden.

Dina personuppgifter kan även komma att behandlas med stöd av en så kallad intresseavvägning. Detta gäller exempelvis den behandling vi utför för att göra en begränsad segmentering av kunder. Förlagshuset Wasa/ILKA behandlar aldrig känsliga personuppgifter med stöd av en intresseavvägning och utför ingen automatiserad behandling utan samtycke.

Förlagshuset Wasa/ILKA har i vissa fall en rättslig förpliktelse att behandla personuppgifter, exempelvis för att kunna uppfylla bokförings- och skattelagstiftningens krav. All behandling av personuppgifter sker då i enlighet med lagstadgade krav.

8. Hur länge lagrar vi uppgifter om dig?
Förlagshuset Wasa/ILKA lagrar dina personuppgifter så länge det krävs för att fullgöra de ändamål som dem samlades in för. Dina personuppgifter kan dock sparas under en längre tid om det är nödvändigt med hänsyn till lagstadgade krav eller för att bevaka Förlagshuset Wasa/ILKA:s rättsliga intressen.

Som prenumerant lagras dina personuppgifter så länge du samtycker till det.

9. Tillgång till lagrade personuppgifter
ILKA kan komma att lämna ut personuppgifter till annat bolag som ingår i samma koncern som Förlagshuset Wasa/ILKA samt till samarbetspartners för att uppfylla våra åtaganden och de ändamål som nämnts ovan. För att säkerställa att vi har rätt adressuppgifter till dig kan Förlagshuset Wasa/ILKA även komma att lämna ut dina uppgifter till företag som tillhandahåller tjänster för adressuppdateringar.

Uppgifter som vidarebefordras till tredje part används endast för att tillhandahålla ovannämnda tjänster till dig, t.ex. speditörer i samband med leverans av varor, mediebyråer för distribution av marknadsföring och kreditupplysnings- eller inkassobyråer för kreditupplysningskontroller, identitetskontroller och indrivning av fordran.

Vi överför aldrig dina personuppgifter för marknadsföringsändamål till tredje part utanför Förlagshuset Wasa/ILKA–bolagen och våra samarbetspartners. Förlagshuset Wasa/ILKA kan komma att lämna ut dina personuppgifter om det är nödvändigt för att följa gällande lagstiftning eller krav från myndigheter, för att tillvarata Förlagshuset Wasa/ILKA:s rättsliga intressen eller för att upptäcka, förebygga eller uppmärksamma bedrägerier och andra säkerhets- eller tekniska problem.

Förlagshuset Wasa/ILKA strävar alltid efter att enbart lagra personuppgifter inom EU/EES. Uppgifterna kan komma att överföras och bearbetas i ett land utanför EU/EES (tredje land). Eventuell överföring sker i enlighet med gällande lagstiftning och registrerade som omfattas av överföringen kommer underrättas.

10. Hur skyddar vi dina personuppgifter?
Vi har vidtagit tekniska och organisatoriska åtgärder för att skydda dina uppgifter från förlust, manipulation och obehörig åtkomst. Vi anpassar fortlöpande våra säkerhetsåtgärder i enlighet med de framsteg och den utveckling som sker på det tekniska området. För att göra kortköp så säkra som möjligt, skickas all information i krypterad form. Detta innebär att informationen överförs via en säker anslutning och att dina personuppgifter inte kan läsas av utomstående. För kortköp arbetar vi med ett auktoriserat betalningsombud som hjälper oss att direkt kontrollera med din bank att kortet är giltigt för köp. Vårt betalningsombud bearbetar dina kortuppgifter i enlighet med den internationella säkerhetsstandarden PCI DSS som utvecklades av kortföretagen VISA, MasterCard, Diners, American Express och JCB. Detta innebär att säkerheten är mycket hög vid bearbetningen av dina kortuppgifter. När du betalar med kort förbehåller vi oss rätten att utföra en identitetskontroll.

Vid eventuella personuppgiftsincidenter åtar sig Förlagshuset Wasa/ILKA att anmäla detta till ansvarig tillsynsmyndighet (Datainspektionen) utan onödigt dröjsmål och senast inom 72 timmar från det att incidenten har blivit känd. Om en sådan anmälan inte kan ske inom 72 timmar, ska Förlagshuset Wasa/ILKA redogöra för skälen till fördröjningen i anmälan och information lämnas då i omgångar utan otillbörligt vidare dröjsmål.

Förlagshuset Wasa/ILKA åtar sig att snarast möjligt underrätta dig om du är berörd av en personuppgiftsincident och vidta nödvändiga försiktighetsåtgärder.

11. Vilka är dina rättigheter?
ILKA kommer på din begäran eller på eget initiativ att rätta, radera, avidentifiera eller komplettera dina uppgifter om de upptäcks vara felaktiga, ofullständiga eller missvisande.

Som registrerad äger du rätt att begära:

1. Tillgång till dina personuppgifter. Du har rätt att få ett registerutdrag eller en kopia över vilka personuppgifter ILKA behandlar om dig. Du kan närsomhelst utnyttja denna rätt kostnadsfritt, en gång per kalenderår, genom en skriftligt undertecknad ansökan. Nämnda registerutdrag ska innehålla information om vilka personuppgifter som finns registrerade om dig, ändamålen med behandlingen och till vilka mottagare uppgifterna har lämnats eller ska lämnas ut. Vidare ska registerutdraget innehålla information om var uppgifterna har hämtats ifrån om personuppgifterna inte har samlats in från dig, huruvida uppgifterna är föremål för automatiserat beslutsfattande (inklusive profilering) samt den förutsedda period ILKA avser att lagra uppgifterna eller kriterierna som används för att fastställa denna period. Du har även rätt att få information om de rättigheter som anges nedan.

2. Rättelse av dina personuppgifter. På begäran kommer Förlagshuset Wasa/ILKA utan onödigt dröjsmål rätta felaktiga eller ofullständiga uppgifter som behandlas om dig.

3. Radering av dina personuppgifter. Du har rätt att begära att dina personuppgifter tas bort om de inte längre är nödvändiga för det ändamål de samlades in för. Vid ett lagstadgat krav på lagring av dina personuppgifter eller när det finns andra legitima skäl till varför ILKA måste spara dina uppgifter, till exempel obetalda skulder, kan dina personuppgifter inte raderas. Vi kommer då att avsluta den behandling som görs för andra ändamål än att följa lagstiftningen.

4. Begränsning av behandling. Du har rätt att begära att dina personuppgifter endast får behandlas för vissa avgränsade ändamål. Du kan bland annat begära begränsning när du anser att dina uppgifter är felaktiga och du har begärt rättelse enligt ovan. Under tiden uppgifternas korrekthet utreds kommer dess behandling vara begränsad.

Om dina personuppgifter finns lagrade hos Förlagshuset Wasa/ILKA har du rätt till dataportabilitet. Det innebär en rätt att under vissa förutsättningar få ut och överföra dina personuppgifter i ett strukturerat, allmänt använt och maskinläsbart format till en annan personuppgiftsansvarig.

Du kan när som helst kostnadsfritt invända mot att dina personuppgifter behandlas för direkt marknadsföring. Förlagshuset Wasa/ILKA behandlar inte dina personuppgifter för ändamål som rör direkt marknadsföring om du motsätter dig sådan behandling. När har vi mottagit din invändning kommer vi att upphöra med att behandla personuppgifterna för sådant marknadsföringsändamål. Eventuell invändning skickas till idea@ilka.se. Om du har lämnat samtycke till Förlagshuset Wasa/ILKA att lagra och använda dina personuppgifter för marknadsföringsändamål kan du när som helst återkalla nämnda samtycke. Sådan återkallelse kan begränsas till att endast avse del av behandlingen, exempelvis den som rör direkt marknadsföring.

Som registrerad äger du rätt att inge eventuella klagomål angående behandling av dina personuppgifter till Datainspektionen.

Du kan kontakta oss antingen genom att skicka ett brev till Förlagshuset Wasa/ILKA kundtjänst, Förlagshuset Wasa/ILKA, Box 4059, 203 11 Malmö Sverige eller mejla till idea@ilka.se. Dina önskemål kommer besvaras av ILKA snarast möjligt och senast inom en månad. Om Förlagshuset Wasa/ILKA inte avser att uppfylla dina önskemål inom den angivna tiden är Förlagshuset Wasa/ILKA skyldiga att motivera varför.

12. Användning av cookies och andra spårningstekniker
Vår hemsida använder sig av cookies och andra spårningstekniker för att förbättra din onlineupplevelse. Du hittar mer information om detta i vår cookiepolicy.

13. Länkar
Ibland länkar vi till andra webbplatser. Denna Integritetspolicy gäller enbart vår egen webbplats. När du länkas till annan webbplats bör du läsa den personuppgiftspolicy som gäller för den sidan. Notera att ILKA inte tar ansvar för andra webbplatsers behandling av dina personuppgifter.

14. Eventuella ändringar av Förlagshuset Wasa/ILKA:s integritetspolicy
Förlagshuset Wasa/ILKA förbehåller sig rätten att när som helst göra ändringar i denna Integritetspolicy. Om Integritetspolicyn ändras kommer Förlagshuset Wasa/ILKA att med rimlig varsel underrätta dig. Ifall du inte godtar den ändrade Integritetspolicyn har du rätt att säga upp avtalet med ILKA innan den träder i kraft. Du kan säga upp avtalet genom att kontakta Förlagshuset Wasa/ILKA.

15. Kontaktinformation till personuppgiftsansvarig

Vi värnar om våra kunders personuppgifter! Tveka inte att kontakta oss om du har några frågor om hur vi behandlar dina personuppgifter, denna Integritetspolicy eller om du vill begära ett registerutdrag.

Vår kontaktinformation är:
ILKA Förskoleprodukter AB
Box 4059
203 11 Malmö Sverige

Telefon: 040 120012
E-post: idea@ilka.se
Företagsregister: Bolagsverket
Organisationsnummer: 556903-3961
          </Col>
        </Row>
      </Grid>
    )
  }
}
