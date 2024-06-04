import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 grid w-full grid-cols-2 sm:grid-cols-3 items-center justify-between bg-white px-3 sm:px-8 pb-2 pt-2 sm:pt-8">
      {/* Logo */}
      <div className="col-span-1 flex items-center justify-start">
        <Link href={"/"} className="flex gap-1 items-center">
          <svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="5" height="25" fill="#E49DD8" />
            <rect x="5" width="5" height="25" fill="#73ACDC" />
            <rect x="10" width="5" height="25" fill="#FAC667" />
            <rect x="20" width="5" height="25" fill="#869337" />
            <rect x="15" width="5" height="25" fill="#DF771A" />
          </svg>


          <p className="relative text-[22px] font-medium tracking-tighter">
            Payable
            {/* <span className="absolute -right-1 bottom-1 text-[12px]">™</span> */}
          </p>
        </Link>
      </div>

      <div className="col-span-1 hidden sm:flex whitespace-nowrap gap-2 font-medium items-center justify-center ">
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
          <button className="group rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-700">
            Logga in
          </button>
        </Link>
      </div>
    </nav>
  );
}
