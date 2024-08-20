import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-zinc-100 pb-20 pt-12 ">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-12 px-3 font-normal sm:px-8 md:grid-cols-4">
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Kredittagare</p>
          <Link className="hover:underline" href={"/"}>
            Mina sidor
          </Link>
          <Link className="hover:underline" href={"/#betala"}>
            Så betalar du
          </Link>
          <Link className="hover:underline" href={"/#faq"}>
            Vanliga frågor
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Kreditgivare</p>
          <Link className="hover:underline" href="/kreditgivare#tjanster">
            Våra tjänster{" "}
          </Link>
          <Link className="hover:underline" href="/kreditgivare#fordelar">
            Fördelar sälja{" "}
          </Link>
          <Link className="hover:underline" href="/kreditgivare#process">
            Försäljningsprocess{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Payable</p>
          <Link className="hover:underline" href={"/kreditgivare#oss"}>
            Om oss
          </Link>
          {/* <Link className="hover:underline" href={"/"}>
            Bolagsinformation
          </Link> */}
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Kontakt</p>
          <p className="text-sm">
            Falugatan 8 <br />
            113 32 Stockholm
          </p>
          <Link className="text-sm hover:underline" href={"tel:08-500 824 00"}>
            08-500 824 00
          </Link>
          <Link
            className="text-sm hover:underline"
            href={"mailto:info@payable.se"}
          >
            info@payable.se
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
          <p>Org.nr 559484-8672 </p>
        </div>

        <div className="flex flex-col gap-3 text-right font-normal">
          <Link className="text-sm hover:underline" href={"/code-of-conduct"}>
            Code of Conduct
          </Link>
          <Link className="text-sm hover:underline" href={"/kundklagomal"}>
            Kundklagomål
          </Link>
          <Link className="text-sm hover:underline" href={"/integritetspolicy"}>
            Integritetspolicy
          </Link>
          {/* <Link
            className="text-sm hover:underline"
            href={"/cookie-inställningar"}
          >
            Cookie-inställningar
          </Link> */}
        </div>
      </div>
    </div>
  );
}
