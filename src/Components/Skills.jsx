import React from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3Full, DiGit, DiSass } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiNetlify } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "HTML",
      icon: <AiFillHtml5 />,
    },
    {
      name: "CSS",
      icon: <DiCss3Full />,
    },
    {
      name: "Github",
      icon: <AiFillGithub />,
    },
    {
      name: "Git",
      icon: <DiGit />,
    },
    {
      name: "SASS",
      icon: <DiSass />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "NodeJS",
      icon: <IoLogoNodejs />,
    },
    {
      name: "Netlify",
      icon: <SiNetlify />,
    },
  ];

  return (
    <div id="skills">
      <div className="skills">
        <h1 className="animateIn">Skills</h1>
        <p className="animateIn-secondary">
          The skills, tools and technologies I use to bring Websites to life:
        </p>
        <div className="skill-icons">
          {skills.map((skill, i) => {
            return (
              <div key={skill.name + i} className={`skill __${i} `}>
                {skill.icon}
                <h2 style={{ fontWeight: "500" }}>{skill.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
