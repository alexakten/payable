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
    <main className="flex flex-col items-center bg-white tracking-tight text-zinc-950">
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
        <h1 className="mt-6 max-w-5xl text-8xl tracking-tighter">
          Hi, I&apos;m Darwin — <br /> your new AI colleague.
        </h1>

        {/* Subtext */}
        <h3 className="mt-8 max-w-lg text-xl tracking-tight opacity-100">
          Automate your sales outeach and close more deals.{" "}
          <span className="font-normal">
            Darwin works 24/7 so you don&apos;t have to.
          </span>
        </h3>

        {/* Button */}
        <div className="mt-8">
          <ButtonPrimary />
        </div>
      </section>

      {/* Images Section */}
      <section className="mt-32 flex w-full max-w-6xl flex-col items-center ">
        <div className="grid w-full grid-cols-6 gap-4">
          <div className="col-span-2 flex flex-col">
            <div className="relative z-10 h-[32rem] rounded-xl overflow-hidden bg-zinc-100">
              <Image
                src="/images/darwin.webp"
                alt="Portrait of Darwin"
                layout="fill"
                objectFit="cover"
                priority
                className="scale-x-[-1]"
              />
            </div>
            <p className="mt-4 text-sm ">Introducing Darwin — your AI colleague.</p>
          </div>

          <div className="col-span-4 flex flex-col">
            <div className="h-[32rem] rounded-xl bg-zinc-100"></div>
            <p className="mt-4 text-sm ">
              Get a complete overview with the sales dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Wins Deals Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <h2 className="max-w-xl text-center text-5xl font-medium tracking-tight">
          Darwin wins deals — fast.
        </h2>
        <p className="mt-8 max-w-xs text-center text-xl tracking-tight opacity-100">
          Let your AI employee take over.
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

      {/* Workflow Section */}
      <section className="mt-48 max-w-6xl flex w-full flex-col items-center ">
        <h2 className="max-w-xl text-center text-5xl font-medium tracking-tight">
          Introduce Darwin directly into your workflow.
        </h2>
        <p className="mt-8 max-w-xs text-center text-xl tracking-tight opacity-100">
          Getting your own AI agent has never been easier.
        </p>
        <div className="mt-16 grid grid-cols-6 w-full grid-rows-2 gap-4">
          <div className="col-span-4 row-span-1">
            <StepCard tagColor="blue" tagText="Feature" title="Title" description="Desc" />
          </div>
          <div className="col-span-2 row-span-1">
            <StepCard tagColor="blue" tagText="Feature" title="Title" description="Desc" />
          </div>
          <div className="col-span-2 row-span-1">
            <StepCard tagColor="blue" tagText="Feature" title="Title" description="Desc" />
          </div>
          <div className="col-span-4 row-span-1">
            <StepCard tagColor="blue" tagText="Feature" title="Title" description="Desc" />
          </div>
        </div>
      </section>

      <section className="m-48 flex w-full flex-col items-center ">
        <h2 className="max-w-xl text-center text-5xl font-medium tracking-tight">
          Hire Darwin today.
        </h2>
        <p className="mt-8 max-w-sm text-center text-xl tracking-tight opacity-100">
          Book a demo to see Darwin in action.
        </p>
        <div className="mt-16">
          <ButtonPrimary />
        </div>
      </section>
    </main>
  );
}
