import "./comp.css";

import ExperienceElements from "../ExperienceElements";
// import useInView from "../hooks/useInView";
// import { useEffect, useRef } from "react";

function App() {
  // const { setRef, inView } = useInView({ threshold: 0.25 });
  // const ref = useRef();
  // useEffect(() => {
  //   console.log(ref);
  //   setRef(ref);
  // }, []);
  // if (inView) {
  //   console.log("in view");
  // }
  // useEffect(() => {
  //   console.log(inView);
  // }, [inView]);

  return (
    <div id="experience">
      <div className="experiences">
        <h1 className="animateIn">
          Experience <span className="and-span"></span> Education
        </h1>
        {/* {inView && <div>in view</div>} */}
        {ExperienceElements.map((exp) => {
          return (
            <div className="experience" key={exp.id}>
              <h2 data-after={exp.duration} className="animateIn-white">
                {exp.title}
              </h2>
              <p className="animateIn">{exp.location}</p>
              <div className="description animateIn-secondary">
                {exp.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
