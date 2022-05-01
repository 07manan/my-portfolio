import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import "./comp.css";

function Navbar() {
  const [shownav, setShownav] = useState(false);

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Manan
      </a>
      <div className="links" id={shownav ? "mobile-nav" : ""}>
        <a style={{ animationDelay: "200ms" }} href="/about">
          About
        </a>
        <a style={{ animationDelay: "400ms" }} href="/projects">
          Projects
        </a>
        <a style={{ animationDelay: "600ms" }} href="/skills">
          skills
        </a>
        <a style={{ animationDelay: "800ms" }} href="/contact">
          contact
        </a>
      </div>
      <button onClick={() => setShownav(!shownav)}>open</button>
    </nav>
  );
}

export default Navbar;
