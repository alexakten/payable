"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation";
import Link from "next/link";

type Locale = "en" | "sv";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname(); // Get the current path

  // Function to switch the language in the current URL
  const switchLanguage = (newLang: Locale) => {
    // Replace the current lang part in the URL with the newLang
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Link href={switchLanguage("en")}>
        <button
          className={`px-3 py-2 text-sm ${lang === "en" ? "underline" : "hover:underline"}`}
        >
          En
        </button>
      </Link>
      <Link href={switchLanguage("sv")}>
        <button
          className={`px-3 py-2 text-sm ${lang === "sv" ? "underline" : "hover:underline"}`}
        >
          Sv
        </button>
      </Link>
    </div>
  );
}
