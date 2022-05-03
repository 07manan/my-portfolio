import React from "react";

function Skills() {
  return (
    <div data-aos="zoom-out" data-aos-anchor-placement="top-bottom" id="skills">
      <h1>Skills</h1>
      <div className="bar-graph bar-graph-horizontal bar-graph-one">
        <div className="bar-one">
          <span className="skill">ReactJS</span>
          <div
            className="bar"
            data-aos="slide-right"
            data-aos-anchor-placement="top-bottom"
            data-percentage="85%"
          ></div>
        </div>
        <div className="bar-two">
          <span className="skill">ExpressJS</span>
          <div
            className="bar"
            data-aos="slide-right"
            data-aos-anchor-placement="top-bottom"
            data-percentage="75%"
          ></div>
        </div>
        <div className="bar-three">
          <span className="skill">MERN</span>
          <div
            className="bar"
            data-aos="slide-right"
            data-aos-anchor-placement="top-bottom"
            data-percentage="80%"
          ></div>
        </div>
        <div className="bar-four">
          <span className="skill">HTML</span>
          <div
            className="bar"
            data-aos="slide-right"
            data-aos-anchor-placement="top-bottom"
            data-percentage="90%"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
