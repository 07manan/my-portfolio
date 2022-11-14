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
        {offsetY >= 0 && offsetY <= window.innerHeight ? <Greet /> : null}
        {offsetY >= window.innerHeight && offsetY <= window.innerHeight * 2 ? (
          <Projects />
        ) : null}
        {offsetY >= window.innerHeight * 2 &&
        offsetY <= window.innerHeight * 3 ? (
          // <About />
          <Experience />
        ) : null}
        {offsetY >= window.innerHeight * 3 &&
        offsetY <= window.innerHeight * 4 ? (
          // <Experience />
          <Skills />
        ) : null}
        {offsetY >= window.innerHeight * 4 &&
        offsetY <= window.innerHeight * 5 ? (
          // <Skills />
          <Contact />
        ) : null}
        {/* {offsetY >= window.innerHeight * 5 ? <Contact /> : null} */}
        <Footer />
      </div>
    </>
  );
}

export default App;
