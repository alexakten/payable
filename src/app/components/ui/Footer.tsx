import Link from "next/link";

export default function Footer() {
  return (
    <div className="m-32 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-full max-w-6xl">
      <p className="text-sm opacity-50">
        © 2024 Payable AB <br />
      </p>
      <div className="flex flex-col gap-1 text-sm opacity-50">
        <p>
          Falugatan 8
        </p>
        <p>
          113 32 Stockholm
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <Link className="text-sm hover:underline" href={"/"}>
          08-123 45 67
        </Link>
        <Link className="text-sm hover:underline" href={"/"}>
          info@payable.se
        </Link>

      </div>
      <div className="flex flex-col gap-3">
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
  );
}
