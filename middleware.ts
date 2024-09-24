// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Define the locales you support
const locales = ["en", "sv"];
const defaultLocale = "sv"; // Default to Swedish

// Function to get the user's preferred locale
function getLocale(request: NextRequest): string {
  const negotiator = new Negotiator({
    headers: { "accept-language": request.headers.get("accept-language") || "" },
  });

  // Get the preferred languages from the request
  const languages = negotiator.languages();
  
  // Match the user's preferred languages to the available locales
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the request already includes a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If no locale is present, redirect to the appropriate locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request); // Get the preferred or default locale
    const url = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Apply the middleware to all routes, including the root `/` path
export const config = {
  matcher: [
    '/', // This explicitly matches the root URL `/`
    '/((?!_next).*)', // This applies to all other paths, excluding Next.js internals (_next/*)
  ],
};
