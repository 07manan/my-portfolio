import React, { useState } from "react";
import "./comp.css";

function Navbar() {
  const [shownav, setShownav] = useState(true);

  return (
    <nav className="navbar" id="navbar">
      <p className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>
        Manan
      </p>
      <div
        onClick={() => setShownav(!shownav)}
        className="links"
        id={shownav ? "mobile-nav" : ""}
      >
        <p
          style={{ animationDelay: "200ms" }}
          onClick={() => window.scrollTo(0, window.innerHeight + 1)}
        >
          Projects
        </p>
        <p
          style={{ animationDelay: "400ms" }}
          onClick={() => window.scrollTo(0, window.innerHeight * 2 + 1)}
        >
          About
        </p>
        <p
          style={{ animationDelay: "600ms" }}
          onClick={() => window.scrollTo(0, window.innerHeight * 3 + 1)}
        >
          Exp. & Edu.
        </p>
        <p
          style={{ animationDelay: "800ms" }}
          onClick={() => window.scrollTo(0, window.innerHeight * 4 + 1)}
        >
          Skills
        </p>
        <p
          style={{ animationDelay: "1000ms" }}
          onClick={() => window.scrollTo(0, window.innerHeight * 5 + 1)}
        >
          Contact
        </p>
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
