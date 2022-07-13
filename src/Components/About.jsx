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
        <button className="resume-btn">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
}

export default About;
