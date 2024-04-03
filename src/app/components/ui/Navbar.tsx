import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 flex w-full bg-white justify-between px-8 pt-8 pb-2">
      {/* Logo */}
      <div className="text-xl relative font-medium tracking-tight">Darwin<span className='text-[10px] absolute -right-2 bottom-3'>®</span></div>

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
