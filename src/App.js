import About from "./components/About";
import Contact from "./components/Contact";
import Cycling from "./components/Cycling";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import {Helmet} from "react-helmet";
import {IoChevronUp} from 'react-icons/io5'

function App() {
  return (
    <div id='top'>
      <div className=" fixed w-10 h-10 rounded-full flex justify-center items-center bg-black z-10 bottom-5 right-10"><a href="#top"><IoChevronUp color="white" size={30}/></a></div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Portfolio</title>
                <meta name="description" content="Portfolio" />
            </Helmet>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/> 
      <Cycling/>
      <Contact/>
      <SocialLinks/>
    
    </div>
  );
}

export default App;
