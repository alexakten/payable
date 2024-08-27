import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Cookie from "./components/ui/Cookie";
import { getCookie } from "cookies-next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Payable",
  description: "The human way to repay debt.",
  openGraph: {
    title: "Payable",
    description: "The human way to repay debt.",
    url: "https://payable.se/",
    type: "website",
    images: [
      {
        url: "https://payable.se/thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "The human way to repay debt.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payable",
    description: "The human way to repay debt.",
    images: ["https://payable.se/thumbnail.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieConsent = getCookie("cookie_consent");

  return (
    <html lang="en">
      <body>
        {children}
        {/* {cookieConsent === "granted" && <Analytics />} */}
        <Analytics />
        {/* <Cookie /> */}
      </body>
    </html>
  );
}
