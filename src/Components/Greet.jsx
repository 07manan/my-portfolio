import React from "react";
import AnimatedLetters from "./AnimatedLetters";

import { BsChevronDown } from "react-icons/bs";

function Greet() {
  const hi = ["H", "i", "i", ",", " ", "I", " ", "a", "m"];
  const name = ["M", "a", "n", "a", "n", " ", "P", "a", "t", "e", "l", "."];
  const job = ["I", " ", "b", "u", "i", "l", "d", " "];

  const websites = ["w", "e", "b", "s", "i", "t", "e", "s", " "];
  const using = ["u", "s", "i", "n", "g", " "];
  const reactJS = ["R", "e", "a", "c", "t", "J", "S", "."];

  return (
    <div id="greet">
      <div className="intro">
        <p className="hii-p">
          <AnimatedLetters letterClass="hi" strArray={hi} idx={0} />
        </p>
        <h1>
          <AnimatedLetters letterClass="name" strArray={name} idx={9} />
        </h1>
        {window.innerWidth >= 1280 ? (
          <h2>
            <span>
              <AnimatedLetters letterClass="job" strArray={job} idx={21} />
            </span>
            <span>
              <AnimatedLetters letterClass="job" strArray={websites} idx={29} />
            </span>
            <span>
              <AnimatedLetters letterClass="job" strArray={using} idx={38} />
            </span>
            <span>
              <AnimatedLetters letterClass="job" strArray={reactJS} idx={44} />
            </span>
          </h2>
        ) : (
          <h2 className="job-mobile">I build websites using ReactJS.</h2>
        )}
        <p className={window.innerWidth >= 1280 ? "exp" : "exp-mobile"}>
          I am Undergrad student studying Electronics and communication
          Engineering(ECE) at
          <br /> Indian Institute of Information Technology, Surat. I am a
          relatively good <span>ReactJS</span> developer and
          <span> MERN-stack</span> Developer.
        </p>
        <p className="downarrow">
          <BsChevronDown
            onClick={() => window.scrollTo(0, window.innerHeight + 1)}
          />
        </p>
      </div>
    </div>
  );
}

export default Greet;
