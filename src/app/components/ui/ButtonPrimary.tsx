import Link from "next/link"

export default function ButtonPrimary() {
  return (
    <Link href={"/#"}>
      <button className="text-md hover:bg-blue group rounded-md bg-black px-4 py-3 text-white">
        Hire Darwin{" "}
        <span className="inline-block translate-x-0 tracking-normal transition-transform duration-200 group-hover:translate-x-1">
          -&gt;
        </span>
      </button>
    </Link>
  )
}