import Navbar from "../components/ui/Navbar";
import StepCard from "../components/ui/StepCard";
import ButtonPrimary from "../components/ui/ButtonPrimary";
import MessageCard from "../components/ui/MessageBox";
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "../components/ui/ButtonSecondary";
import Footer from "../components/ui/Footer";
import {
  Handshake,
  ArrowBendDoubleUpRight,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";

export default function Kreditgivare() {
  return (
    <main className="px- flex flex-col items-center bg-white tracking-tight text-black">
      <Navbar pageType="investor" />

      {/* Hero Section */}
      <section className="max-w-8xl mt-36 flex w-full flex-col items-center justify-center px-3 text-center sm:px-8 md:mt-40">
        {/* Notification Bar */}
        {/* <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-sm">
          <div className="flex">
            <p>
              <span className="opacity-50">Vill du investera?</span>
            </p>
            <Link href={""}>
              <button className="group ml-2 border-l pl-2 font-normal">
                Kontaka oss{" "}
                <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </button>
            </Link>
          </div>
        </div> */}

        {/* H1 */}
        <h1 className="mt-6 max-w-5xl text-[clamp(44px,6vw,72px)] font-[460] leading-[1.05] tracking-tighter">
          Erfaren partner för <br className="hidden sm:block" />
          <span className="text-blue-600"> Non-Performing Loans</span>
        </h1>

        {/* Subtext */}
        <h3 className="mt-8 max-w-sm text-lg tracking-tight opacity-100 md:max-w-lg md:text-xl">
          Payable är specialister på att köpa förfallna konsumentkrediter från
          banker och finansbolag.
        </h3>

        {/* Button */}
        <div className="mt-8 flex gap-4">
          <Link href={"mailto:info@payable.se"}>
            <button className="text-md group rounded-md bg-black px-4 py-3 font-normal text-white hover:bg-zinc-700">
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
          <div className="flex-col sm:col-span-1 md:col-span-4 md:flex">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/ipad.webp"
                alt="Hands"
                layout="fill"
                objectFit="cover"
                priority
                className=""
              />
            </div>
            {/* <p className="mt-4 text-sm">
              Alla ska få känna friheten av att vara skuldfria.{" "}
            </p> */}
          </div>
          <div className="col-span-1 flex flex-col md:col-span-2">
            <div className="relative z-10 hidden h-[32rem] overflow-hidden rounded-xl bg-zinc-100 md:flex">
              <Image
                src="/images/gamlastan.webp"
                alt="Flowers"
                layout="fill"
                objectFit="cover"
                priority
                className="saturate-[0.93]"
              />
            </div>
            {/* <p className="mt-4 text-sm ">
              Varje dag hjälper vi folk att bli skuldfria.
            </p> */}
          </div>
        </div>
      </section>

      {/* Tjänster Section */}
      <section
        id="tjanster"
        className="mt-32 flex w-full max-w-6xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8 "
      >
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          Våra tjänster
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-16 text-left md:grid-cols-3">
          <div>
            <Briefcase size={32} />
            <h3 className="mt-4 text-xl font-medium">One-Off</h3>
            <p className="mt-4 opacity-50">
              One-off-transaktion innebär att Payable köper en befintlig
              portfölj med nödlidande problemkrediter. Priset baseras på en
              analys av portföljens framtida kassaflöde. Kreditgivaren slipper
              framtida hantering, stärker finansiella nyckeltal och för betalt
              vid överlämnandet av portföljen.
            </p>
          </div>
          <div>
            <ArrowBendDoubleUpRight size={32} />
            <h3 className="mt-4 text-xl font-medium">Forward Flow</h3>
            <p className="mt-4 opacity-50">
              Forward flow-avtal innebär att ett finansbolag kan ingå ett avtal
              om att kontinuerligt sälja förfallna och uppsagda kreditavtal till
              ett förutbestämt pris. Villkoren för varje överföring, inklusive
              pris och volym, är definerade i avtalet.
            </p>
          </div>
          <div>
            <Handshake size={32} />
            <h3 className="mt-4 text-xl font-medium">Joint Ventures</h3>
            <p className="mt-4 opacity-50">
              Payable har ett brett kontaktnät med potentialla partners och lång
              erfarenhet av att skapa olika typer av skräddarsydda lösningar.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 sm:px-8 ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-6">
            <div className="relative h-[42rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/whiteboard.webp"
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

      {/* Fördelar Section */}
      <section
        id="fordelar"
        className="mt-32 flex w-full max-w-6xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8 "
      >
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          Fördelar med att sälja{" "}
          <span className="text-blue-600">nödlidande problemkrediter</span>
        </h2>
        <div className="mt-20 grid grid-cols-1 grid-rows-2 gap-16 text-left md:grid-cols-3">
          <div>
            <h3 className="text-xl font-medium">Backstop regelverket</h3>
            <p className="mt-4 opacity-50">
              EU:s nya regelverk innebär ökad press på finansinstitut att
              hantera Non-Performing Loans (NPL) mer effektivt.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Starkare balansräkning</h3>
            <p className="mt-4 opacity-50">
              En starkare balansräkning med en lägre andel problemkrediter kan
              öka förtroendet från intressenter.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Proaktiv riskhantering</h3>
            <p className="mt-4 opacity-50">
              Genom proaktiv riskhantering ökar marknadens förtroende.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Administrativa kostnader</h3>
            <p className="mt-4 opacity-50">
              Hanteringen av nödlidande krediter kräver resurser. Genom
              försäljning minskas dessa kostnader.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Förbättrat kreditbetyg</h3>
            <p className="mt-4 opacity-50">
              Lägre andel NPL i balansräkningen kan leda till förbättrade
              kreditbetyg från rating-institut.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Resultat och likviditet</h3>
            <p className="mt-4 opacity-50">
              En försäljning frigör kapital och förbättrar likviditeten.
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
                src="/images/stockholm.webp"
                alt="Flowers"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[1]"
              />
            </div>
            {/* <p className="mt-4 text-sm ">Kontor i Stockholm.</p> */}
          </div>
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
            {/* <p className="mt-4 text-sm">
              Alla ska få känna friheten av att vara skuldfria.
            </p> */}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="mt-32 flex w-full max-w-6xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8 "
      >
        <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
          Försäljningsprocess
        </h2>
        <div className="m-16 grid w-full grid-cols-1 grid-rows-2 gap-16 text-left md:grid-cols-3">
          <div>
            <p className="text-xl font-medium">1. NDA</p>
            <p className="mt-4 opacity-50">
              Parterna undertecknar en Non-Disclosure Agreement (NDA).{" "}
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">2. Analys</p>
            <p className="mt-4 opacity-50">
              En analys genomförs av portföljen med hjälp av sofistikerade
              värderingsmodeller.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">3. Anbud</p>
            <p className="mt-4 opacity-50">
              Vi lämnar anbud med priset uttryckt som en procent av portföljens
              utestående kapital.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">4. Due Diligence</p>
            <p className="mt-4 opacity-50">
              Vid accept av anbud genomförs en due diligence.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">5. Avtal</p>
            <p className="mt-4 opacity-50">
              Vi tecknar avtal om aktuell försäljning.
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">6. Överlåtelse och betalning</p>
            <p className="mt-4 opacity-50">
              Krediterna överförs till Payable och ni får betalt.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={"mailto:info@payable.se"}>
            <button className="text-md group rounded-md bg-black px-4 py-3 font-normal text-white hover:bg-zinc-700">
              Kontakta oss{" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>

        <p className="mt-8 max-w-2xl">
          <span className="opacity-50">
            Vill ni snabbt och enkelt utvärdera vad en försäljning skulle
            innebära för er? För att lämna en ej-bindande prisindikation behöver
            vi endast ett fåtal uppgifter.{" "}
          </span>
          <Link href={"mailto:info@payable.se"} className="underline">
            Be oss om en prisindikation.
          </Link>
        </p>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 sm:px-8 ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-6">
            <div className="relative h-[42rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/postkontoret.webp"
                alt="Stockholm"
                layout="fill"
                objectFit="cover"
                priority
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* 30 år Section */}
      <section
        id="oss"
        className="m-32 flex w-full max-w-3xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8 "
      >
        <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
          <span className="text-blue-600">30+ år erfarenhet</span> av köp av
          förfallna fordringar.
          <br className="sm:hidden" />
        </h2>
        <h3 className="mt-8 text-xl font-medium">
          Payable AB är specialiserade på att köpa och hantera förfallna
          konsumentkrediter. Vi har lång erfarenhet av att hitta lösningar för
          skuldsatta genom vägledning och betalningsuppgörelser.{" "}
          <span className="opacity-50"> </span>
        </h3>
      </section>

      <Footer />
    </main>
  );
}
