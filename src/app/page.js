import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Examples from "./components/Exemple";
import Docs from "./components/Docs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Examples></Examples>
      <Docs></Docs>
      <Footer></Footer>
    </>
  );
}
