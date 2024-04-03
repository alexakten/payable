import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 flex w-full justify-between px-8 py-8">
      {/* Logo */}
      <div className="text-xl font-medium tracking-tight">Darwin</div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link href={"/#"}>
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Sign in
          </button>
        </Link>

        <Link href={"/#"}>
          <button className="group rounded-md bg-black px-3 py-2 text-sm text-white hover:bg-blue">
            Hire Darwin <span className="inline-block tracking-normal translate-x-0 group-hover:translate-x-1 transition-transform duration-200">-&gt;</span>
          </button>
        </Link>
      </div>

    </nav>
  );
}
