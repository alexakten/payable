import { getDictionary } from "../dictionaries";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import {
  Handshake,
  ArrowBendDoubleUpRight,
  Briefcase,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

type Locale = "en" | "sv";

interface Params {
  params: {
    lang: Locale;
  };
}

export default async function Creditors({ params: { lang } }: Params) {
  const dict = await getDictionary(lang);

  return (
    <main className="px- flex flex-col items-center bg-white tracking-tight text-black">
      <Navbar pageType="investor" lang={lang} />

      {/* Hero Section */}
      <section className="max-w-8xl mt-36 flex w-full flex-col items-center justify-center px-3 text-center sm:px-8 md:mt-40">
        <h1 className="mt-6 max-w-5xl text-[clamp(44px,6vw,72px)] font-[460] leading-[1.05] tracking-tighter">
          {dict.lenderPage.hero.title.split(" ").slice(0, 3).join(" ")} <br />
          <span className="text-blue-600">
            {dict.lenderPage.hero.title.split(" ").slice(3).join(" ")}
          </span>
        </h1>
        <h3 className="mt-8 max-w-sm text-lg tracking-tight opacity-100 md:max-w-lg md:text-xl">
          {dict.lenderPage.hero.subtext}
        </h3>
        <div className="mt-8 flex gap-4">
          <Link href="mailto:info@payable.se">
            <button className="text-md group rounded-md bg-black px-4 py-3 font-normal text-white hover:bg-zinc-700">
              {dict.lenderPage.hero.ctaContact}{" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full  max-w-6xl flex-col items-center px-3 sm:px-8">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="flex-col sm:col-span-1 md:col-span-4 md:flex">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/ipad.webp"
                alt={dict.imagesSection.image1Alt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <p className="mt-4 text-sm">{dict.imagesSection.image1Text}</p>
          </div>
          <div className="col-span-1 hidden flex-col md:col-span-2 md:flex">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/gamlastan.webp"
                alt={dict.imagesSection.image2Alt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <p className="mt-4 text-sm">{dict.imagesSection.image2Text}</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="mt-32 flex w-full max-w-6xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8"
      >
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.lenderPage.services.heading}
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-16 text-left md:grid-cols-3">
          {dict.lenderPage.services.items.map((service: any, index: any) => (
            <div key={index}>
              {index === 0 && <Briefcase size={32} />}
              {index === 1 && <ArrowBendDoubleUpRight size={32} />}
              {index === 2 && <Handshake size={32} />}
              <h3 className="mt-4 text-xl font-medium">{service.title}</h3>
              <p className="mt-4 opacity-50">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Big Image Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 sm:px-8">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-6">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/whiteboard.webp"
                alt={dict.finalImageSection.image3Alt}
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section
        id="benefits"
        className="mt-32 flex w-full max-w-6xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8"
      >
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.lenderPage.advantages.heading}
        </h2>
        <div className="mt-20 grid grid-cols-1 gap-16 text-left md:grid-cols-3">
          {dict.lenderPage.advantages.items.map(
            (advantage: any, index: any) => (
              <div key={index}>
                <h3 className="text-xl font-medium">{advantage.title}</h3>
                <p className="mt-4 opacity-50">{advantage.description}</p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 sm:px-8">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-2">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/happy-woman.webp"
                alt={dict.experienceSection.image1Alt}
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                priority
              />
            </div>
            <p className="mt-4 text-sm">{dict.experienceSection.image1Text}</p>
          </div>
          <div className="hidden flex-col sm:col-span-1 md:col-span-4 md:flex">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/postkontoret.webp"
                alt={dict.experienceSection.image2Alt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <p className="mt-4 text-sm">{dict.experienceSection.image2Text}</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="mt-32 flex w-full max-w-6xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8"
      >
        <h2 className="text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.lenderPage.process.heading}
        </h2>
        <div className="m-16 grid w-full grid-cols-1 grid-rows-2 gap-16 text-left md:grid-cols-3">
          {dict.lenderPage.process.steps.map((step: any, index: any) => (
            <div key={index}>
              <p className="text-xl font-medium">{step.title}</p>
              <p className="mt-4 opacity-50">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href="mailto:info@payable.se">
            <button className="text-md group rounded-md bg-black px-4 py-3 font-normal text-white hover:bg-zinc-700">
              {dict.lenderPage.process.ctaContact}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>

        <p className="mt-8 max-w-2xl">
          <span className="opacity-50">
            {dict.lenderPage.process.priceIndication}
          </span>{" "}
          <Link href="mailto:info@payable.se" className="underline">
            {dict.lenderPage.process.ctaContact}
          </Link>
        </p>
      </section>

      {/* Big Image Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 sm:px-8">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-6">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/postkontoret.webp"
                alt={dict.finalImageSection.image3Alt}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="about-us"
        className="m-32 flex w-full max-w-4xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8"
      >
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.lenderPage.experienceSection.heading}
        </h2>
        <h3 className="mt-8 text-xl font-medium">
          {dict.lenderPage.experienceSection.description}
        </h3>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
