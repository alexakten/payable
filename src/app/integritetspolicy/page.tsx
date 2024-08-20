import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function Integritet() {
  return (
    <main className="flex flex-col items-center">
      <Navbar pageType="customer" />
      <section className="m-32 flex w-full max-w-4xl scroll-mt-56 flex-col items-center px-3 sm:px-8">
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          Integritetspolicy
        </h2>
        <div className="mt-12 w-full text-left">
          <h3 className="text-xl font-medium">1. Introduktion</h3>
          <p className="mt-4">
            Denna integritetspolicy beskriver hur Payable AB samlar in,
            använder, lagrar och skyddar personuppgifter i samband med vår
            inkassoverksamhet. Vi är fast beslutna att skydda din integritet och
            säkerställa att dina personuppgifter behandlas i enlighet med
            gällande dataskyddslagar, inklusive EU allmänna dataskyddsförordning
            (GDPR).
          </p>
          <h3 className="mt-12 text-xl font-medium">
            2. Personuppgifter vi samlar in
          </h3>
          <p className="mt-4">
            Vi kan samla in följande typer av personuppgifter: <br />
            <br />
            · Identifikationsuppgifter: Namn, personnummer, födelsedatum,
            ID-nummer. <br />
            · Kontaktuppgifter: Adress, telefonnummer, e-postadress. <br />
            · Finansiella uppgifter: Bankkontouppgifter, skuldinformation,
            betalningshistorik. <br />
            · Kundserviceuppgifter: Kommunikation med kundtjänst,
            ärendehistorik. <br />· Tekniska uppgifter: IP-adress,
            webbläsaruppgifter, cookies och liknande teknologier.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            3. Syften med behandlingen av personuppgifter
          </h3>
          <p className="mt-4">
            Vi behandlar dina personuppgifter för följande ändamål: <br />
            <br />
            · Skuldförvaltning: Hantera och inkassera obetalda skulder. <br />
            · Kommunikation: Kontakta dig via telefon, e-post, brev eller andra
            kanaler angående din skuld. <br />
            · Kundservice: Svara på dina frågor och hantera dina ärenden. <br />
            · Juridiska ändamål: Uppfylla rättsliga skyldigheter, såsom att
            följa lagar och regler samt besvara rättsliga krav. <br />·
            Förbättring av tjänster: Analysera och förbättra våra tjänster och
            kundupplevelse.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            4. Rättslig grund för behandling
          </h3>
          <p className="mt-4">
            Vi behandlar dina personuppgifter baserat på följande rättsliga
            grunder: <br />
            <br />
            · Avtal: För att fullgöra våra avtalsförpliktelser gentemot dig.{" "}
            <br />
            · Rättslig förpliktelse: För att uppfylla rättsliga skyldigheter som
            vi är föremål för. <br />
            · Berättigat intresse: För att driva vår verksamhet, inklusive
            inkassering av skulder, och förbättra våra tjänster. <br />·
            Samtycke: När det är tillämpligt, exempelvis vid marknadsföring.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            5. Delning av personuppgifter
          </h3>
          <p className="mt-4">
            Vi kan dela dina personuppgifter med: <br />
            <br />
            · Tjänsteleverantörer: Företag som tillhandahåller tjänster åt oss,
            såsom IT-support, betaltjänster och kundtjänst. <br />
            · Myndigheter: Rättsliga instanser och tillsynsmyndigheter när det
            krävs enligt lag. <br />· Affärspartners: Företag som vi samarbetar
            med för att utföra våra tjänster.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            6. Överföring av personuppgifter utanför EU/EES
          </h3>
          <p className="mt-4">
            Dina personuppgifter kan överföras till och behandlas i länder
            utanför EU/EES. I dessa fall säkerställer vi att lämpliga
            skyddsåtgärder vidtas, såsom standardavtalsklausuler godkända av
            EU-kommissionen.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            7. Lagring av personuppgifter
          </h3>
          <p className="mt-4">
            Vi lagrar dina personuppgifter så länge det är nödvändigt för de
            ändamål som de samlades in för eller så länge som krävs enligt lag.
            När dina personuppgifter inte längre behövs kommer de att raderas
            eller anonymiseras.
          </p>
          <h3 className="mt-12 text-xl font-medium">8. Dina rättigheter</h3>
          <p className="mt-4">
            Du har rätt att: <br />
            <br />
            · Få tillgång till dina personuppgifter: Begära en kopia av de
            personuppgifter vi har om dig. <br />
            · Rätta felaktiga uppgifter: Begära att felaktiga eller
            ofullständiga uppgifter rättas. <br />
            · Radera dina personuppgifter: Begära att dina personuppgifter
            raderas under vissa omständigheter. <br />
            · Begränsa behandlingen: Begära att behandlingen av dina
            personuppgifter begränsas under vissa omständigheter. <br />
            · Invända mot behandling: Invända mot behandlingen av dina
            personuppgifter baserat på berättigat intresse eller för
            direktmarknadsföring. <br />· Dataportabilitet: Begära att få dina
            personuppgifter överförda till en annan tjänsteleverantör.
          </p>
          <h3 className="mt-12 text-xl font-medium">9. Kontaktuppgifter</h3>
          <p className="mt-4">
            Om du har frågor om denna integritetspolicy eller vill utöva dina
            rättigheter, vänligen kontakta oss på:
          </p>
          <h3 className="mt-12 text-xl font-medium">
            10. Ändringar i integritetspolicyn
          </h3>
          <p className="mt-4">
            Vi kan uppdatera denna integritetspolicy vid behov. Den senaste
            versionen kommer alltid att finnas tillgänglig på vår webbplats. Vi
            uppmuntrar dig att regelbundet granska denna policy för att hålla
            dig informerad om hur vi skyddar dina personuppgifter.
            <br />
            <br />
            Datum för senaste uppdatering: 2024-06-10
            <br />
            <br />
            Genom att använda våra tjänster samtycker du till denna
            integritetspolicy.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
