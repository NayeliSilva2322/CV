import { useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Research from "../components/sections/Research";
import ContactCV from "../components/sections/ContactCV";

export default function Home() {
  // Si llegamos aquí desde otra página con un hash (ej. /#experiencia),
  // hacemos scroll hasta esa sección una vez que el layout está listo.
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const raf = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Research />
      <ContactCV />
    </>
  );
}
