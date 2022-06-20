import "./comp.css";

import ExperienceElements from "../ExperienceElements";

function App() {
  return (
    <div id="experience">
      <div className="experiences">
        <h1 className="animateIn">
          Experience <span className="and-span"></span> Education
        </h1>
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
