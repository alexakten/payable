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
} from "@/components/ui/accordion";

import { getDictionary } from "./dictionaries";

type Locale = "en" | "se";

interface Params {
  params: {
    lang: Locale;
  };
}

export default async function Home({ params: { lang } }: Params) {
  const dict = await getDictionary(lang);

  return (
    <main className="px- flex flex-col items-center bg-white tracking-tight text-black">
      <Navbar pageType="customer" lang={lang} />

      {/* Hero Section */}
      <section className="max-w-8xl mt-36 flex w-full flex-col items-center justify-center px-3 text-center sm:px-8 md:mt-40">
        {/* Notification Bar */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-sm">
          <div className="flex">
            <p>
              <span className="opacity-50">{dict.notification.message}</span>
            </p>
            <Link href="https://portal.payable.se/login.php"> 
              <button className="group ml-2 border-l pl-2 font-normal">
                {dict.notification.ctaLogin}{" "}
                <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* H1 */}
        <h1 className="mt-6 max-w-5xl text-[clamp(44px,6vw,72px)] font-[400] leading-[1.05] tracking-tighter">
          {dict.hero.title.split(" ").slice(0, 3).join(" ")} <br />
          <span className="text-blue-600">
            {dict.hero.title.split(" ").slice(3).join(" ")}
          </span>
        </h1>

        {/* Subtext */}
        <h3 className="mt-8 max-w-sm text-lg tracking-tight opacity-100 md:max-w-md md:text-xl">
          {dict.hero.description}
        </h3>

        {/* Button */}
        <div className="mt-8 flex gap-4">
          <Link href="https://portal.payable.se/login.php">
            <button className="text-md group rounded-md bg-black px-4 py-3 font-normal text-white hover:bg-zinc-700">
              {dict.hero.ctaPayment}{" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
          <Link href={`/${lang}/contact`}>
            <button className="text-md group rounded-md bg-zinc-100 px-4 py-3 font-normal text-black hover:bg-zinc-200">
              {dict.hero.ctaContact}{" "}
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
                src="/images/smiling-woman.webp"
                alt={dict.imagesSection.image1Alt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
          <div className="col-span-1 hidden flex-col md:col-span-2 md:flex">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/working.webp"
                alt={dict.imagesSection.image2Alt}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="mt-32 flex w-full max-w-3xl flex-col items-center px-3 text-center sm:px-8">
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.helpSection.heading}
        </p>
        <h2 className="mt-8 max-w-lg text-xl font-medium">
          {dict.helpSection.description}
        </h2>

        <div className="mt-12 flex gap-4">
          <Link href="https://portal.payable.se/login.php">
            <button className="text-md group rounded-md bg-black px-4 py-3 font-normal text-white hover:bg-zinc-700">
              {dict.helpSection.ctaPayment}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
          <Link href={`/${lang}/kontakt`}>
            <button className="text-md group rounded-md bg-zinc-100 px-4 py-3 font-normal text-black hover:bg-zinc-200">
              {dict.helpSection.ctaContact}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center px-3 sm:px-8">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-6">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/hiking.webp"
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

      {/* How to Pay Section */}
      <section
        id="pay"
        className="mt-32 flex w-full max-w-6xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8"
      >
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.howToPay.heading}
        </p>
        <div className="m-16 grid w-full grid-cols-1 gap-16 text-left md:grid-cols-3">
          {dict.howToPay.steps.map((step: any, index: any) => (
            <div key={index}>
              <p className="text-xl font-medium">{step.title}</p>
              <p className="mt-4 opacity-50">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <Link href="https://portal.payable.se/login.php">
            <button className="text-md group rounded-md bg-black px-4 py-3 font-normal text-white hover:bg-zinc-700">
              {dict.helpSection.ctaPayment}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
          <Link href={`/${lang}/kontakt`}>
            <button className="text-md group rounded-md bg-zinc-100 px-4 py-3 font-normal text-black hover:bg-zinc-200">
              {dict.helpSection.ctaContact}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Why Pay Section */}
      <section
        id="why-pay"
        className="mt-40 flex w-full max-w-6xl scroll-mt-56 flex-col items-center px-3 text-center sm:px-8"
      >
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.whyPay.heading}
        </h2>
        <div className="mt-20 grid grid-cols-1 grid-rows-2 gap-16 text-left md:grid-cols-3">
          {dict.whyPay.points.map((point: any, index: any) => (
            <div key={index}>
              <h3 className="text-xl font-medium">{point.title}</h3>
              <p className="mt-4 opacity-50">{point.description}</p>
            </div>
          ))}
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mt-32 flex w-full max-w-4xl scroll-mt-56 flex-col items-center px-3 sm:px-8"
      >
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.faq.heading}
        </h2>
        <Accordion className="mt-12 w-full text-left" type="single" collapsible>
          {dict.faq.items.map((item: any, index: any) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* About Us Section */}
      <section
        id="about-us"
        className="m-32 flex w-full max-w-4xl flex-col items-center px-3 text-center sm:px-8"
      >
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.aboutUs.heading}
        </p>
        <h2 className="mt-8 text-xl font-medium">{dict.aboutUs.description}</h2>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
