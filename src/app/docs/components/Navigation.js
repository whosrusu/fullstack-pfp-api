import Link from "next/link";

const attribute = [
  { name: "Introduction", url: "#introduction" },
  { name: "Getting Started", url: "#getting-started" },
  { name: "API Endpoints", url: "#api-endpoints" },
  { name: "Notes", url: "#notes" },
];

export default function Navigation() {
  return (
    <>
      <nav className="sticky pl-10">
        <ul className="flex flex-col space-y-3">
          {attribute.map((item, index) => {
            return (
              <li
                key={index}
                className="text-sm text-neutral-400 font-semibold capitalize hover:text-neutral-300 transition-all duration-300"
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        {/* line */}
        <div className="absolute top-0 left-0 bg-purple-700/70 w-1 h-full rounded-full shadow-purple-700 shadow-2xl blur-[2px]"></div>
      </nav>
    </>
  );
}
