import { BotIcon, BuildingIcon, Dices } from "lucide-react";

const exemplesTable = [
  {
    icon: <BotIcon></BotIcon>,
    title: "Discord Bot",
    description:
      "Want fresh Discord profile pics every time? Use our Random PFP API to generate unique avatars on demand — choose a style, pick a color theme, or let the API return a surprise. Perfect for bots, onboarding flows, and auto-generated user avatars. Plug it in and refresh your users profiles with one call.",
  },
  {
    icon: <BuildingIcon></BuildingIcon>,
    title: "Creative Applications",
    description:
      "Build and explore creative tools powered by AI and modern web tech. From image generators to visual design helpers, Creative Applications is a space where imagination meets functionality. Whether you’re testing APIs, designing UIs, or experimenting with visuals, our platform helps you turn ideas into interactive, shareable experiences.",
  },
  {
    icon: <Dices></Dices>,
    title: "Random PFP API",
    description:
      "Instantly generate unique and stylish profile pictures for your app or Discord bot. The Random PFP API provides high-quality avatars in different styles and colors — perfect for placeholder images, auto-generated profiles, or creative experiments. With one simple API call, you can give every user a fresh identity.",
  },
];

export default function Examples() {
  return (
    <div>
      {/* title */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="bg-purple-700/50 py-2 shadow-[10px_25px_500px_50px_#c43bff] flex justify-center w-25 rounded-4xl text-[15px] font-bold">
          Exemples
        </h3>
        <h1 className="font-semibold text-3xl mt-3 max-lg:text-center max-lg:text-2xl max-md:text-2xl">
          How Developers Are Using Pfps API
        </h1>
        <h2 className="text-neutral-300 text-sm">
          For what purposes could you use our APIs?
        </h2>
        <div className="mt-10 px-5 grid grid-cols-3 gap-5 w-full max-lg:flex max-lg:flex-col">
          {exemplesTable.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-start items-start bg-neutral-900/70 border-2 border-neutral-800/70 px-7 py-5 rounded-xl hover:bg-neutral-800/70 hover:-translate-y-2 transition-all duration-300 ease-in-out"
              >
                <div className="bg-purple-800/70 w-15 h-15 flex justify-center items-center rounded-full mb-5">
                  {item.icon}
                </div>
                <div className="text-xl font-semibold font-semibol mb-3">
                  {item.title}
                </div>
                <div className="text-sm text-neutral-200">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
