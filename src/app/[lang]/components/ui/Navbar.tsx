import Link from "next/link";
import { getDictionary } from "../../dictionaries";
import LanguageSwitcher from "./LanguageSwitcher"; // Import the new LanguageSwitcher component

type Locale = "en" | "sv"; // Correct type for language

interface Params {
  params: {
    lang: Locale; // Ensuring the correct type
  };
}

export default async function Navbar({
  pageType,
  lang,
}: {
  pageType: string;
  lang: Locale; // Changing to correct type
}) {
  const dict = await getDictionary(lang); // Fetch the dictionary based on the selected language

  return (
    <nav className="fixed top-0 z-50 grid w-full grid-cols-2 items-center justify-between border-b border-zinc-100 bg-white px-3 pb-3 pt-4 sm:px-8 sm:pt-3 lg:grid-cols-3">
      {/* Logo */}
      <div className="col-span-1 flex items-center justify-start">
        <Link href={`/${lang}`} className="flex items-center gap-1">
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.51294 12.4289L0.992188 13.8841L10.9392 19.6266L25.0023 11.508L22.4815 10.0527L10.9392 16.7161L3.51294 12.4289Z"
              fill="black"
            />
            <rect
              width="11.4856"
              height="16.2382"
              transform="matrix(0.866044 0.499967 -0.866044 0.499967 15.0508 0.369141)"
              fill="#285FF5"
            />
          </svg>

          <p className="relative text-[20px] font-[450] tracking-tighter">
            Pay<span className="">able</span>
          </p>
        </Link>
      </div>
      {/* Middle Links */}
      <div className="font- col-span-1 hidden items-center justify-center gap-4 whitespace-nowrap lg:flex ">
        {pageType === "customer" ? (
          <>
            <Link href={`/${lang}/#about-us`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.aboutUs}
              </button>
            </Link>
            <Link href={`/${lang}/#pay`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.howToPay}
              </button>
            </Link>
            <Link href={`/${lang}/#faq`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.faq}
              </button>
            </Link>
            <Link href={`/${lang}/creditors`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.creditGivers}
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href={`/${lang}/creditors#about-us`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.aboutUs}
              </button>
            </Link>
            <Link href={`/${lang}/creditors#services`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.ourServices}
              </button>
            </Link>
            <Link href={`/${lang}/creditors#benefits`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.benefitsSell}
              </button>
            </Link>
            <Link href={`/${lang}/creditors#process`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.process}
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Right Buttons */}
      {pageType === "customer" ? (
        <div className="col-span-1 flex items-center justify-end gap-4 whitespace-nowrap">
          <LanguageSwitcher lang={lang} />
          <Link href={`/${lang}/contact`} className="hidden lg:block">
            <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
              {dict.navbar.contactUs}
            </button>
          </Link>
          <Link href={`/${lang}/creditors`} className="lg:hidden">
            <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
              {dict.navbar.creditGivers}
            </button>
          </Link>
          <Link href={`/${lang}/login`}>
            <button className="group rounded-md bg-black px-3 py-2 text-sm font-normal text-white hover:bg-zinc-700">
              {dict.navbar.myPages}
            </button>
          </Link>
        </div>
      ) : (
        <div className="col-span-1 flex items-center justify-end gap-4 whitespace-nowrap">
          <LanguageSwitcher lang={lang} />
          <Link href={"mailto:info@payable.se"}>
            <button className="group rounded-md bg-black px-3 py-2 text-sm font-normal text-white hover:bg-zinc-700">
              {dict.navbar.contactUs}
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
