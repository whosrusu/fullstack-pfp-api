"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const links = [
  { name: "home", url: "/" },
  { name: "docs", url: "/docs" },
  { name: "playground", url: "/playground" },
];

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full px-5 py-3 backdrop-blur-sm z-50 bg-black/25">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href={"/"}>Logo</Link>
        </div>
        <nav>
          <button
            className="hidden max-md:block bg-neutral-500/70  p-3 rounded-full cursor-pointer hover:scale-105 hover:bg-neutral-500/90 transition duration-300 ease-in-out"
            onClick={() => setIsMenu(!isMenu)}
          >
            {isMenu ? (
              <XIcon size={25} color="white"></XIcon>
            ) : (
              <MenuIcon size={25} color="white"></MenuIcon>
            )}
          </button>
          {/* pc */}
          <ul className="flex gap-4 items-center text-sm capitalize max-md:hidden">
            {links.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-neutral-200 hover:text-white font-semibold transition duration-300 ease-in-out"
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })}
            <li className="bg-white font-semibold px-6 py-2 rounded-sm text-black hover:bg-neutral-200 transition duration-300 ease-in-out">
              <Link href={"/playground"}>Try it now</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* mobile */}
      <div
        className={`w-full pt-3 mt-3 border-t-2 border-neutral-700 ${
          isMenu ? "flex" : "hidden"
        } flex-col space-y-5`}
        id="menu"
      >
        {links.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.url}
              className="pl-5 w-full py-3 font-semibold text-xl"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
