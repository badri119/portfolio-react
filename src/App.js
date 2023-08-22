import About from "./components/About";
import Contact from "./components/Contact";
import Cycling from "./components/Cycling";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
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
