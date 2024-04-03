import Navbar from "./components/ui/Navbar";
import FeatureCard from "./components/ui/FeatureCard";
import Link from "next/link";

const features = [
  {
    tagColor: "purple",
    tagText: "Hire",
    title: "Hire Darwin today",
    description: "Sign up and connect Darwin to your existing team.",
  },
  {
    tagColor: "yellow",
    tagText: "Train",
    title: "Give him his first task",
    description:
      "Tell Darwin what you're selling and build your Ideal Customer Profile (ICP).",
  },
  {
    tagColor: "green",
    tagText: "Engage",
    title: "Cash flow forecasting",
    description:
      "Cash flow forecasting using machine learning algorithms and Markov chains.",
  },
  {
    tagColor: "blue",
    tagText: "Close",
    title: "Cash flow forecasting",
    description:
      "Cash flow forecasting using machine learning algorithms and Markov chains.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white tracking-tight text-zinc-950">
      <Navbar />

      <section className="max-w-8xl mt-56 flex w-full flex-col items-center justify-center text-center">
        {/* Notification Bar */}
        <div className="flex items-center gap-2 rounded-full border border-zinc-100 bg-white px-6 py-1 text-black shadow-md">
          <div className="flex ">
            <p className="text-zinc-400">v.1 launching soon</p>
            <Link href={"/#"}>
              <button className="hover:text-blue group ml-2 border-l pl-2">
                Book demo{" "}
                <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* H1 */}
        <h1 className="mt-5 max-w-5xl text-8xl tracking-tighter">
          Hi, I&apos;m Darwin — <br /> your new AI employee.
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
          <Link href={"/#"}>
            <button className="text-md hover:bg-blue group rounded-md bg-black px-4 py-3 text-white">
              Hire Darwin{" "}
              <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </button>
          </Link>
        </div>
      </section>

      <section className="m-20 grid w-full max-w-6xl grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            tagColor={feature.tagColor}
            tagText={feature.tagText}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
}
