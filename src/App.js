import { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Greet from "./Components/Greet";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";

function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Navbar />
      <div className="app">
        <Greet />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
