import Navbar from "./components/ui/Navbar";
import StepCard from "./components/ui/StepCard";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import MessageCard from "./components/ui/MessageBox";
import Image from "next/image";
import Link from "next/link";
import ButtonSecondary from "./components/ui/ButtonSecondary";



export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white px-3 tracking-tight text-black sm:px-8">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-8xl mt-52 flex w-full flex-col items-center justify-center text-center">
        {/* Notification Bar */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-sm">
          <div className="flex ">
            <p className="text-zinc-400">Har du fått brev från oss?</p>
            <Link href={"https://calendly.com/alex-ckeb/15"}>
              <button className="hover:text-blue group ml-2 border-l pl-2 font-medium">
                Vi hjälper dig{" "}
                <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* H1 */}
        <h1 className="mt-6 max-w-5xl text-[clamp(36px,6vw,72px)] font-[450] leading-[1.05] tracking-tighter">
          Få koll på din ekonomi — <br /> snabbt & smidigt
        </h1>

        {/* Subtext */}
        <h3 className="mt-8 max-w-md text-lg tracking-tight opacity-100 md:text-xl">
          Payable ger dig gratis stöd och vägledning så att du kan ta kontroll över dina skulder.
        </h3>

        {/* Button */}
        <div className="flex gap-4 mt-8">
          <ButtonPrimary />
          <ButtonSecondary />
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center ">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-6">
          <div className="col-span-1 flex flex-col md:col-span-2">
            <div className="relative z-10 h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              <Image
                src="/images/darwin.webp"
                alt="Portrait of Darwin"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[-1]"
              />
            </div>
            <p className="mt-4 text-sm ">
              Introducing Darwin — your AI colleague.
            </p>
          </div>

          <div className="col-span-1 flex flex-col md:col-span-4">
            <div className="relative h-[32rem] overflow-hidden rounded-xl bg-zinc-100">
              {/* Screen */}
              <div className="absolute -bottom-6 -right-6 flex h-4/5 w-4/5 items-start rounded-3xl border-[12px] border-black px-8 py-10 shadow-md">
                {/* Chat Wrapper */}
                <div className="flex flex-col gap-4">
                  <div>
                    <MessageCard
                      imageUrl="/images/darwin-profile.png"
                      name="Darwin"
                      date="14:20"
                      message={[
                        "Hey Alex - congrats on your pre-seed round of $1M! ",
                        " ",
                        "Noticed on LinkedIn that you’re hiring designers.",
                        " ",
                        "Kindred Lab has helped leading climate tech companies amplify their brand aligned with their mission.", // No line break after this line
                        " ",
                        "After a quick look on your website, I’ve some ideas for potential improvements. Worth a discussion?",
                        "",
                        " ",
                        "Cheers,",
                        "",
                        "Darwin",
                      ]}
                      messageBgColor="bg-indigo-100"
                      imagePosition="left"
                    />
                  </div>

                  <div className="ml-16 md:ml-32">
                    <MessageCard
                      imageUrl="/images/darwin-profile.webp"
                      name="Alex"
                      date="15:12"
                      message={[
                        "Hey Darwin, sounds interesting. Could you tell me more ? ",
                      ]}
                      messageBgColor="bg-zinc-200"
                      imagePosition="right"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm">
              Darwin takes care of outreach for you.
            </p>
          </div>
        </div>
      </section>


    </main>
  );
}
