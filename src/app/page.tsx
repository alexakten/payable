import Navbar from "./components/ui/Navbar";
import StepCard from "./components/ui/StepCard";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import MessageCard from "./components/ui/MessageBox";
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "./components/ui/ButtonSecondary";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white px-3 tracking-tight text-black sm:px-8">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-36 md:mt-52 flex w-full max-w-8xl flex-col items-center justify-center text-center">
        {/* Notification Bar */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-sm">
          <div className="flex">
            <p>
              <span className="opacity-50">Har du fått brev från oss?</span>
            </p>
            <Link href={""}>
              <button className="group ml-2 border-l pl-2 font-medium">
                Vi hjälper dig{" "}
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
        <h3 className="mt-8 max-w-sm md:max-w-md text-lg tracking-tight opacity-100 md:text-xl">
          Payable ger dig stöd och vägledning så att du kan ta kontroll över
          dina skulder.
        </h3>

        {/* Button */}
        <div className="mt-8 flex gap-4">
          <ButtonPrimary />
          <ButtonSecondary />
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="hidden md:flex sm:col-span-1 flex-col md:col-span-4">
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
            <p className="mt-4 text-sm">Alla ska få känna friheten av att vara skuldfria. </p>
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

      {/* Hjälpa dig Section */}
      <section className="mt-32 flex w-full max-w-2xl flex-col items-center text-center ">
        <p className="text-4xl md:text-5xl font-medium tracking-tighter">
          Vi är här för att hjälpa dig
        </p>
        <h2 className="mt-8 text-xl font-medium">
          Att hantera skulder kan vara överväldigande{" "}
          <span className="opacity-50">
            {" "}
            — därför erbjuder vi kostnadsfri vägledning så att får kontroll över
            ekonomiska situation.
          </span>
        </h2>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center ">
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

      {/* Kravprocess Section */}
      <section className="m-32 flex w-full max-w-6xl flex-col items-center text-center ">
        <p className="text-4xl md:text-5xl font-medium tracking-tighter">
          Så här går betalningen till
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-16 text-left">
          <div>
            <p className="text-xl font-medium">1. Meddelande om skuld</p>
            <p className="mt-4 opacity-50">
              Du får ett brev från oss som innehåller information om den
              aktuella skulden
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">2. Dialog och förhandling</p>
            <p className="mt-4 opacity-50">
              Du får ett brev från oss som innehåller information om den
              aktuella skulden
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">3. Inkassokrav</p>
            <p className="mt-4 opacity-50">
              Du får ett brev från oss som innehåller information om den
              aktuella skulden
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">4. Rättsliga åtgärder</p>
            <p className="mt-4 opacity-50">
              Du får ett brev från oss som innehåller information om den
              aktuella skulden
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">5. Om betalning uteblir</p>
            <p className="mt-4 opacity-50">
              Du får ett brev från oss som innehåller information om den
              aktuella skulden
            </p>
          </div>
          <div>
            <p className="text-xl font-medium">6. Betalning och avslutning</p>
            <p className="mt-4 opacity-50">
              Du får ett brev från oss som innehåller information om den
              aktuella skulden
            </p>
          </div>
        </div>
        {/* <p className="mt-8"><span className="opacity-50">Behöver du hjälp att betala? </span>
          <Link href={"/"} className="underline">Tveka inte att kontakta oss</Link></p> */}
      </section>
    </main>
  );
}
