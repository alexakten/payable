import Navbar from "./components/ui/Navbar";
import StepCard from "./components/ui/StepCard";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import MessageCard from "./components/ui/MessageBox";
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "./components/ui/ButtonSecondary";
import Footer from "./components/ui/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Home() {
  return (
    <main className="px- flex flex-col items-center bg-white tracking-tight text-black">
      <Navbar pageType="customer" />

      {/* Hero Section */}
      <section className="mt-36 flex w-full max-w-8xl flex-col items-center justify-center px-3 text-center sm:px-8 md:mt-52">
        {/* Notification Bar */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-sm">
          <div className="flex">
            <p>
              <span className="opacity-50">Har du fått brev från oss?</span>
            </p>
            <Link href={""}>
              <button className="group ml-2 border-l pl-2 font-medium">
                Så betalar du{" "}
                <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* H1 */}
        <h1 className="mt-6 max-w-5xl text-[clamp(44px,6vw,72px)] font-[460] leading-[1.05] tracking-tighter">
          Ta kontroll över <br /> din ekonomi
        </h1>

        {/* Subtext */}
        <h3 className="mt-8 max-w-sm text-lg tracking-tight opacity-100 md:max-w-md md:text-xl">
          Payable ger dig stöd och vägledning så att du kan få bättre kontroll över
          dina skulder.
        </h3>

        {/* Button */}
        <div className="mt-8 flex gap-4">
          <Link href={""}>
            <button className="text-md group rounded-md bg-black px-4 py-3 font-medium text-white hover:bg-zinc-700">
              Gå till betalning {" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
          <Link href={""}>
            <button className="text-md group font-medium rounded-md bg-zinc-100 px-4 py-3 text-black hover:bg-zinc-200">
              Kontakta oss{" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full  max-w-6xl flex-col items-center px-3 sm:px-8 ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="hidden flex-col sm:col-span-1 md:col-span-4 md:flex">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/smiling-woman.webp"
                alt="Hands"
                layout="fill"
                objectFit="cover"
                priority
                className=""
              />
            </div>
            <p className="mt-4 text-sm">
              Alla bör få känna friheten av att vara skuldfria.{" "}
            </p>
          </div>
          <div className="col-span-1 flex flex-col md:col-span-2">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/hands.webp"
                alt="Flowers"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[1]"
              />
            </div>
            <p className="mt-4 text-sm ">
              Varje dag hjälper vi folk att bli skuldfria.
            </p>
          </div>
        </div>
      </section>

      {/* Vi är här för att hjälpa dig */}
      <section className="mt-32 flex w-full  max-w-3xl flex-col items-center px-3 text-center sm:px-8 ">
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          Vi är här för att <br className="sm:hidden" />hjälpa dig
        </p>
        <h2 className="mt-8 text-xl font-medium">
          Att hantera skulder kan vara överväldigande.{" "}
          <span className="opacity-50">
            {" "}
            Vi erbjuder vägledning så att du får kontroll över
            ekonomiska situation. Det är viktigt att ta tag i din skuld så snart som möjligt för att undvika ytterligare avgifter och kostnader.
          </span>
        </h2>
        {/* Button */}
        <div className="mt-12 flex gap-4">
          <Link href={""}>
            <button className="text-md group rounded-md bg-black px-4 py-3 font-medium text-white hover:bg-zinc-700">
              Gå till betalning {" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
          <Link href={""}>
            <button className="text-md group font-medium rounded-md bg-zinc-100 px-4 py-3 text-black hover:bg-zinc-200">
              Kontakta oss{" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Images */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 sm:px-8 ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-6">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/hiking.webp"
                alt="Hands"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                priority
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Så betalar du */}
      <section id="betala" className="mt-32 scroll-mt-56 flex w-full max-w-6xl flex-col items-center px-3 text-center sm:px-8 ">
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          Så betalar du
        </p>
        <div className="m-16 w-full grid grid-cols-1 gap-16 text-left md:grid-cols-3">
          <div>
            <p className="text-xl font-medium">1. Logga in på Mina Sidor</p>
            <p className="mt-4 opacity-50">
              Där ser du din aktuella skuld. Du kan också använda bankgiro från brevet du fått.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">2. Välj betalningsmetod</p>
            <p className="mt-4 opacity-50">
              Betala genom bankgiro eller Swish. Kontakta kundtjänst för autogiro.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">3. Slutför betalning</p>
            <p className="mt-4 opacity-50">
              Betalningen registeras inom 1-2 bankdagar. Du kan se ditt nya saldo på Mina Sidor.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={""}>
            <button className="text-md group rounded-md bg-black px-4 py-3 font-medium text-white hover:bg-zinc-700">
              Gå till betalning {" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
          <Link href={""}>
            <button className="text-md group font-medium rounded-md bg-zinc-100 px-4 py-3 text-black hover:bg-zinc-200">
              Kontakta oss{" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>

        {/* <p className="mt-8"><span className="opacity-50">Behöver du hjälp att betala? </span>
          <Link href={"/"} className="underline">Tveka inte att kontakta oss</Link></p> */}
      </section>

      {/* Varför viktigt att betala */}
      <section id="varfor" className="mt-40 scroll-mt-56 flex w-full max-w-6xl flex-col items-center px-3 text-center sm:px-8 ">
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          Varför det är viktigt att betala
        </h2>
        <div className="mt-20 grid grid-cols-1 grid-rows-2 gap-16 text-left md:grid-cols-3">
          <div>
            <h3 className="text-xl font-medium">Förbättra din kreditvärdighet</h3>
            <p className="mt-4 opacity-50">
              Genom att betala din skuld kan du förbättra din kreditvärdighet, vilket kan göra det lättare att få lån och krediter i framtiden.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Undvik ytterligare kostnader</h3>
            <p className="mt-4 opacity-50">
              Obetalda skulder kan leda till extra avgifter och räntekostnader, vilket gör att din totala skuld ökar. Dröjsmålsränta beräknas på skulden kontinuerligt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Minska stress och oro</h3>
            <p className="mt-4 opacity-50">
              Att ha obetalda skulder kan skapa mycket stress och oro. Genom att betala din skuld kan du få sinnesro och fokusera på andra viktiga saker i ditt liv.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Bättre kontroll över din ekonomi</h3>
            <p className="mt-4 opacity-50">
              Genom att betala dina skulder får du bättre kontroll över din ekonomiska situation och kan planera för framtiden på ett mer stabilt sätt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Undvik rättsliga åtgärder</h3>
            <p className="mt-4 opacity-50">
              Om skulden inte betalas kan Payable vidta rättsliga åtgärder, vilket kan leda till ytterligare kostnader och problem.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Förbättra dina relationer</h3>
            <p className="mt-4 opacity-50">
              Genom att betala dina skulder i tid kan du undvika konflikter med långivare och upprätthålla förtroendet med vänner och familj som kanske har lånat dig pengar.
            </p>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full  max-w-6xl flex-col items-center px-3 sm:px-8 ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-2">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/happy-woman.webp"
                alt="Flowers"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                priority
                className="scale-x-[1]"
              />
            </div>
            {/* <p className="mt-4 text-sm ">30+ år erfarenhet av att hjälpa skuldsatta</p> */}
          </div>
          <div className="hidden flex-col sm:col-span-1 md:col-span-4 md:flex">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/postkontoret.webp"
                alt="Hands"
                layout="fill"
                objectFit="cover"
                priority
                className=""
              />
            </div>
            <p className="mt-4 text-sm">
              30+ år erfarenhet av att hjälpa skuldsatta bli fria.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-32 flex w-full max-w-4xl flex-col items-center px-3 sm:px-8 ">
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          Vanliga frågor
        </h2>
        <Accordion className="w-full mt-12" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Varför skickar Payable kravbrev på min kredit?</AccordionTrigger>
            <AccordionContent>
              Payable AB är ett bolag som köper större förfallna portföljer med förfallna och uppsagda krediter från banker och finansbolag. Det innebär att Payable AB äger den uppsagda krediten och att ni framöver ska ha en dialog med vår kundtjänst för att diskutera hur den ska betalas.
              <br /> <br />
              Första steget är att vi skickar ett brev till låntagaren och informerar om att Payable har övertagit krediten. Informationsbrevet innehåller information om den aktuella skulden om kapital, ränta och avgifter samt information om hur du betalar skulden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Varför kontaktar ni mig?</AccordionTrigger>
            <AccordionContent>
              Payable kontaktar dig för att informera om en obetald skuld. Om du inte har möjlighet att betala hela skulden, kontakta oss så kan vi tillsammans titta på alternativa lösningar.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Vad händer om jag inte betalar min skuld?</AccordionTrigger>
            <AccordionContent>
              Om du inte betalar din skuld kan det resultera i ytterligare kravåtgärder, inklusive rättsliga åtgärder (ansökan om betalningsföreläggande via Kronofogden) vilket kan resultera i en betalningsanmärkning. En betalningsanmärkning finns registrerad i tre år. Dessutom tillkommer ytterligare avgifter och dröjsmålsränta. För att undvika det så kontakta oss för att se om vi tillsammans kan hitta en lösning.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Hur ser kravprocessen ut?</AccordionTrigger>
            <AccordionContent>
              Inkassokrav är första steget i inkassoprocessen. Enligt lag har inkassobolaget rätt att ta ut en avgift om 180 kr. 12 dagar efter att inkassokravet har skickats har Payable möjlighet att skicka en ansökan om betalningsföreläggande via Kronofogden. Efter att du har mottagit betalningsföreläggandet (ett brev från Kronofogden) och det har förfallit till betalning får du en betalningsanmärkning. Payable kan sedan begära utmätning. Det innebär att Kronofogden gör en tillgångsundersökning hos dig och kontaktar eventuellt även din arbetsgivare för att se om det finns tillgångar eller lön som kan betala skulden.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Kan jag förhandla om en betalningsplan?</AccordionTrigger>
            <AccordionContent>
              Ja, vi är öppna för att diskutera alternativa betalningsplaner som passar din ekonomiska situation. Kontakta oss för att diskutera dina möjligheter.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Hur påverkar detta min kreditvärdighet?</AccordionTrigger>
            <AccordionContent>
              Betalningsanmärkningar syns på kreditupplysningar. Det kan innebära att det blir svårt att ta nya krediter, lån, kreditkort, få en hyreslägenhet, bostadskontrakt osv. En betalningsanmärkning försvinner först efter tre år. Det är viktigt att hantera skulder i tid för att undvika negativa konsekvenser för din kreditvärdighet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Kan jag få en avbetalningsplan?</AccordionTrigger>
            <AccordionContent>
              Ja, vi kan överväga att erbjuda en avbetalningsplan baserad på din ekonomiska situation. Kontakta oss för att diskutera alternativen.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Kan jag få en förklaring på den aktuella skulden?</AccordionTrigger>
            <AccordionContent>
              Självklart, vi kan tillhandahålla en detaljerad förklaring av skulden och eventuella tillkommande avgifter. Kontakta oss för mer information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Vad är mina rättigheter som gäldenär?</AccordionTrigger>
            <AccordionContent>
              Som gäldenär har du rättigheter enligt lag. Det inkluderar rätten till tydlig information om skulden och begära bevis för skulden. Du har även rätt att ärendet hanteras enligt god inkassosed, vilket Payable alltid följer. Kontakta oss om du har frågor om dina rättigheter.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Hur kan jag kontakta er för att lösa min skuld</AccordionTrigger>
            <AccordionContent>
              Du kan kontakta oss via telefon eller e-post för att diskutera din skuld och eventuella betalningsarrangemang. Kontakta oss.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Hur kan jag kontakta er för att lösa min skuld</AccordionTrigger>
            <AccordionContent>
              Payable anser det viktigt att hantera ärenden på ett rättvist, korrekt och respektfullt sätt och enligt de lagar och regler som gäller för inkassobolag. Om du ändå inte skulle känna dig nöjd med vår hantering, vänligen kontakta vår kundtjänst så snart som möjligt så att vi kan försöka lösa eventuella problem. En mer utförlig beskrivning av hur du kan framföra klagomål finner du på Kundklagomål.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>


      {/* Om oss */}
      <section id="oss" className="m-32 flex w-full  max-w-3xl flex-col items-center px-3 text-center sm:px-8 ">
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          Om oss <br className="sm:hidden" />
        </p>
        <h2 className="mt-8 text-xl font-medium">
          Payable AB är specialiserade på att köpa och hantera förfallna konsumentkrediter. Vi har lång erfarenhet av att hitta lösningar för skuldsatta genom vägledning och betalningsuppgörelser.

          {" "}
          <span className="opacity-50">
            {" "}

          </span>
        </h2>
      </section>

      <Footer />
    </main>
  );
}
