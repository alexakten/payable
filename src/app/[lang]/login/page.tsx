import { getDictionary } from "../dictionaries";

import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import LoginModal from "../components/ui/LoginModal";
type Locale = "en" | "se";

interface Params {
  params: {
    lang: Locale;
  };
}

export default async function Login({ params: { lang } }: Params) {
  const dict = await getDictionary(lang);
  return (
    <main className="px- flex flex-col items-center bg-white tracking-tight text-black">
      <Navbar pageType="customer" lang={lang} />
      <section className="flex h-screen w-screen items-center justify-center">
        <LoginModal />
      </section>
      <Footer lang={lang} />
    </main>
  );
}
