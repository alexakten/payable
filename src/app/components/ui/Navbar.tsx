import Link from "next/link";

export default function Navbar({ pageType }: { pageType: string }) {
  return (
    <nav className="fixed top-0 z-50 grid w-full grid-cols-2 items-center justify-between bg-white px-3 pb-3 pt-4 sm:grid-cols-3 sm:px-8 sm:pt-3 border-b border-zinc-100">
      {/* Logo */}
      <div className="col-span-1 flex items-center justify-start">
        <Link href={"/"} className="flex items-center gap-0.5">
          <p className="relative text-[22px] font-medium tracking-tighter">
            Pay<span className="">able</span>
          </p>
        </Link>
      </div>

      <div className="col-span-1 hidden items-center justify-center gap-4 whitespace-nowrap font-medium sm:flex ">
        {pageType === 'customer' ? (
          <>
            <Link href="/#oss">
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                Om oss
              </button>
            </Link>
            <Link href="/#betala">
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                Så betalar du
              </button>
            </Link>
            <Link href="/#">
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                Vanliga frågor
              </button>
            </Link>
            <Link href="/kreditgivare">
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                För kreditgivare
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/kreditgivare#oss">
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                Om oss              </button>
            </Link>
            <Link href="/kreditgivare#tjanster">
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                Våra tjänster
              </button>
            </Link>
            <Link href="/kreditgivare#fordelar">
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                Fördelar sälja
              </button>
            </Link>
            <Link href="/kreditgivare#process">
              <button className="rounded-md px-3 py-2 text-sm hover:bg-zinc-100">
                Process
              </button>
            </Link>
           
          </>
        )}
      </div>

      {/* Buttons */}
      {pageType === 'customer' ? (
        <div className="col-span-1 flex whitespace-nowrap items-center justify-end gap-4">
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
      ) : (
        <div className="col-span-1 flex whitespace-nowrap items-center justify-end gap-4">
          <Link href="/kontakt">
            <button className="group rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-700">
              Kontakta oss
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
