import React, { useState } from "react";
import "./comp.css";

function Navbar({ offsetY }) {
  const [hidenav, setHideNav] = useState(true);
  var scrollProgress = (offsetY / (window.innerHeight * 5)) * 100;

  return (
    <nav className="navbar" id="navbar">
      <p className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>
        Manan
      </p>
      <div
        onClick={() => setHideNav(!hidenav)}
        className="links"
        id={hidenav ? "mobile-nav" : ""}
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
          Exp. & Edu.
        </p>
        <p
          style={{ animationDelay: "600ms" }}
          onClick={() => window.scrollTo(0, window.innerHeight * 3 + 1)}
        >
          Skills
        </p>
        <p
          style={{ animationDelay: "800ms" }}
          onClick={() => window.scrollTo(0, window.innerHeight * 4 + 1)}
        >
          Contact
        </p>
      </div>
      <div
        id="ham"
        className={hidenav ? "" : "nav-button"}
        onClick={() => setHideNav(!hidenav)}
      >
        <div className={hidenav ? "bar1" : "bar1 cross1"}></div>
        <div className={hidenav ? "bar2" : "bar1 cross2"}></div>
        <div className={hidenav ? "bar3" : "bar1 cross3"}></div>
      </div>
      {/* <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}vw` }}
      /> */}
    </nav>
  );
}

export default Navbar;
