import Link from "next/link";

export default function Navbar({ pageType }: { pageType: string }) {
  return (
    <nav className="fixed top-0 z-50 grid w-full grid-cols-2 items-center justify-between bg-white px-3 pb-3 pt-4 sm:grid-cols-3 sm:px-8 sm:pt-3 border-b border-zinc-100">
      {/* Logo */}
      <div className="col-span-1 flex items-center justify-start">
        <Link href={"/"} className="flex items-center gap-1">

          <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.51294 12.4289L0.992188 13.8841L10.9392 19.6266L25.0023 11.508L22.4815 10.0527L10.9392 16.7161L3.51294 12.4289Z" fill="black" />
            <rect width="11.4856" height="16.2382" transform="matrix(0.866044 0.499967 -0.866044 0.499967 15.0508 0.369141)" fill="black" />
          </svg>



          <p className="relative text-[20px] font-[450] tracking-tighter">
            Pay<span className="">able</span>
          </p>
        </Link>
      </div>

      <div className="col-span-1 hidden items-center justify-center gap-4 whitespace-nowrap font- sm:flex ">
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
            <Link href="/#faq">
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
            <button className="rounded-md  px-3 py-2 text-sm font-normal hover:bg-zinc-100">
              Kontakta oss
            </button>
          </Link>

          <Link href={"/#"}>
            <button className="group rounded-md bg-black px-3 py-2 text-sm font-normal text-white hover:bg-zinc-700">
              Mina Sidor
            </button>
          </Link>
        </div>
      ) : (
        <div className="col-span-1 flex whitespace-nowrap items-center justify-end gap-4">
          <Link href="/kontakt">
            <button className="group rounded-md bg-black px-3 py-2 text-sm font-normal text-white hover:bg-zinc-700">
              Kontakta oss
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
