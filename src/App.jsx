import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useRef, useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const rootRef = useRef(null);

  let getRatio = (el) => {
    return window.innerHeight / (window.innerHeight + el.offsetHeight);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".section-parallax").forEach((section, i) => {

        gsap.fromTo(
          section,
          {
            backgroundPosition: () =>
              i
                ? `50% ${-window.innerHeight * getRatio(section)}px`
                : "50% 0px",
          },
          {
            backgroundPosition: () =>
              `50% ${window.innerHeight * (1 - getRatio(section))}px`,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: () => (i ? "top bottom" : "top top"),
              end: "bottom top",
              scrub: true,
              // markers: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={rootRef}>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
