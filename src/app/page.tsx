import Navbar from "./components/ui/Navbar";
import StepCard from "./components/ui/StepCard";
import ButtonPrimary from "./components/ui/ButtonPrimary";
import MessageCard from "./components/ui/MessageBox";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    tagText: "Step 1",
    title: "Hire Darwin",
    description:
      "Sign up and integrate Darwin into your existing team or workflow",
  },
  {
    tagText: "Step 2",
    title: "Train Darwin",
    description:
      "Provide Darwin with details about your product to create an ICP.",
  },
  {
    tagText: "Step 3",
    title: "Darwin researches",
    description:
      "Darwin researches each potential customer based on dozens of data points.",
  },
  {
    tagText: "Step 4",
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
            <Link href={"https://calendly.com/alex-ckeb/15"}>
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
                        "After a quick look on your website, I’ve some ideas for potential improvements.",
                        " ",
                        "Worth a discussion?",
                        " ",
                        "Cheers,",
                        "",
                        "Darwin"


                      ]}
                      imagePosition="left"
                    />
                  </div>

                  <div className="ml-16 md:ml-32">
                    <MessageCard
                      imageUrl="/images/darwin-profile.png"
                      name="Alex"
                      date="15:12"
                      message={[
                        "Hey Darwin,",
                        " ",
                        "Sounds interesting. Could you tell me more?",
                      ]}
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

      {/* How it works Section */}
      <section className="mt-48 flex w-full max-w-6xl flex-col items-center ">
        <h2 className="max-w-3xl text-center text-5xl font-medium tracking-tight">
          Book meetings — fast.
        </h2>
        {/* <p className="mt-8 max-w-xs text-center text-xl tracking-tight opacity-100">
          This is how Darwin works.
        </p> */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard
              showTag={true}
              tagText={step.tagText}
              showBorder={false}
              showShadow={false}
              key={index}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>

        <div className="mt-20">
          <ButtonPrimary />
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
              description="Human personalization and persuasion. No ChatGPT sounding bullshit. Darwin writes value driven messages that book meetings.
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

      {/* Footer */}
      <section className="m-48 flex w-full rounded-xl max-w-6xl flex-col items-center bg-zinc-100 p-32 ">
        <h2 className="max-w-xl text-center text-3xl font-medium  tracking-tight sm:text-5xl">
          The next step in Evolution. Introducing AI-colleagues.
        </h2>
        <p className="mt-8 max-w-xl text-center text-lg tracking-tight opacity-100 md:text-xl">
          Darwin is the first AI BDR that learns over time and answers your
          prospects&apos; questions without human interference.
        </p>
        <div className="mt-8">
          <ButtonPrimary />
        </div>
      </section>
    </main>
  );
}
