import React, { useEffect, useRef, useState } from "react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3Full, DiGit } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiNetlify } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import useInView from "../hooks/useInView";

function Skills() {
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

  const skills = [
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs />,
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
    <div id="skills" ref={ref}>
      <div className="skills">
        <h1 className={visible ? "animateIn" : null}>Skills</h1>
        <p className={visible ? "animateIn-secondary" : ""}>
          The skills, tools and technologies I use to bring Websites to life:
        </p>
        <div className="skill-icons">
          {skills.map((skill, i) => {
            return (
              <div
                key={skill.name + i}
                className={`${visible ? "skillIn" : null} __${i} ` + "skill"}
              >
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
