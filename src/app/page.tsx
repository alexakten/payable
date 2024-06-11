import Navbar from "./components/ui/Navbar";
import StepCard from "./components/ui/StepCard";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import MessageCard from "./components/ui/MessageBox";
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "./components/ui/ButtonSecondary";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <main className="px- flex flex-col items-center bg-white tracking-tight text-black">
      <Navbar />

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
          <ButtonPrimary />
          <ButtonSecondary />
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full  max-w-6xl flex-col items-center px-3 sm:px-8 ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="hidden flex-col sm:col-span-1 md:col-span-4 md:flex">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/hiking.webp"
                alt="Hands"
                layout="fill"
                objectFit="cover"
                priority
                className=""
              />
            </div>
            <p className="mt-4 text-sm">
              Alla ska få känna friheten av att vara skuldfria.{" "}
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

      {/* Hjälpa Section */}
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
          <ButtonPrimary />
          <ButtonSecondary />
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 sm:px-8 ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-6">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/water.webp"
                alt="Hands"
                layout="fill"
                objectFit="cover"
                priority
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Så betalar du Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 text-center sm:px-8 ">
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
          <ButtonPrimary />
          <ButtonSecondary />
        </div>

        {/* <p className="mt-8"><span className="opacity-50">Behöver du hjälp att betala? </span>
          <Link href={"/"} className="underline">Tveka inte att kontakta oss</Link></p> */}
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full  max-w-6xl flex-col items-center px-3 sm:px-8 ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-2">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/sunset.webp"
                alt="Flowers"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[1]"
              />
            </div>
            <p className="mt-4 text-sm ">Vi hjälper dig vid varje steg.</p>
          </div>
          <div className="hidden flex-col sm:col-span-1 md:col-span-4 md:flex">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/hugging.webp"
                alt="Hands"
                layout="fill"
                objectFit="cover"
                priority
                className=""
              />
            </div>
            <p className="mt-4 text-sm">
              Alla ska få känna friheten av att vara skuldfria.
            </p>
          </div>
        </div>
      </section>

      {/* Om oss Section */}
      <section className="m-32 flex w-full  max-w-3xl flex-col items-center px-3 text-center sm:px-8 ">
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          Det här är Payable <br className="sm:hidden" />
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
