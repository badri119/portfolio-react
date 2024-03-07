import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";
import { Helmet } from "react-helmet";
import { IoChevronUp } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000   
      ${isVisible ? "opacity-100" : "opacity-0"}`;
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
function App() {
  //code for pacman loading
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <main className="flex min-h-screen flex-col">
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <PacmanLoader
            color={"white"}
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <NavBar />
          <div className=" fixed w-10 h-10 rounded-full flex justify-center items-center bg-black z-10 bottom-5 right-10 transition ease-in-out delay-120 hover:bg-slate-800 hover:-translate-y-1 hover:scale-110 duration-300">
            <a href="#top">
              <IoChevronUp color="white" size={30} />
            </a>
          </div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio</title>
            <meta name="description" content="Portfolio" />
          </Helmet>
          <SocialLinks />
          <Home />
          <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <RevealOnScroll>
              <About />
            </RevealOnScroll>
          </div>
          <div className="bg-gradient-to-b from-black via-gray-900 to-gray-700">
            <RevealOnScroll>
              <Projects />
            </RevealOnScroll>
          </div>
          <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black">
            <RevealOnScroll>
              <Contact />
            </RevealOnScroll>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
