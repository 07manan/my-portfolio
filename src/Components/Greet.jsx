import React from "react";
import AnimatedLetters from "./AnimatedLetters";

import { BsMouse } from "react-icons/bs";

function Greet() {
  const hi = "Hii, I am";
  const name = "Manan Patel.";
  const tagLine = "a passionate Software Developer.";
  let ind = hi.length + name.length - 1;
  let isMobile = window.innerWidth < 1280;

  return (
    <div id="greet" data-is-mobile={isMobile}>
      <div className="intro">
        <p className="hii-p">
          <AnimatedLetters letterClass="hi" word={hi} idx={0} />
        </p>
        <h1>
          <AnimatedLetters letterClass="name" word={name} idx={9} />
        </h1>
        {window.innerWidth >= 1280 ? (
          <h2>
            {tagLine.split(" ").map((word, k) => {
              let i = ind;
              ind += word.length + 1;
              word += " ";
              return (
                <AnimatedLetters
                  key={k}
                  letterClass="job"
                  word={word}
                  idx={i}
                />
              );
            })}
          </h2>
        ) : (
          <h2 className="job-mobile">{tagLine}</h2>
        )}
        <p className={isMobile ? "exp-mobile" : "exp"}>
          I am Undergrad student studying Electronics and communication
          Engineering(ECE) at Indian Institute of Information Technology, Surat. I am a
          relatively good <span>ReactJS</span> developer and
          <span> MERN-stack</span> Developer.
          with a <span>Leetcode</span> Max Rating of <span>1770+</span>.
          Currently pursuing a B.Tech in ECE at <span>IIIT Surat</span>,
          <br /> I've honed my skills in{" "}
          <span>ReactJS, MERN, NextJS, and Data Structures & Algorithms.</span>
          <br /> I thrive on creating seamless user experiences and have a knack
          for web development. Explore my portfolio to witness my expertise in
          action!
        </p>
        <p className="downarrow">
          <BsMouse onClick={() => window.scrollTo(0, window.innerHeight + 1)} />
        </p>
      </div>
    </div>
  );
}

export default Greet;
