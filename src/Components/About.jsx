import React from "react";

function About() {
  return (
    <div id="about">
      <div className="text">
        <h1 className="animateIn">Get to know Me</h1>
        <p className="animateIn-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam
          delectus deleniti quae officiis quo id facere, nam eos debitis quasi
          dicta deserunt magni maiores, at possimus. Ad, harum vitae?
        </p>
        <a
          href="/resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
}

export default About;
