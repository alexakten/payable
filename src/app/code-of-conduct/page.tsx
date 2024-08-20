import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function Code() {
  return (
    <main className="flex flex-col items-center">
      <Navbar pageType="customer" />
      <section className="m-32 flex w-full max-w-4xl scroll-mt-56 flex-col items-center px-3 sm:px-8">
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          Code of Conduct
        </h2>
        <div className="mt-12 w-full text-left">
          <h3 className="text-xl font-medium">1. Introduktion</h3>
          <p className="mt-4">
            Denna uppförandekod beskriver de principer och standarder som styr
            beteendet hos alla anställda, ledare och samarbetspartners till
            Payable AB. Vårt mål är att bedriva vår verksamhet på ett etiskt,
            rättvist och transparent sätt, samtidigt som vi skyddar och
            respekterar våra kunders rättigheter.
          </p>
          <h3 className="mt-12 text-xl font-medium">2. Etiska Principer</h3>
          <p className="mt-4">
            Ärlighet och Integritet: Alltid agera med ärlighet och integritet i
            alla våra affärsrelationer. Respekt: Behandla alla individer med
            respekt, värdighet och rättvisa. Ansvar: Ta ansvar för våra
            handlingar och beslut, och agera i företagets och kundens bästa
            intresse.
          </p>
          <h3 className="mt-12 text-xl font-medium">3. Kundbehandling</h3>
          <p className="mt-4">
            Respektfull Kommunikation: Vi ska alltid kommunicera med kunder på
            ett respektfullt, hövligt och professionellt sätt. Kundens
            Rättigheter: Vi respekterar kundens rättigheter och arbetar för att
            säkerställa att våra metoder överensstämmer med gällande lagar och
            regler. Sekretess: Vi skyddar kundens personliga information och
            behandlar den i enlighet med vår integritetspolicy.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            4. Efterlevnad av Lagar och Regler
          </h3>
          <p className="mt-4">
            Lagstiftning: Vi följer alla relevanta lagar, regler och
            branschstandarder som reglerar vår verksamhet. Antikorruption: Vi
            tolererar inte någon form av korruption eller mutor. Alla
            affärsbeslut ska fattas på grundval av affärsmässiga överväganden.
            Rapportering av Överträdelser: Anställda uppmuntras att rapportera
            eventuella brott mot denna uppförandekod eller lagstiftning utan
            rädsla för repressalier.
          </p>
          <h3 className="mt-12 text-xl font-medium">5. Intressekonflikter </h3>
          <p className="mt-4">
            Identifiering och Undvikande: Anställda ska undvika situationer där
            personliga intressen kan komma i konflikt med företagets eller
            kundernas intressen. Transparens: Eventuella intressekonflikter ska
            omedelbart rapporteras till närmaste chef eller compliance-ansvarig
            för bedömning och hantering.
          </p>
          <h3 className="mt-12 text-xl font-medium">6. Anställdas Beteende</h3>
          <p className="mt-4">
            Professionellt Uppträdande: Anställda förväntas uppträda
            professionellt och upprätthålla företagets goda rykte i alla sina
            handlingar. Samarbete: Vi främjar en arbetsmiljö präglad av
            samarbete, ömsesidig respekt och stöd. Fortbildning: Anställda
            uppmuntras att kontinuerligt utveckla sina kunskaper och färdigheter
            för att bättre kunna betjäna våra kunder och uppfylla sina
            arbetsuppgifter.
          </p>
          <h3 className="mt-12 text-xl font-medium">7. Miljö och Samhälle</h3>
          <p className="mt-4">
            Miljöansvar: Vi strävar efter att minimera vår miljöpåverkan och
            följa hållbara affärsmetoder. Socialt Ansvar: Vi är engagerade i att
            stödja lokalsamhället och delta i socialt ansvarstagande initiativ.
          </p>

          <h3 className="mt-12 text-xl font-medium">
            8. Hantering av Klagomål
          </h3>
          <p className="mt-4">
            Kundklagomål: Vi har tydliga rutiner för att hantera kundklagomål
            snabbt och rättvist. Alla klagomål ska tas på allvar och behandlas
            konfidentiellt. Interna Klagomål: Anställda ska känna sig trygga att
            rapportera problem eller klagomål internt. Vi säkerställer att dessa
            hanteras rättvist och utan repressalier.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            10. Översyn och Uppdatering{" "}
          </h3>
          <p className="mt-4">
            Denna uppförandekod kommer att granskas och uppdateras regelbundet
            för att säkerställa att den förblir relevant och effektiv.
            Eventuella förändringar kommer att kommuniceras till alla anställda
            och samarbetspartners.
            <br />
            <br />
            Datum för senaste uppdatering: 2024-06-10
            <br />
            <br />
            Genom att följa denna uppförandekod förbinder vi oss att
            upprätthålla höga etiska standarder och bygga förtroende med våra
            kunder, anställda och samhällspartners.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
