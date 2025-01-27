import { getDictionary } from "../dictionaries";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

type Locale = "en" | "se";

interface Params {
  params: {
    lang: Locale;
  };
}

export default async function Complaints({ params: { lang } }: Params) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col items-center">
      <Navbar pageType="customer" lang={lang} />
      <section className="m-32 flex w-full max-w-4xl scroll-mt-56 flex-col items-center px-3 sm:px-8">
        <h2 className="max-w-2xl text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.complaintsPolicy.heading}
        </h2>
        <div className="mt-12 w-full text-left">
          {dict.complaintsPolicy.sections.map((section: any, index: any) => (
            <div key={index}>
              <h3 className="mt-12 text-xl font-medium">{section.title}</h3>
              <p className="mt-4">{section.content}</p>

              {section.subsections?.map((subsection: any, subIndex: any) => (
                <div key={subIndex}>
                  <h4 className="mt-8 text-lg font-medium">
                    {subsection.subTitle}
                  </h4>
                  <p className="mt-4">{subsection.content}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <Footer lang={lang} />
    </main>
  );
}
