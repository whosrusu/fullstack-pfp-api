"use client";

import { ChevronRight, BookOpenText, LockOpen, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_URLBASE;

export default function About() {
  const [isImg, setImg] = useState(
    "https://i.pinimg.com/736x/c0/e2/2b/c0e22b587011118836f7e7aea22d2666.jpg"
  );
  // func for random pfp
  function tryItApi(event) {
    return fetch(`${baseUrl}/api/pngs`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        setImg(response.pfp);
      });
  }

  return (
    <main>
      <div className="flex justify-between items-center px-5 w-full h-[90vh] max-xl:flex max-xl:flex-col-reverse max-lg:justify-center max-lg:px-5 max-xl:mt-25">
        <div className="space-y-3">
          {/* about */}
          <h1 className="text-5xl font-semibold max-xl:text-center max-lg:text-4xl max-lg:mt-3 max-md:text-3xl max-sm:text-2xl">
            AI Profile Picture Generator
          </h1>
          <h2 className="text-xl text-neutral-200 w-3xl max-lg:text-[17px] max-xl:text-center max-lg:px-10 max-lg:w-150 max-md:text-[15px] max-md:w-100">
            Create stunning, personalized profile pictures in seconds! 🎨✨
            Upload a photo, choose your style, and let AI transform your image
            into a unique avatar that stands out everywhere – from Discord to
            LinkedIn. Fast, creative, and fully customizable – your new look is
            just one click away! 🚀
          </h2>
          {/* buttons */}
          <div className="flex flex-row space-x-5 mt-3 max-xl:justify-center">
            <Link
              href="/playground"
              className="flex items-center gap-2 bg-purple-700 text-white font-semibold px-10 max-sm:px-5 py-3 rounded-sm cursor-pointer shadow-[-20px_50px_900px_59px_#c43bff] max-xl:shadow-none shadow-purple-700 hover:bg-purple-800 transition duration-300"
            >
              Try the API <ChevronRight></ChevronRight>
            </Link>
            <Link
              href={"/docs"}
              className="flex items-center gap-2 border-white border-2 px-10 max-sm:px-5 py-3 rounded-sm cursor-pointer shadow-white font-semibold hover:border-white/70 transition duration-300"
            >
              <BookOpenText size={18}></BookOpenText>API Docs
            </Link>
          </div>
          {/* tags */}
          <div className="mt-5">
            <ul className="flex space-x-3 max-xl:justify-center max-xl:mb-20">
              <li className="flex items-center gap-2 text-sm">
                <LockOpen color="#c43bff" size={15}></LockOpen> No API Key
                Required
              </li>
              <li className="flex items-center gap-2 text-sm">
                <DollarSign color="#c43bff" size={15}></DollarSign> Free to Use
              </li>
            </ul>
          </div>
        </div>

        {/* trial */}
        <div className="flex flex-col items-center gap-5 min-xl:mr-5">
          <div className="relative w-[300px] h-[300px] bg-neutral-500 rounded-full shadow-[100px_-100px_900px_#c43bff] shadow-purple-800 overflow-hidden max-lg:w-60 max-lg:h-60 max-md:w-50 max-md:h-50">
            <img
              id="tryRandomPfp"
              src={isImg}
              className="flex justify-center items-center w-full h-full object-cover"
            ></img>
          </div>
          <button
            className="bg-purple-700 px-10 py-3 rounded-sm font-bold hover:bg-purple-800 transition duration-300 ease-in-out mb-5 active:scale-90 cursor-pointer"
            onClick={tryItApi}
          >
            Try Now
          </button>
        </div>
      </div>
    </main>
  );
}
