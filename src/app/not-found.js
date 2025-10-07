import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-white to-purple-300">
            404
          </span>{" "}
          - Page Not Found
        </h1>
        <h2 className="text-sm text-neutral-300 mt-3">
          The page you are looking for does not exist.
        </h2>
        <Link
          href={"/"}
          className="text-xl font-bold px-5 py-3 rounded-xl bg-neutral-700/70 border-2 border-neutral-700 mt-5 hover:bg-neutral-700 hover:-translate-y-1 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
      <div className="bg-purple-500 w-screen h-20 absolute bottom-0 left-0 blur-[500px]"></div>
      <div className="bg-purple-500 w-screen h-10 absolute bottom-0 left-0 blur-[300px]"></div>
      <div className="bg-purple-500 w-screen h-5 absolute bottom-0 left-0 blur-[300px]"></div>
    </>
  );
}
