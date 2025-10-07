"use client";

import { useState, useRef, useEffect } from "react";
import {
  NetworkIcon,
  ArrowBigDownDash,
  CopyIcon,
  VerifiedIcon,
} from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_URLBASE;

const callApiMethod = [
  { name: "/api/pngs" },
  { name: "/api/gifs" },
  { name: "/api/banners" },
];

export default function CallApi() {
  const [isDropDown, setDropDown] = useState(false);
  const [isCopy, setCopy] = useState(false);
  const [isUrl, setUrl] = useState("/api/pngs");
  const [isResponse, setResponse] = useState({
    pfp: "exemple",
  });
  const dropdownRef = useRef(null);

  // format json color
  const formatted = JSON.stringify(isResponse, null, 2);

  // cilpboard
  function handlerCopy() {
    const textToCopy = document.querySelector("#urlcopy");
    navigator.clipboard.writeText(textToCopy.textContent).then(() => {
      setCopy(true);

      setTimeout(() => {
        setCopy(false);
      }, 1500);
    });
  }

  // click outside for close dropdown
  useEffect(() => {
    function dropdownClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDown(false);
      }
    }
    document.addEventListener("mousedown", dropdownClickOutside);
    return () => {
      document.removeEventListener("mousedown", dropdownClickOutside);
    };
  }, []);

  // add color for json
  const highlightJson = (json) => {
    return json.replace(
      /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|\b\d+\b)/g,
      (match) => {
        let cls = "text-gray-300"; // default
        if (/^"/.test(match)) {
          if (/:$/.test(match)) cls = "text-yellow-400"; // key
          else cls = "text-green-400"; // string
        } else if (/true|false/.test(match)) cls = "text-purple-400"; // boolean
        else if (/null/.test(match)) cls = "text-gray-500 italic"; // null
        else cls = "text-blue-400"; // number
        return `<span class="${cls}">${match}</span>`;
      }
    );
  };

  // send req
  function sendReqests() {
    fetch(baseUrl + isUrl, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    })
      .then((data) => data.json())
      .then((response) => {
        setResponse(response);
      });
  }

  return (
    <>
      {isCopy && (
        <div className="fixed bottom-2 left-[50%] transform -translate-x-[50%] z-50 bg-neutral-700/50 border-2 border-neutral-700 backdrop-blur-xl p-3 rounded-xl flex justify-center items-center gap-3">
          <VerifiedIcon size={15} />
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 from-50% font-semibold">
            Copiend
          </h1>
        </div>
      )}
      <div className="flex justify-center items-start space-x-5 max-lg:flex-col max-lg:space-y-3 max-lg:items-center max-lg:space-x-0">
        {/* config call api */}
        <div className="bg-neutral-800/70 w-100 p-5 border-2 border-neutral-700 rounded-xl">
          <div className="flex flex-col gap-3">
            {/* method */}
            <h1 className="font-bold  text-sm">Select Endpoint</h1>
            {/* dropdown menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="bg-neutral-700/60 cursor-pointer border-2 border-neutral-700 rounded-md px-5 py-2 flex gap-2 justify-center items-center hover:bg-neutral-700 transition duration-300"
                onClick={() => setDropDown(!isDropDown)}
              >
                <span className="font-mono text-green-500">GET</span>
                {isUrl}
                <ArrowBigDownDash
                  size={15}
                  className={`transform ${
                    isDropDown ? "-rotate-90" : ""
                  } transition-all duration-300 ease-in-out`}
                />
              </button>
              <ul
                className={`absolute top-10 left-0 bg-neutral-800/70 backdrop-blur-sm rounded-xl border-2 border-neutral-700 ${
                  isDropDown ? "block" : "hidden"
                }`}
              >
                {callApiMethod.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={`pl-5 pr-10 py-2 cursor-pointer ${
                        index == 0 ? "rounded-t-xl" : ""
                      } ${
                        index == callApiMethod.length - 1 ? "rounded-b-xl" : ""
                      } hover:bg-neutral-500/50 transition duration-300`}
                      onClick={() => {
                        setUrl(item.name);
                        setDropDown(false);
                      }}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* call api button */}
          <button
            className="w-full flex justify-center items-center gap-3 bg-white text-black px-5 py-2 rounded-xl mt-5 cursor-pointer hover:bg-white/90 transition duration-300 active:translate-y-1"
            onClick={sendReqests}
          >
            <NetworkIcon size={15} /> Send Req.
          </button>
        </div>
        {/* result */}
        <div className="bg-neutral-800/70 p-5 border-2 border-neutral-700 rounded-xl w-100">
          <div className="flex flex-col space-y-3 justify-start">
            <h1 className="font-semibold text-sm">
              Endpoint <span> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">
                URL
              </span>
            </h1>
            <div className="relative bg-neutral-800 border-2 border-neutral-700 px-3 py-2 rounded-xl">
              <button
                onClick={handlerCopy}
                className="bg-neutral-700/70 p-2 flex justify-center items-center rounded-full absolute top-1 right-3 hover:scale-105 hover:bg-neutral-700 hover:rotate-360 transition-all duration-300 ease-in-out cursor-pointer max-sm:hidden"
              >
                <CopyIcon size={15} />
              </button>
              <pre id="urlcopy">{baseUrl + isUrl}</pre>
            </div>
            <div className="bg-neutral-700 rounded-xl p-5 h-50 overflow-x-auto code-scroll">
              <pre
                className="text-sm font-mono text-white whitespace-pre-wrap break-words select-text"
                dangerouslySetInnerHTML={{ __html: highlightJson(formatted) }}
              ></pre>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
