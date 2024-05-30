import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 top-0 flex w-full bg-white justify-between px-8 pt-8 pb-2">
      {/* Logo */}
      <div className="text-2xl relative font-medium tracking-tighter">Payable<span className='text-[12px] absolute -right-1.5 bottom-2.5'>™</span></div>

      {/* Buttons */}
      <div className="flex gap-4">
        <a href="/#">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Kreditgivare
          </button>
        </a>

        <a href={"/#"}>
          <button className="group rounded-md bg-black px-3 py-2 text-sm text-white hover:bg-blue">
            Logga in
          </button>
        </a>
      </div>

    </nav>
  );
}
