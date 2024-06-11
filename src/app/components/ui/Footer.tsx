import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-zinc-100 pb-20 pt-12 ">
      <div className="grid w-full max-w-6xl grid-cols-2 gap-12 px-3 font-medium sm:px-8 md:grid-cols-4">
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Kredittagare</p>
          <Link className="hover:underline" href={"/"}>
            Mina sidor
          </Link>
          <Link className="hover:underline" href={"/"}>
            Så betalar du
          </Link>
          <Link className="hover:underline" href={"/"}>
            Om kravprocessen
          </Link>
          <Link className="hover:underline" href={"/"}>
            Vanliga frågor
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Kreditgivare</p>
          <Link className="hover:underline" href={"/"}>
            Våra tjänster{" "}
          </Link>
          <Link className="hover:underline" href={"/"}>
            Fördelar sälja{" "}
          </Link>
          <Link className="hover:underline" href={"/"}>
            Försäljningsprocess{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Payable</p>
          <Link className="hover:underline" href={"/"}>
            Om oss
          </Link>
          <Link className="hover:underline" href={"/"}>
            Bolagsinformation
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Kontakt</p>
          <Link className="text-sm hover:underline" href={"/"}>
            08-123 45 67
          </Link>
          <Link className="text-sm hover:underline" href={"/"}>
            info@payable.se
          </Link>
          {/* <p className="text-sm">
            Falugatan 8 <br />
            113 32 Stockholm
          </p> */}
        </div>
      </div>

      <div className="my-12 w-full max-w-6xl px-3 sm:px-8">
        <div className="w-full border-t "></div>
      </div>

      <div className="flex w-full max-w-6xl justify-between px-3 sm:px-8">
        <p className="text-sm opacity-40">
          © 2024 Payable AB <br />
          Org 559484-8672{" "}
        </p>
        {/* <p className="text-sm opacity-40">Org nr. 559484-8672 </p> */}

        <div className="flex flex-col gap-3 text-right font-medium">
          <Link className="text-sm hover:underline" href={"/"}>
            Code of Conduct
          </Link>
          <Link className="text-sm hover:underline" href={"/"}>
            Kundklagomål
          </Link>
          <Link className="text-sm hover:underline" href={"/"}>
            Integritetspolicy
          </Link>
          <Link className="text-sm hover:underline" href={"/"}>
            Cookie-inställningar
          </Link>
        </div>
      </div>
    </div>
  );
}
