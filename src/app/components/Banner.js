export default function Banner({ value, subValue }) {
  return (
    <div className="w-full h-70 bg-neutral-800/70 flex flex-col space-y-3 justify-center items-center px-5 py-10 relative max-sm:text-center">
      <h1 className="text-4xl font-bold z-10">
        Pfp <span> </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">
          API
        </span>
        <span> </span>
        {value}
      </h1>
      <h2 className="text-sm text-neutral-300 z-10">{subValue}</h2>
      <div className="absolute bg-gradient-to-t from-black to-purple-900/50 inset-0 z-0"></div>
    </div>
  );
}
