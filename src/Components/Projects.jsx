import React, { useEffect, useRef, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import useInView from "../hooks/useInView";

function Projects() {
  const { setRef, inView } = useInView({ threshold: 0.5 });
  const [visible, setVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    setRef(ref);
  }, []);
  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  return (
    <div id="project" ref={ref}>
      <h1 className={visible ? "animateIn" : ""}>Projects</h1>
      <div className="project project-olx">
        <h2 className={visible ? "animateIn-white" : ""}>OLX Clone</h2>
        <div
          className={visible ? "animateIn" : ""}
          style={{
            display: "flex",
            width: "3.5rem",
            justifyContent: "space-between",
          }}
        >
          <a
            href="https://github.com/07manan/olx"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={20} />
          </a>
          <br />
          <a
            href="https://olx-clone-manan.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
        <p className={visible ? "animateIn-secondary" : ""}>
          A project made with <span>MERN-Stact</span> (<span>ReactJS</span> for
          frontend and <span>ExpressJS</span> for backend and{" "}
          <span>MongoDB</span> as Database).
          <br /> Full functional olx clone where user can login, register, list
          an item for selling, contact other sellers to buy their items.
        </p>
      </div>
      <div className="project project-admissionsathi">
        <h2 className={visible ? "animateIn-white" : ""}>Admission Sathi</h2>
        <div
          className={visible ? "animateIn" : ""}
          style={{
            display: "flex",
            width: "3.5rem",
            justifyContent: "space-between",
          }}
        >
          <a
            href="https://github.com/07manan/admissionsathi"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={20} className="icon" />
          </a>
          <br />
          <a
            href="https://admissioncouncelling.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
        <p className={visible ? "animateIn-secondary" : ""}>
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
