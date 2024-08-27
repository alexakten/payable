"use client";

import { useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    const storedCookieConsent = getCookie("cookie_consent") as
      | string
      | undefined;
    setCookieConsent(storedCookieConsent ?? null);
  }, []);

  const handleAcceptCookies = () => {
    setCookie("cookie_consent", "granted", { maxAge: 60 * 60 * 24 * 365 });
    setCookieConsent("granted");
    window.location.reload(); // Optionally reload the page or trigger analytics loading
  };

  const handleRejectCookies = () => {
    setCookie("cookie_consent", "denied", { maxAge: 60 * 60 * 24 * 365 });
    setCookieConsent("denied");
  };

  // Hide the banner if consent is given or denied
  if (cookieConsent === "granted" || cookieConsent === "denied") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex flex-col items-center gap-4 border-t border-zinc-100 bg-white p-6 md:flex-row md:justify-between lg:px-8">
      <p className="max-w-4xl text-sm leading-6 text-gray-900">
        Denna webbplats använder cookies för att analysera webbplatstrafik. Läs
        mer i vår{" "}
        <a href="/cookies" className="font-semibold text-blue-600">
          Cookiepolicy.
        </a>
      </p>
      <div className="flex gap-4">
        <button
          onClick={handleAcceptCookies}
          className="rounded-md bg-black px-3 py-2 text-sm font-normal text-white hover:bg-zinc-700"
        >
          Acceptera alla 🍪
        </button>
        <button
          onClick={handleRejectCookies}
          className="rounded-md px-3 py-2 text-sm font-normal hover:bg-zinc-100"
        >
          Neka alla
        </button>
      </div>
    </div>
  );
}
