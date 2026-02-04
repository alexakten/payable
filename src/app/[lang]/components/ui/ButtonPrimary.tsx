import Link from "next/link";

export default function ButtonPrimary() {
  return (
    <Link href="https://portal.payable.se/login.php">
      <button className="text-md group rounded-md bg-black px-4 py-3 font-medium text-white hover:bg-zinc-700">
        Gå till betalning{" "}
        <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
          -&gt;
        </span>
      </button>
    </Link>
  );
}
