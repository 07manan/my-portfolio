import React, { useState } from "react";
import "./comp.css";

function Navbar() {
  const [shownav, setShownav] = useState(true);

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Manan
      </a>
      <div className="links" id={shownav ? "mobile-nav" : ""}>
        <a style={{ animationDelay: "200ms" }} href="#project">
          Projects
        </a>
        <a style={{ animationDelay: "400ms" }} href="#about">
          About
        </a>
        <a style={{ animationDelay: "600ms" }} href="#skills">
          skills
        </a>
        <a style={{ animationDelay: "800ms" }} href="#contact">
          contact
        </a>
      </div>
      <button onClick={() => setShownav(!shownav)}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
    </nav>
  );
}

export default Navbar;
