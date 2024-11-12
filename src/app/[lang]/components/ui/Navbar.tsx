"use client";

import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

import { getDictionary } from "../../dictionaries";
import LanguageSwitcher from "./LanguageSwitcher"; // Import the new LanguageSwitcher component
import { useState, useEffect } from "react"; // Import useState and useEffect

type Locale = "en" | "sv"; // Correct type for language

interface Params {
  params: {
    lang: Locale; // Ensuring the correct type
  };
}

// Define the type for the dictionary
interface Dictionary {
  navbar: {
    aboutUs: string;
    howToPay: string;
    faq: string;
    creditGivers: string;
    ourServices: string;
    benefitsSell: string;
    process: string;
    contactUs: string;
    myPages: string;
  };
  // Add other sections if needed
}

export default function Navbar({
  pageType,
  lang,
}: {
  pageType: string;
  lang: Locale; // Changing to correct type
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const [dict, setDict] = useState<Dictionary | null>(null); // Use the Dictionary type

  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(lang);
      setDict(dictionary);
    };
    fetchDictionary();
  }, [lang]); // Dependency array to refetch when lang changes

  if (!dict) return null; // Render nothing or a loader until dict is fetched

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 grid w-full grid-cols-2 items-center justify-between border-b border-zinc-100 bg-white px-3 pb-3 pt-4 sm:px-8 sm:pt-3 lg:grid-cols-3">
      {/* Logo */}
      <div className="col-span-1 flex items-center justify-start">
        <Link
          href={`/${lang}`}
          className="flex items-center gap-1"
          onClick={handleLinkClick}
        >
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

      {/* Centered Menu Items for Desktop */}
      <div className="col-span-1 hidden justify-center whitespace-nowrap lg:flex">
        {pageType === "customer" ? (
          <>
            <Link
              href={`/${lang}/#about-us`}
              className="hidden lg:block"
              onClick={handleLinkClick}
            >
              <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
                {dict.navbar.aboutUs}
              </button>
            </Link>
            <Link
              href={`/${lang}/#pay`}
              className="hidden lg:block"
              onClick={handleLinkClick}
            >
              <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
                {dict.navbar.howToPay}
              </button>
            </Link>
            <Link
              href={`/${lang}/#faq`}
              className="hidden lg:block"
              onClick={handleLinkClick}
            >
              <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
                {dict.navbar.faq}
              </button>
            </Link>
            <Link
              href={`/${lang}/creditors`}
              className="hidden lg:block"
              onClick={handleLinkClick}
            >
              <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
                {dict.navbar.creditGivers}
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link
              href={`/${lang}/creditors#about-us`}
              className="hidden lg:block"
              onClick={handleLinkClick}
            >
              <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
                {dict.navbar.aboutUs}
              </button>
            </Link>
            <Link
              href={`/${lang}/creditors#services`}
              className="hidden lg:block"
              onClick={handleLinkClick}
            >
              <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
                {dict.navbar.ourServices}
              </button>
            </Link>
            <Link
              href={`/${lang}/creditors#benefits`}
              className="hidden lg:block"
              onClick={handleLinkClick}
            >
              <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
                {dict.navbar.benefitsSell}
              </button>
            </Link>
            <Link
              href={`/${lang}/creditors#process`}
              className="hidden lg:block"
              onClick={handleLinkClick}
            >
              <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
                {dict.navbar.process}
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Right Buttons for Desktop */}
      <div className="col-span-1 hidden items-center justify-end gap-4 whitespace-nowrap lg:flex">
        <div className="hidden sm:block">
          <LanguageSwitcher lang={lang} />
        </div>
        <Link href={`/${lang}/contact`} className="hidden lg:block">
          <button className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100">
            {dict.navbar.contactUs}
          </button>
        </Link>
        <Link href={`/${lang}/login`}>
          <button className="group rounded-md bg-black px-3 py-2 text-sm font-normal text-white hover:bg-zinc-700">
            {dict.navbar.myPages}
          </button>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="relative col-span-1 flex items-center justify-end lg:hidden">
        <Hamburger size={20} toggled={isMenuOpen} toggle={setIsMenuOpen} />
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-16 w-full border-b border-zinc-100 bg-white lg:hidden">
          <div className="flex flex-col items-center gap-4 p-4">
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
            <Link href={`/${lang}/contact`}>
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                {dict.navbar.contactUs}
              </button>
            </Link>
            <Link href={`/${lang}/login`}>
              <button className="group rounded-md bg-black px-3 py-2 text-sm font-normal text-white hover:bg-zinc-700">
                {dict.navbar.myPages}
              </button>
            </Link>
            <div className="flex justify-center">
              <LanguageSwitcher lang={lang} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
