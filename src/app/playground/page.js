import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CallApi from "./components/CallApi";

export default function Playground() {
  return (
    <>
      <Navbar></Navbar>
      <Banner
        value={"Playground"}
        subValue={"Test the Pfp API endpoints diectly in ur browser"}
      ></Banner>
      <CallApi></CallApi>
      <Footer></Footer>
    </>
  );
}
