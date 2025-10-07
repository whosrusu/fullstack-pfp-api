"use client";

import Link from "next/link";
import { useState } from "react";

const ourApi = [
  {
    name: "pngs",
    description: "Get static PNG images for quick, clean visuals.",
  },
  { name: "gifs", description: "Access ready-to-use animated GIFs." },
  {
    name: "banners",
    description: "Generate banners for promos and announcements.",
  },
];

// add color for js
const highlightCode = (code) => {
  let html = code;

  // Highlight keywords
  html = html.replace(
    /\b(import|from|export|return|const|let|var|async|await|function|if|else|new|try|catch|throw)\b/g,
    '<span class="text-purple-500 font-semibold">$1</span>'
  );

  // Highlight strings
  html = html.replace(
    /(['"`])(?:(?=(\\?))\2.)*?\1/g,
    '<span class="text-green-500">$&</span>'
  );

  // Highlight console.log
  html = html.replace(
    /\b(console)\.(log|error|warn|info)/g,
    '<span class="text-blue-400">$1</span>.<span class="text-yellow-400">$2</span>'
  );

  // Highlight fetch
  html = html.replace(/\b(fetch)\b/g, '<span class="text-red-400">$1</span>');

  // Highlight method
  html = html.replace(
    /\b(method)\b/g,
    '<span class="text-yellow-400">$1</span>'
  );

  // Highlight then
  html = html.replace(/\b(then)\b/g, '<span class="text-red-400">$1</span>');

  // Highlight =>
  html = html.replace(/=>/g, '<span class="text-green-400">=&gt;</span>');

  //   Highlight :
  html = html.replace(/:/g, '<span class="text-gray-400">:</span>');

  // Highlight parentheses, braces, brackets (optional)
  html = html.replace(
    /([\(\)\[\]\{\}])/g,
    '<span class="text-gray-400">$1</span>'
  );

  return html;
};

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

export default function Docs() {
  // exemples code
  const apiPngsCode = `fetch("api/pngs", { method: "GET" })
.then(response => response.json()) 
.then(data => { 
 console.log(data.pfp); 
}`;
  const apiGifsCode = `fetch("api/gifs", { method: "GET" })
.then(response => response.json()) 
.then(data => { 
 console.log(data.gif); 
}`;
  const apiBannersCode = `fetch("api/bannrs", { method: "GET" })
.then(response => response.json()) 
.then(data => { 
 console.log(data.banner); 
}`;

  // response our api
  const responsePngs = {
    pfp: "exemple",
  };
  const responseGifs = {
    gif: "here is a gif",
  };
  const responseBanners = {
    banner: "banner url",
  };

  const [previewCode, setPreviewCode] = useState(apiPngsCode);
  const [isResponse, setResponse] = useState(responsePngs);

  // format json color
  const formatted = JSON.stringify(isResponse, null, 2);

  return (
    <div className="mt-50 px-5 grid grid-cols-2 space-x-3 max-lg:flex max-lg:flex-col max-lg:space-y-3">
      <div>
        <h1 className="text-sm text-neutral-300">Documentation</h1>
        <h2 className="text-4xl font-bold max-sm:text-2xl">
          Simple to implement, powerful to use
        </h2>
        <h3 className="text-xl text-neutral-300 max-sm:text-[15px] mt-2">
          Our API is RESTful and returns JSON, making it easy to integrate with
          any application.
        </h3>
        {/* how to use api/png */}
        <div className="mt-5 flex flex-col space-y-3">
          {/* list our api */}
          {ourApi.map((item, index) => {
            return (
              <div
                onClick={() => {
                  if (item.name == "gifs") {
                    setPreviewCode(apiGifsCode);
                    setResponse(responseGifs);
                  } else if (item.name == "banners") {
                    setPreviewCode(apiBannersCode);
                    setResponse(responseBanners);
                  } else {
                    setPreviewCode(apiPngsCode);
                    setResponse(responsePngs);
                  }
                }}
                key={index}
                className="bg-neutral-800/70 border-2 border-neutral-700 px-3 py-5 rounded-2xl cursor-pointer hover:-translate-y-1 hover:bg-neutral-800 transition-all duration-300 ease-in-out"
              >
                <h1 className="font-bold">
                  <span className="text-sm font-semibold bg-green-500/70 px-2 py-1 rounded-2xl mr-2">
                    GET
                  </span>
                  api/{item.name}
                </h1>
                <h2 className="text-neutral-300 text-sm mt-2">
                  {item.description}
                </h2>
              </div>
            );
          })}

          {/* button */}
          <Link
            href={"#soon"}
            className="py-2 border-2 border-neutral-500 rounded-xl w-50 text-sm text-center hover:bg-neutral-800 hover:border-neutral-400 transition duration-300 ease-in-out"
          >
            View Full Docs
          </Link>
        </div>
      </div>
      {/* tut script */}
      {/* panel coding */}
      <div className="bg-neutral-800/70 border-2 border-neutral-700 px-5 py-3 rounded-2xl max-sm:text-sm max-sm:overflow-auto code-scroll h-fit">
        {/* navbar */}
        <div
          className="flex space-x-3 border-b-2 border-neutral-500 pb-3
        "
        >
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        </div>
        {/* exemples code */}
        <div className="mt-3">
          <pre
            className="text-neutral-200 mb-5"
            dangerouslySetInnerHTML={{
              __html: highlightCode(previewCode),
            }}
          ></pre>
          <h1 className="text-sm text-neutral-300 pt-5">Response:</h1>
          {/* result */}
          <pre
            className="mt-3"
            dangerouslySetInnerHTML={{ __html: highlightJson(formatted) }}
          ></pre>
        </div>
      </div>
    </div>
  );
}
