import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 grid w-full grid-cols-2 items-center justify-between bg-white px-3 pb-2 pt-4 sm:grid-cols-3 sm:px-8 sm:pt-8">
      {/* Logo */}
      <div className="col-span-1 flex items-center justify-start">
        <Link href={"/"} className="flex items-center gap-0.5">

          <svg width="24" height="32" viewBox="0 0 290 343" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="133.289" height="68.2503" transform="matrix(-0.866108 -0.499858 0.866108 -0.499857 173.164 250.289)" fill="black" />
            <rect width="133.289" height="68.2503" transform="matrix(-0.866108 -0.499858 0.866108 -0.499857 173.164 117.037)" fill="black" />
            <rect width="116.753" height="63.3262" transform="matrix(5.64656e-05 0.99989 -0.933414 -0.359148 116.805 206.359)" fill="black" />
            <rect width="133.274" height="68.2428" transform="matrix(3.76111e-05 0.99989 -0.866166 -0.499978 116.826 84.4863)" fill="black" />
            <path d="M232.279 151.162L232.282 216.186C232.283 253.872 205.82 269.146 173.175 250.302V250.302L173.17 117.042L232.279 151.162Z" fill="black" />
          </svg>

          <p className="relative text-[22px] font-medium tracking-tighter">
            Pay<span className="">able</span>
            {/* <span className="absolute -right-1 bottom-1 text-[12px]">™</span> */}
          </p>
        </Link>
      </div>

      <div className="col-span-1 hidden items-center justify-center gap-4 whitespace-nowrap font-medium sm:flex ">
        <Link href="/#">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Om oss
          </button>
        </Link>

        <Link href="/#">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Varför betala{" "}
          </button>
        </Link>
        <Link href="/#">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            Frågor och svar{" "}
          </button>
        </Link>
        <Link href="/kreditgivare">
          <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
            För kreditgivare
          </button>
        </Link>
      </div>

      {/* Buttons */}
      <div className="col-span-1 flex whitespace-nowrap items-center justify-end gap-8">
        <Link href="/kontakt">
          <button className="rounded-md  px-3 py-2 text-sm font-medium hover:bg-zinc-100">
            Kontakta oss
          </button>
        </Link>

        <Link href={"/#"}>
          <button className="group rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-700">
            Mina Sidor
          </button>
        </Link>
      </div>
    </nav>
  );
}
