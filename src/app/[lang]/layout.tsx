import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Cookie from "./components/ui/Cookie";
import { getCookie } from "cookies-next";

import "../globals.css";

// Define metadata (if it's dynamic based on locale, you can extend this to use 'lang')
export const metadata: Metadata = {
  title: "Payable",
  openGraph: {
    title: "Payable",
    url: "https://payable.se/",
    type: "website",
    images: [
      {
        url: "https://payable.se/thumbnail.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payable",
    images: ["https://payable.se/thumbnail.webp"],
  },
};

export default function RootLayout({
  children,
  params: { lang }, // Accept the 'lang' parameter from URL
}: {
  children: React.ReactNode;
  params: { lang: string }; // Ensure `lang` is part of the parameters
}) {
  const cookieConsent = getCookie("cookie_consent");

  return (
    <html lang={lang}>
      {" "}
      {/* Set the 'lang' attribute dynamically */}
      <body>
        {children}
        {cookieConsent === "granted" && <Analytics />}
        {/* <Cookie />  */}
      </body>
    </html>
  );
}
