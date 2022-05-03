import React from "react";

function Projects() {
  return (
    <div id="project">
      <h1>Projects</h1>
      <div data-aos="fade-right" className="project project-olx">
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
          A project made with <span>MERN-Stact</span> (<span>ReactJS</span> for
          frontend and <span>ExpressJS</span> for backend and{" "}
          <span>MongoDB</span> as Database).
          <br /> Full functional olx clone where user can login, register, list
          an item for selling, contact other sellers to buy their items.
        </p>
      </div>
      <div data-aos="fade-left" className="project project-result-manager">
        <h2>Result Manager</h2>
        <a
          href="https://github.com/07manan/result-management"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo link
        </a>
        <br />
        <p>
          A project made with <span>MERN-Stact</span> (<span>ReactJS</span> for
          frontend and <span>ExpressJS</span> for backend and{" "}
          <span>MongoDB</span> as Database).
          <br /> Full functional result manager where faculty can login, add
          student data(Roll no. and DOB so that they can login), upload results
          for every type of exam.
        </p>
      </div>
      <div data-aos="fade-right" className="project project-admissionsathi">
        <h2>Admission Sathi</h2>
        <a
          href="https://github.com/07manan/admissionsathi"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo link
        </a>
        <br />
        <a
          href="https://jayshreeram.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Website link
        </a>
        <p>
          A project made with pure <span>ReactJS</span>, with integrated{" "}
          <span>Google Form</span> to contact owner of the webiste
          <br /> Full functional career councelling webiste where students can
          check the websites of different colleges and get councelling after
          12th
        </p>
      </div>
    </div>
  );
}

export default Projects;
