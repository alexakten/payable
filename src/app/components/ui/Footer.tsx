import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-zinc-100 pb-20 pt-12 ">
      <div className="grid w-full max-w-6xl font-medium grid-cols-2 gap-12 px-3 sm:px-8 md:grid-cols-4">
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Låntagare</p>
          <Link className="hover:underline" href={"/"}>
            Mina sidor
          </Link>
          <Link className="hover:underline" href={"/"}>
            Ekonomisk vägledning
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
            Försäljning NPL
          </Link>
          <Link className="hover:underline" href={"/"}>
            Process portföljköp
          </Link>
          <Link className="hover:underline" href={"/"}>
            Utvärdera försäljning
          </Link>
          <Link className="hover:underline" href={"/"}>
            Fördelar sälja NPL
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <p className="opacity-40">Payable</p>
          <Link className="hover:underline" href={"/"}>
            Om oss
          </Link>
          <Link className="hover:underline" href={"/"}>
            Ledning
          </Link>
          <Link className="hover:underline" href={"/"}>
            Karriär{" "}
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
        </div>
      </div>

      <div className="w-full px-3 sm:px-8 max-w-6xl my-12">
        <div className="border-t w-full "></div>
      </div>


      <div className="flex w-full max-w-6xl justify-between px-3 sm:px-8">
        <p className="text-sm opacity-40">© 2024 Payable AB</p>

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
