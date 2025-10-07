import { GitPullRequestArrowIcon } from "lucide-react";

const baseURL = process.env.NEXT_PUBLIC_URLBASE;

const response = {
  pfp: `${baseURL}/pfp/random.pngs`,
};

const options = [
  { title: "animals" },
  { title: "animes" },
  { title: "mens" },
  { title: "womans" },
];

// format json color
const formatted = JSON.stringify(response, null, 2);

// add color for text
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

export default function ApiEndpoints() {
  return (
    <>
      <div id="api-endpoints">
        <h1 className="text-2xl font-bold flex gap-2 items-center max-sm:text-xl">
          <GitPullRequestArrowIcon size={15} /> API Endpoints
        </h1>
        <div>
          <h1 className="text-xl font-semibold mt-3 flex items-center gap-2 max-sm:text-lg">
            <span className="font-mono text-green-500 bg-green-700/50 px-3 py-2 rounded-full text-sm">
              GET
            </span>
            /pfp
          </h1>
          <h2 className="text-neutral-300 mt-3 max-sm:text-sm max-sm:w-auto">
            Returns a random profile picture (image URL) in JSON format.
          </h2>
          <h3 className="text-xl font-bold mt-5 max-sm:text-lg">
            Example Request:
          </h3>
          <div className="mt-3">
            <h1 className="bg-neutral-700/70 px-5 py-2 w-fit flex items-center gap-2 rounded-xl border-2 border-neutral-700 font-mono max-sm:w-fit text-sm">
              <span className="font-mono text-green-500 bg-green-800/50 px-3 py-2 rounded-full max-sm:text-[10px]">
                GET
              </span>
              {baseURL}/pngs
            </h1>
            <h2 className="text-xl font-bold mt-5 max-sm:text-lg">
              Example Response {"("}JSON{")"}:
            </h2>
            <pre
              className="bg-neutral-700/70 border-2 border-neutral-700 w-fit px-5 py-3 rounded-xl mt-3 max-sm:text-[12px] max-sm:w-auto overflow-auto code-scroll"
              dangerouslySetInnerHTML={{ __html: highlightJson(formatted) }}
            ></pre>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-15 max-sm:text-xl">
          Optional Parameters
        </h2>
        <div>
          <h1 className="text-neutral-300 mt-3 max-sm:text-sm">
            You can optionally specify a category or style {"("}if supported
            {")"}.
          </h1>
          <h2 className="text-xl font-semibold mt-5">Example with category:</h2>
          <div>
            <h1 className="bg-neutral-700/70 px-5 py-2 w-fit flex items-center gap-2 rounded-xl border-2 border-neutral-700 font-mono mt-3 max-sm:w-auto max-sm:text-[12px]">
              <span className="font-mono text-green-500 bg-green-800/50 px-3 py-2 rounded-full text-sm">
                GET
              </span>
              {baseURL}/pngs?category=animal
            </h1>
            <h2 className="mt-5 font-semibold text-xl w-auto">
              Available categories (optional):
            </h2>
            <ul className="ml-5 mt-2 font-mono list-disc max-sm:text-sm">
              {options.map((item, index) => {
                return <li key={index}>{item.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-5">Use Case Examples</h3>
        <div>
          <h1 className="text-neutral-300 mt-3 max-sm:text-sm">
            Example in JavaScript {"("}fetch{")"}
          </h1>
          <pre
            className="bg-neutral-700/70 border-2 border-neutral-700 px-5 py-3 rounded-xl w-fit mt-3 max-sm:w-auto max-sm:text-[12px] code-scroll overflow-auto"
            dangerouslySetInnerHTML={{
              __html: highlightCode(
                `fetch("${baseURL}/pngs", { method: "GET" })\n.then(data => data.json())\n.then(response => {\n    console.log(response.pfp)\n})`
              ),
            }}
          ></pre>
        </div>
      </div>
    </>
  );
}
