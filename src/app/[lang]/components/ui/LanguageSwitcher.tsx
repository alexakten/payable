"use client";

import "flag-icons/css/flag-icons.min.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Locale = "en" | "se";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();

  // Function to switch the language in the current URL
  const switchLanguage = (newLang: Locale) => {
    return pathname.replace(`/${lang}`, `/${newLang}`);
  };

  return (
    <div className="flex items-center gap-2">
      {lang !== "en" && (
        <Link href={switchLanguage("en")}>
          <button className="flex items-center gap-1 px-3 py-2 text-sm hover:underline">
            <span className="fi fi-gb"></span>
            EN
          </button>
        </Link>
      )}
      {lang !== "se" && (
        <Link href={switchLanguage("se")}>
          <button className="flex items-center gap-1 px-3 py-2 text-sm hover:underline">
            <span className="fi fi-se"></span>
            SE
          </button>
        </Link>
      )}
    </div>
  );
}
