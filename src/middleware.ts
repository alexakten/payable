import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicToInternal: Record<string, string> = {
  "/integritetspolicy": "/privacy",
};

const internalToPublic: Record<string, string> = {
  "/privacy": "/integritetspolicy",
};

function hasFileExtension(pathname: string) {
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

function swedishPublicPath(pathname: string) {
  return internalToPublic[pathname] ?? pathname;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/payable-logo.png") {
    return NextResponse.redirect(
      new URL("/payable-logo-lightmode.png", request.url),
    );
  }
  if (pathname === "/payable-logo.svg") {
    return NextResponse.redirect(
      new URL("/payable-logo-lightmode.svg", request.url),
    );
  }

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/fonts/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/static/") ||
    hasFileExtension(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/en/integritetspolicy") {
    const url = request.nextUrl.clone();
    url.pathname = "/en/privacy";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  if (pathname === "/se" || pathname.startsWith("/se/")) {
    const stripped = pathname === "/se" ? "/" : pathname.slice(3) || "/";
    const url = request.nextUrl.clone();
    url.pathname = swedishPublicPath(stripped);
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/privacy") {
    const url = request.nextUrl.clone();
    url.pathname = "/integritetspolicy";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  const internal = publicToInternal[pathname] ?? pathname;
  url.pathname = internal === "/" ? "/se" : `/se${internal}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
