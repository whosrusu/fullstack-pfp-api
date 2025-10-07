import { ListStartIcon } from "lucide-react";

export default function Introduction() {
  return (
    <>
      <div>
        <h1
          className="text-2xl font-bold flex gap-2 items-center max-sm:text-xl"
          id="introduction"
        >
          <ListStartIcon size={15} />
          Introduction
        </h1>
        <p className="text-neutral-300 w-150 mt-3 max-sm:text-sm max-sm:w-auto">
          The Random PFP Generator API provides a quick and easy way to retrieve
          random profile pictures {"("}PFPs{")"} for use in applications,
          websites, Discord bots, and more. Whether you're setting up default
          avatars or just want to add a bit of randomness and personality, this
          API offers a wide variety of PFP styles.
        </p>
        <p className="text-neutral-300 w-150 mt-10 max-sm:text-sm max-sm:w-auto">
          This API is RESTful and returns either a direct image or a JSON object
          containing the image URL, making it easy to integrate into any
          programming language or framework.
        </p>
      </div>
    </>
  );
}
