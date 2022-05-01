import React from "react";

function Projects() {
  return (
    <div id="project">
      <h1>Projects</h1>
      <div className="project project-olx">
        <h2>OLX Clone</h2>
        <a
          href="https://github.com/07manan/olx"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo link
        </a>
        <br />
        <a
          href="https://olx-clone-manan.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Website link
        </a>
        <p>
          A project made with MERN-Stact (ReactJS for frontend and ExpressJS for
          backend and MongoDB as Database).
          <br /> Full functional olx clone where user can login, register, list
          an item for selling, contact other sellers to buy their items.
        </p>
      </div>
    </div>
  );
}

export default Projects;
