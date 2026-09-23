import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Background } from "@/components/layout/Background";
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Education,
  Certifications,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
