import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Navigation from "./components/Navigation";
import Introduction from "./components/Introduction";
import Footer from "../components/Footer";
import GettingStarted from "./components/GettingStarted";
import ApiEndpoints from "./components/ApiEndpoints";
import Notes from "./components/Notes";

export default function Docs() {
  return (
    <>
      <Navbar />
      <Banner
        value={"Documentation"}
        subValue={
          "Complete reference guide to integrate fortune telling into your applications"
        }
      />
      {/* preview docs */}
      <div className="flex justify-around w-full max-md:justify-center max-md:flex-col px-5">
        <div className="sticky top-70 h-screen max-md:hidden">
          <Navigation />
        </div>
        <div className="flex flex-col space-y-15">
          <Introduction />
          <GettingStarted />
          <ApiEndpoints />
          <Notes />
        </div>
      </div>
      <Footer />
    </>
  );
}
