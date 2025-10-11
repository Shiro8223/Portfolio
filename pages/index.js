import { useEffect } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects"; // ✅ correct
import Navbar from "../components/Navbar"; 
import Contact from "../components/Contact";
import AboutMe from "../components/aboutMe";
import Blog from "../components/Blog";
// Then use <Contact /> wherever!


export default function Home() {
  return (
    <main className="bg-white text-black"> {/* ← Add pt-24 or similar */}
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
