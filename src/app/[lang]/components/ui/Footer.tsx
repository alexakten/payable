import Link from "next/link";
import { getDictionary } from "../../dictionaries";

type Locale = "en" | "sv";

interface Params {
  params: {
    lang: Locale;
  };
}

export default async function Footer({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <div className="flex w-full flex-col items-center justify-center bg-zinc-100 pb-20 pt-12 ">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-12 px-3 font-normal sm:px-8 md:grid-cols-4">
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">{dict.footer.borrowers}</p>
          <Link className="hover:underline" href={`/${lang}/login`}>
            {dict.footer.myPages}
          </Link>
          <Link className="hover:underline" href={`/${lang}/#why-pay`}>
            {dict.footer.howToPay}
          </Link>
          <Link className="hover:underline" href={`/${lang}/#faq`}>
            {dict.footer.faq}
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">{dict.footer.lenders}</p>
          <Link className="hover:underline" href={`/${lang}/creditors#about-us`}>
            {dict.footer.aboutUs}
          </Link>
          <Link
            className="hover:underline"
            href={`/${lang}/creditors#services`}
          >
            {dict.footer.ourServices}
          </Link>
          <Link
            className="hover:underline"
            href={`/${lang}/creditors#benefits`}
          >
            {dict.footer.benefitsSell}
          </Link>
          <Link className="hover:underline" href={`/${lang}/creditors#process`}>
            {dict.footer.salesProcess}
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">{dict.footer.companyInfo}</p>
          <p className="text-sm">
            Payable AB <br />
            Falugatan 8 <br />
            113 32 Stockholm
          </p>
          <Link
            className="text-sm hover:underline"
            href={"mailto:info@payable.se"}
          >
            info@payable.se
          </Link>
          <p className="text-sm">
            {dict.footer.orgNr}: 559484-8672 <br />
            {dict.footer.registeredSeat}: Stockholm
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">{dict.footer.contact}</p>
          <Link className="text-sm hover:underline" href={"tel:08-500 824 00"}>
            08-500 824 00
          </Link>
          <Link
            className="text-sm hover:underline"
            href={"mailto:kundservice@payable.se"}
          >
            kundservice@payable.se
          </Link>
        </div>
      </div>

      <div className="my-12 w-full max-w-6xl px-3 sm:px-8">
        <div className="w-full border-t "></div>
      </div>

      <div className="flex w-full max-w-6xl justify-between px-3 sm:px-8">
        <div className="text-sm opacity-40">
          <p className="">© 2024 Payable AB</p>
        </div>

        <div className="flex flex-col gap-3 text-right font-normal">
          <Link
            className="text-sm hover:underline"
            href={`/${lang}/code-of-conduct`}
          >
            {dict.footer.codeOfConduct}
          </Link>
          <Link
            className="text-sm hover:underline"
            href={`/${lang}/complaints`}
          >
            {dict.footer.complaints}
          </Link>
          <Link className="text-sm hover:underline" href={`/${lang}/privacy`}>
            {dict.footer.privacyPolicy}
          </Link>
          {/* Uncomment when needed */}
          {/* <Link className="text-sm hover:underline" href={`/${lang}/cookie`}>
            {dict.footer.cookieSettings}
          </Link> */}
        </div>
      </div>
    </div>
  );
}
