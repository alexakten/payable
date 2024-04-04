import Navbar from "./components/ui/Navbar";
import StepCard from "./components/ui/StepCard";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    tagColor: "purple",
    tagText: "Hire",
    title: "Initialization & setup",
    description:
      "Sign up and integrate Darwin into your existing team or workflow",
  },
  {
    tagColor: "yellow",
    tagText: "Train",
    title: "Learning & training",
    description:
      "Provide Darwin with details about your product to create an ICP.",
  },
  {
    tagColor: "green",
    tagText: "Research",
    title: "Gather information",
    description:
      "Darwin researches each potential customer based on dozens of data points.",
  },
  {
    tagColor: "blue",
    tagText: "Engage",
    title: "Automated interactions",
    description:
      "Darwin personalizes outreach messages tailored to each potential customer",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white px-3 tracking-tight text-zinc-950 sm:px-8">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-8xl mt-52 flex w-full flex-col items-center justify-center text-center">
        {/* Notification Bar */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-sm shadow-md">
          <div className="flex ">
            <p className="text-zinc-400">v.1 launching soon</p>
            <Link href={"/#"}>
              <button className="hover:text-blue group ml-2 border-l pl-2 font-medium">
                Book demo{" "}
                <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* H1 */}
        <h1 className="mt-6 max-w-5xl text-[clamp(36px,5.5vw,72px)] font-medium leading-[1.05] tracking-tighter">
          Hi, I&apos;m Darwin — <br /> your new BDR colleague.
        </h1>

        {/* Subtext */}
        <h3 className="mt-8 max-w-xl text-lg tracking-tight opacity-100 md:text-xl">
          Darwin will continuously source leads, craft personalized & persuasive
          messages that book meetings with buyers.
        </h3>

        {/* Button */}
        <div className="mt-8">
          <ButtonPrimary />
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
              <div className="shadow-md absolute -bottom-6 -right-6 flex items-start h-4/5 w-4/5 rounded-3xl border-[12px] border-black p-8">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-zinc-400"></div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium">Darwin</p>
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

      {/* Top BDR Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <h2 className="max-w-xl text-center text-3xl font-medium leading-[1.05] tracking-tight sm:text-5xl">
          Darwin is a top 1% BDR and is 96% cheaper.{" "}
        </h2>
        {/* <p className="mt-8 max-w-xs text-center text-xl tracking-tight opacity-100">
          Getting your own AI agent has never been easier.
        </p> */}
        <div className="mt-16 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          <div className="col-span-1">
            <StepCard
              tagColor="purple"
              tagText="Research"
              title="The right person"
              description="Darwin does in-depth research of your product & finds buyers whose pain-point your product solves."
            />
          </div>
          <div className="col-span-1">
            <StepCard
              tagColor="blue"
              tagText="Messaging"
              title="The right message"
              description="Human personalization and persuasion. No ChatGPT sounding bullshit. Darwin writes value driven messages that books meetings.
              "
            />
          </div>
          <div className="col-span-1">
            <StepCard
              tagColor="green"
              tagText="Timing"
              title="The right time"
              description="Darwin finds triggers of buyers to contact them at the right time, such as job changes, news, and data found on the web."
            />
          </div>
        </div>
        {/* <div className="mt-20">
          <ButtonPrimary />
        </div> */}
      </section>

      {/* Wins Deals Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <h2 className="max-w-xl text-center text-5xl font-medium tracking-tight">
          Darwin wins deals — fast.
        </h2>
        <p className="mt-8 max-w-xs text-center text-xl tracking-tight opacity-100">
          This is how Darwin works.
        </p>
        <div className="mt-16 grid grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              tagColor={step.tagColor}
              tagText={step.tagText}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="mt-20">
          <ButtonPrimary />
        </div>
      </section>

      <section className="m-48 flex w-full flex-col items-center ">
        <h2 className="max-w-xl text-center text-3xl font-medium  tracking-tight sm:text-5xl">
          The next step in Evolution. Introducing AI-colleagues.
        </h2>
        <p className="mt-8 max-w-xl text-center text-lg tracking-tight opacity-100 md:text-xl">
          Darwin is the first AI BDR that learns over time and answers your
          questions prospects without human interference.
        </p>
        <div className="mt-8">
          <ButtonPrimary />
        </div>
      </section>
    </main>
  );
}
