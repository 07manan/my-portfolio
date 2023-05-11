import React from "react";
import "./App.css";

import Greet from "./Components/Greet";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
// import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Experience from "./Components/Experience";

function App() {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar offsetY={offsetY} />
      <div className="app">
        <Greet />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
