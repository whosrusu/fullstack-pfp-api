import { NotebookIcon } from "lucide-react";

export default function Notes() {
  return (
    <>
      <div id="notes">
        <h1 className="text-2xl font-bold flex items-center gap-2 max-sm:text-xl">
          {" "}
          <NotebookIcon size={15} />
          Notes
        </h1>
        <p className="text-neutral-300 mt-3 max-sm:text-sm max-sm:w-auto">
          No authentication or API key is required. <br /> Rate limits may apply
          (e.g., 60 requests/min). <br /> For best performance, cache results
          when possible.
        </p>
      </div>
    </>
  );
}
