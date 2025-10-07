"use client";

import { useState } from "react";
import { PlayIcon, CopyIcon, VerifiedIcon } from "lucide-react";

const baseURL = process.env.NEXT_PUBLIC_URLBASE;

export default function GettingStarted() {
  const [isCopy, setCopy] = useState(false);

  // cilpboard
  function handlerCopy() {
    const textToCopy = document.querySelector("#urlCopy");
    navigator.clipboard.writeText(textToCopy.textContent).then(() => {
      setCopy(true);

      setTimeout(() => {
        setCopy(false);
      }, 1500);
    });
  }

  return (
    <>
      {isCopy && (
        <div className="fixed bottom-5 left-[50%] transform -translate-x-[50%] z-50 bg-neutral-700/50 border-2 border-neutral-700 backdrop-blur-xl p-3 rounded-xl flex justify-center items-center gap-3">
          <VerifiedIcon size={15} />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 from-50% font-semibold">
            Copiend
          </h1>
        </div>
      )}
      <div>
        <h1
          className="text-2xl font-bold flex gap-2 items-center max-sm:text-xl"
          id="getting-started"
        >
          <PlayIcon size={15} />
          Getting Started
        </h1>
        <p className="text-neutral-300 w-150 mt-3 max-sm:text-sm max-sm:w-auto">
          The Random PFP API is free to use and does not require an API key for
          basic usage. Simply make a request to the API endpoint and you'll
          receive a random profile picture in response.
        </p>
        <div className="bg-neutral-700/70 border-2 border-neutral-700 px-5 py-3 rounded-xl mt-5 w-auot">
          <h1>
            base{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 font-bold">
              URL
            </span>
            <div className="bg-neutral-900/70 border-2 border-neutral-900 px-5 py-3 mt-3 rounded-xl relative">
              <pre className="text-sm max-sm:text-[12px]" id="urlCopy">
                {baseURL}
              </pre>
              <button
                onClick={handlerCopy}
                className="flex gap-2 justify-center items-center bg-neutral-700/70 border-2 border-neutral-700 rounded-full p-2 absolute top-1 right-3 cursor-pointer hover:rotate-360 hover:scale-105 hover:bg-neutral-700 transition-all duration-300 ease-in-out max-sm:hidden"
              >
                <CopyIcon size={15} />
              </button>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}
