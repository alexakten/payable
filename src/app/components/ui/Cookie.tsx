"use client";

import { useEffect, useState } from "react";
import { setCookie, getCookie } from "cookies-next";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getCookie("cookie_consent");
    setCookieConsent(storedCookieConsent === "granted");
  }, []);

  const handleAcceptCookies = () => {
    setCookie("cookie_consent", "granted", { maxAge: 60 * 60 * 24 * 365 });
    setCookieConsent(true);
    // Optionally reload the page or trigger analytics loading
    window.location.reload();
  };

  const handleRejectCookies = () => {
    setCookie("cookie_consent", "denied", { maxAge: 60 * 60 * 24 * 365 });
    setCookieConsent(false);
  };

  if (cookieConsent) return null; // Hide the banner if consent is given

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex flex-col items-center gap-4 border-t border-zinc-100 bg-white p-6 md:flex-row md:justify-between lg:px-8">
      <p className="max-w-4xl text-sm leading-6 text-gray-900">
        Denna webbplats använder cookies för att analysera webbplatstrafik. Läs
        mer i vår{" "}
        <a href="/cookies" className="font-semibold text-blue-600">
          cookiepolicy.
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
