import { getDictionary } from "../dictionaries";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

type Locale = "en" | "se";

interface Params {
  params: {
    lang: Locale;
  };
}

export default async function CookiePolicy({ params: { lang } }: Params) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white text-black">
      <Navbar pageType="customer" lang={lang} />
      <section className="flex w-full max-w-4xl scroll-mt-56 flex-col items-center px-3 py-24 sm:px-8">
        <h2 className="max-w-2xl text-center text-4xl font-medium tracking-tighter md:text-5xl">
          {dict.cookiePolicy.heading}
        </h2>
        {dict.cookiePolicy.updated ? (
          <p className="mt-4 text-sm opacity-60">{dict.cookiePolicy.updated}</p>
        ) : null}
        <div className="mt-12 w-full text-left">
          {dict.cookiePolicy.sections.map((section: any, index: number) => (
            <div key={index}>
              <h3 className="mt-12 text-xl font-medium">{section.title}</h3>
              <div className="mt-4 space-y-2">
                {section.content.split("\n").map((line: string, i: number) =>
                  line.trim() === "" ? (
                    <div key={i} className="h-2" />
                  ) : (
                    <p key={i}>{line}</p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer lang={lang} />
    </main>
  );
}
