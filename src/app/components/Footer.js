import Link from "next/link";
import { LinkIcon, ContactIcon } from "lucide-react";

const links = [
  { name: "home", url: "#home" },
  { name: "docs", url: "#docs" },
  { name: "playground", url: "#playground" },
];

const linksContact = [
  { name: "instagram", url: "https://instagram.com/whosrusu" },
  { name: "github", url: "https://github.com/whosrusu" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 mt-30 shadow-[0px_-40px_50px_oklch(20.5%_0_0)]">
      {/* links */}
      <div className="flex space-x-5">
        {/* href */}
        <div className="flex flex-col space-y-3  px-5 py-10">
          <h1 className="text-neutral-200 flex gap-2 items-center">
            <LinkIcon size={15}></LinkIcon>Links
          </h1>
          <ul className="flex flex-col space-x-5">
            {links.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-sm text-neutral-300 hover:text-white transition duration-300 ease-in-out capitalize"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* contact */}
        <div className="flex flex-col space-y-3 py-10">
          <h1 className="text-neutral-200 flex gap-2 items-center">
            <ContactIcon size={15}></ContactIcon> Contact
          </h1>
          <ul>
            {linksContact.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-sm text-neutral-300 hover:text-white transition duration-300 ease-in-out capitalize"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* credit */}
      <div>
        <h5 className="text-sm text-neutral-400 text-center pb-5">
          &copy; 2025 Pfps API <span className="text-green-500">Free</span> for
          everyone, forever.
        </h5>
      </div>
    </footer>
  );
}
