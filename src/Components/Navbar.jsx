import React, { useState } from "react";
import "./comp.css";

function Navbar() {
  const [shownav, setShownav] = useState(true);

  return (
    <nav className="navbar" id="navbar">
      <a className="navbar-brand" href="/">
        Manan
      </a>
      <div
        onClick={() => setShownav(!shownav)}
        className="links"
        id={shownav ? "mobile-nav" : ""}
      >
        <a style={{ animationDelay: "200ms" }} href="#project">
          Projects
        </a>
        <a style={{ animationDelay: "400ms" }} href="#about">
          About
        </a>
        <a style={{ animationDelay: "600ms" }} href="#experience">
          Experience
        </a>
        <a style={{ animationDelay: "800ms" }} href="#skills">
          Skills
        </a>
        <a style={{ animationDelay: "1000ms" }} href="#contact">
          Contact
        </a>
      </div>
      <div
        id="ham"
        className={shownav ? "" : "nav-button"}
        onClick={() => setShownav(!shownav)}
      >
        <div className={shownav ? "bar1" : "bar1 cross1"}></div>
        <div className={shownav ? "bar2" : "bar1 cross2"}></div>
        <div className={shownav ? "bar3" : "bar1 cross3"}></div>
      </div>
    </nav>
  );
}

export default Navbar;
