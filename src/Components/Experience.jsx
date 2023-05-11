import "./comp.css";

import ExperienceElements from "../ExperienceElements";
import useInView from "../hooks/useInView";
import { useEffect, useRef, useState } from "react";

function App() {
  const { setRef, inView } = useInView({ threshold: 0.35 });
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
    <div ref={ref} id="experience">
      <div className="experiences">
        <h1 className={visible ? "animateIn" : null}>
          Experience <span className="and-span"></span> Education
        </h1>
        {ExperienceElements.map((exp) => {
          return (
            <div className="experience" key={exp.id}>
              <h2
                data-after={visible ? exp.duration : null}
                className={visible ? "animateIn-white" : null}
              >
                {exp.title}
              </h2>
              <p className={visible ? "animateIn" : null}>{exp.location}</p>
              <div
                className={
                  visible ? "description animateIn-secondary" : "description"
                }
              >
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
