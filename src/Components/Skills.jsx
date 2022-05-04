import React from "react";

function Skills() {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" id="skills">
      <div className="skills">
        <h1>Skills</h1>
        <div data-aos="fade-right" className="skill">
          <div className="skillname">ReactJS</div>
          <div className="skill-lvl react-lvl">
            <div className="react-bar">8.5/10</div>
          </div>
        </div>

        <div data-aos="fade-left" className="skill">
          <div className="skillname">ExpressJS</div>
          <div className="skill-lvl express-lvl">
            <div className="express-bar">7.5/10</div>
          </div>
        </div>

        <div data-aos="fade-right" className="skill">
          <div className="skillname">MERN</div>
          <div className="skill-lvl mern-lvl">
            <div className="mern-bar">8/10</div>
          </div>
        </div>

        <div data-aos="fade-left" className="skill">
          <div className="skillname">HTML</div>
          <div className="skill-lvl html-lvl">
            <div className="html-bar">9/10</div>
          </div>
        </div>

        <div data-aos="fade-right" className="skill">
          <div className="skillname">JavaScript</div>
          <div className="skill-lvl js-lvl">
            <div className="js-bar">7.5/10</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function Skills() {
//   return (
//     <div data-aos="zoom-out" data-aos-anchor-placement="top-bottom" id="skills">
//       <h1>Skills</h1>
//       <div className="bar-graph bar-graph-horizontal bar-graph-one">
//         <div className="bar-one">
//           <span className="skill">ReactJS</span>
//           <div
//             className="bar"
//             data-aos="slide-right"
//             data-aos-anchor-placement="top-bottom"
//             data-percentage="85%"
//           ></div>
//         </div>
//         <div className="bar-two">
//           <span className="skill">ExpressJS</span>
//           <div
//             className="bar"
//             data-aos="slide-right"
//             data-aos-anchor-placement="top-bottom"
//             data-percentage="75%"
//           ></div>
//         </div>
//         <div className="bar-three">
//           <span className="skill">MERN</span>
//           <div
//             className="bar"
//             data-aos="slide-right"
//             data-aos-anchor-placement="top-bottom"
//             data-percentage="80%"
//           ></div>
//         </div>
//         <div className="bar-four">
//           <span className="skill">HTML</span>
//           <div
//             className="bar"
//             data-aos="slide-right"
//             data-aos-anchor-placement="top-bottom"
//             data-percentage="90%"
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Skills;
