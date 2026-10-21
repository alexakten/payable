export type Locale = "en" | "se";

const internalToSwedish: Record<string, string> = {
  "/privacy": "/integritetspolicy",
};

export function localeHref(lang: Locale, path: string) {
  const hashIndex = path.indexOf("#");
  const pathname = (hashIndex === -1 ? path : path.slice(0, hashIndex)) || "/";
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
  const localized =
    lang === "se" ? (internalToSwedish[pathname] ?? pathname) : pathname;
  const withLocale =
    lang === "en"
      ? localized === "/"
        ? "/en"
        : `/en${localized}`
      : localized;

  return `${withLocale}${hash}`;
}

export function switchLocalePath(pathname: string, target: Locale) {
  const stripped =
    pathname === "/en" || pathname === "/se"
      ? "/"
      : pathname.startsWith("/en/") || pathname.startsWith("/se/")
        ? pathname.slice(3)
        : pathname;
  const internal =
    stripped === "/integritetspolicy" ? "/privacy" : stripped || "/";

  return localeHref(target, internal);
}
