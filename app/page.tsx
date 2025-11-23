import { Metadata } from "next";
import Image from "next/image";
// import Footer from "./components/Footer";
// import HomePage from "./components/HomePage";
// import NavBar from "./components/Navbar";
import Link from "next/link";
import HomePage from "./components/HomePage";

export const metadata: Metadata = {
  title: "Home",
  description: "Cinematic Wedding & Event Videography and FPV Drone Photography in Birmingham. Capturing your special moments with unique aerial perspectives.",
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
