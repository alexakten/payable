import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 grid w-full grid-cols-3 items-center justify-between bg-white px-8 pb-2 pt-8">
      {/* Logo */}
      <div className="col-span-1 flex items-center justify-start">
        <Link href={"/"}>
          <p className="relative text-2xl font-medium tracking-tighter">
            Payable
            <span className="absolute -right-1 bottom-1.5 text-[12px]">™</span>
          </p>
        </Link>
      </div>

      <div className="col-span-1 whitespace-nowrap flex gap-2 font-medium items-center justify-center ">
        <Link href="/#">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Om oss
          </button>
        </Link>
        <Link href="/#">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Rådgivning
          </button>
        </Link>
        <Link href="/#">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Kreditgivare
          </button>
        </Link>
      </div>

      {/* Buttons */}
      <div className="col-span-1 flex items-center justify-end gap-4">
        {/* <Link href="/#">
          <button className="rounded-md  px-3 py-2 text-sm font-medium hover:bg-zinc-100">
            Kreditgivare
          </button>
        </Link> */}

        <Link href={"/#"}>
          <button className="group rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800">
            Logga in
          </button>
        </Link>
      </div>
    </nav>
  );
}
