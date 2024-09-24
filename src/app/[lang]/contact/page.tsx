import { getDictionary } from "../dictionaries";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Headset, EnvelopeSimple, User } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type Locale = "en" | "sv";

interface Params {
  params: {
    lang: Locale;
  };
}

export default async function Contact({ params: { lang } }: Params) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center bg-white tracking-tight text-black">
      <Navbar pageType="customer" lang={lang} />

      {/* Help Section */}
      <section className="mt-32 flex w-full flex-col items-center px-3 text-center sm:px-8 md:mt-52">
        <p className="text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.contact.heading}
        </p>
        <p className="mt-8 max-w-xl text-xl font-medium">
          {dict.contact.description}
        </p>
      </section>

      {/* Contact Information Section */}
      <section className="m-32 flex w-full max-w-6xl flex-col items-center px-3 text-center sm:px-8">
        <div className="grid grid-cols-1 grid-rows-2 gap-16 text-left md:grid-cols-3">
          {dict.contact.sections.map((section: any, index: any) => (
            <div key={index} className="flex flex-col">
              {index === 0 && <Headset size={32} />}
              {index === 1 && <EnvelopeSimple size={32} />}
              {index === 2 && <User size={32} />}
              <p className="mt-4 text-xl font-medium">{section.title}</p>
              {section.description && (
                <p className="mt-4 opacity-50">{section.description}</p>
              )}
              {index === 0 ? (
                <Link className="mt-4 hover:underline" href="tel:0850082400">
                  {section.linkText}
                </Link>
              ) : index === 1 ? (
                <Link
                  className="mt-4 hover:underline"
                  href="mailto:info@payable.se"
                >
                  {section.linkText}
                </Link>
              ) : (
                <Link className="mt-4 hover:underline" href="/login">
                  {section.linkText}
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
