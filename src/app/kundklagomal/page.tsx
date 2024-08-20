import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function Kundklagomål() {
  return (
    <main className="flex flex-col items-center">
      <Navbar pageType="customer" />
      <section className="m-32 flex w-full max-w-4xl scroll-mt-56 flex-col items-center px-3 sm:px-8">
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          Policy för Klagomålshantering
        </h2>
        <div className="mt-12 w-full text-left">
          <h3 className="text-xl font-medium">1. Syfte</h3>
          <p className="mt-4">
            Syftet med denna policy är att säkerställa att Payable AB hanterar
            kundklagomål på ett effektivt, rättvist och transparent sätt. Vi
            strävar efter att alla klagomål behandlas seriöst och löses på ett
            sätt som gagnar både kunden och företaget.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            2. Definition av Klagomål
          </h3>
          <p className="mt-4">
            Ett klagomål är ett uttryck för missnöje från en kund avseende vår
            tjänst, produkt eller den behandling de fått av våra anställda.
            Detta kan inkludera, men är inte begränsat till, klagomål om
            felaktig fakturering, otillfredsställande service, bristande
            kommunikation och behandling av personuppgifter.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            3. Principer för Klagomålshantering
          </h3>
          <p className="mt-4">
            · Tillgänglighet: Vi ska göra det enkelt för kunder att framföra
            klagomål. <br />
            · Opartiskhet: Klagomål ska hanteras på ett rättvist och objektivt
            sätt. <br />
            · Konfidentialitet: Kundens integritet ska skyddas vid hantering av
            klagomål. <br />
            · Ansvar: Vi ska ta ansvar för att åtgärda och lösa klagomål snabbt
            och effektivt. <br />· Ständig förbättring: Vi använder feedback
            från klagomål för att kontinuerligt förbättra våra tjänster.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            4. Process för Klagomålshantering
          </h3>
          <h4 className="mt-8 text-lg font-medium">
            4.1 Inlämning av Klagomål
          </h4>
          <p className="mt-4">Kunder kan lämna in klagomål på följande sätt:</p>
          <h4 className="mt-8 text-lg font-medium">
            4.2 Bekräftelse av Mottagande
          </h4>
          <p className="mt-4">
            När vi mottar ett klagomål, bekräftar vi mottagandet inom 2
            arbetsdagar. Bekräftelsen inkluderar information om hur klagomålet
            kommer att behandlas och en förväntad tidsram för att lösa ärendet.
          </p>
          <h4 className="mt-8 text-lg font-medium">4.3 Utredning</h4>
          <p className="mt-4">
            Varje klagomål kommer att utredas grundligt och opartiskt. Vi kan
            behöva kontakta kunden för ytterligare information eller
            förtydliganden.
          </p>
          <h4 className="mt-8 text-lg font-medium">4.4 Beslut och Åtgärder</h4>
          <p className="mt-4">
            Efter utredningen kommer vi att fatta ett beslut och vidta lämpliga
            åtgärder för att lösa klagomålet. Kunden kommer att informeras om
            beslutet och de åtgärder som kommer att vidtas.
          </p>
          <h4 className="mt-8 text-lg font-medium">4.5 Återkoppling</h4>
          <p className="mt-4">
            Vi strävar efter att lösa klagomål inom 14 arbetsdagar från
            mottagandet. Om mer tid krävs, kommer vi att informera kunden om
            anledningen till förseningen och en ny förväntad tid för lösning.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            5. Eskalering av Klagomål
          </h3>
          <p className="mt-4">
            Om kunden inte är nöjd med hur klagomålet har hanterats, kan ärendet
            eskaleras till en högre chef eller ansvarig för kundklagomål. Vid
            behov kan kunden även hänvisa klagomålet till en extern
            tvistlösningsinstans, såsom Allmänna reklamationsnämnden (ARN) eller
            relevant tillsynsmyndighet.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            6. Dokumentation och Rapportering
          </h3>
          <p className="mt-4">
            Alla klagomål och åtgärder som vidtagits ska dokumenteras noggrant.
            Vi kommer att regelbundet granska och analysera klagomål för att
            identifiera mönster och möjligheter till förbättring.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            7. Utbildning och Medvetenhet
          </h3>
          <p className="mt-4">
            Alla anställda ska få utbildning om denna klagomålshanteringspolicy
            och hur de ska hantera klagomål på ett effektivt sätt. Vi kommer att
            säkerställa att alla medarbetare är medvetna om vikten av att
            hantera klagomål professionellt och respektfullt.
          </p>
          <h3 className="mt-12 text-xl font-medium">
            8. Översyn och Uppdatering
          </h3>
          <p className="mt-4">
            Denna policy ska granskas och uppdateras årligen för att säkerställa
            att den förblir effektiv och relevant. Eventuella ändringar kommer
            att kommuniceras till alla anställda och göras tillgängliga för våra
            kunder.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
