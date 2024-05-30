import Link from "next/link";

export default function ButtonSecondary() {
  return (
    <Link href={"https://calendly.com/alex-ckeb/15"}>
      <button className="text-md group font-medium rounded-md bg-zinc-100 px-4 py-3 text-black hover:bg-zinc-200">
        Kreditgivare{" "}
        <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
          -&gt;
        </span>
      </button>
    </Link>
  );
}
