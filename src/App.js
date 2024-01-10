import About from "./components/About";
import Contact from "./components/Contact";
import Cycling from "./components/Cycling";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import { IoChevronUp } from "react-icons/io5";
import React, { useEffect, useRef, useState } from "react";

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
  return (
    <div id="top">
      <div className=" fixed w-10 h-10 rounded-full flex justify-center items-center bg-black z-10 bottom-5 right-10 transition ease-in-out delay-120 hover:bg-slate-800 hover:-translate-y-1 hover:scale-110 duration-300 ">
        <a href="#top">
          <IoChevronUp color="white" size={30} />
        </a>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <NavBar />
      <Home />
      <SocialLinks />
      <div className="w-full bg-gradient-to-b from-black via-gray-900 to-gray-700 text-white">
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
      </div>
      <div className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white">
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
      </div>
      <div className="bg-gradient-to-b from-black via-gray-900 to-gray-700 w-full ">
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
      </div>
      <div className=" w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white  ">
        <RevealOnScroll>
          <Cycling />
        </RevealOnScroll>
      </div>
      <div className="w-full bg-gradient-to-b from-black via-gray-900 to-gray-700 p-4 text-white">
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </div>
      <div className="w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white  ">
        <RevealOnScroll>
          <Footer />
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default App;
