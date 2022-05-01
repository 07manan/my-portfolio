import React from "react";
import AnimatedLetters from "./AnimatedLetters";

function About() {
  const hi = ["H", "i", "i", ",", " ", "I", " ", "a", "m"];
  const name = ["M", "a", "n", "a", "n", " ", "P", "a", "t", "e", "l", "."];
  const job = [
    "I",
    " ",
    "b",
    "u",
    "i",
    "l",
    "d",
    " ",
    "w",
    "e",
    "b",
    "s",
    "i",
    "t",
    "e",
    "s",
    " ",
    "u",
    "s",
    "i",
    "n",
    "g",
    " ",
    "R",
    "e",
    "a",
    "c",
    "t",
    "J",
    "S",
    ".",
  ];

  return (
    <div id="greet">
      {window.innerWidth >= 1000 ? (
        <div className="intro">
          <p>
            <AnimatedLetters letterClass="hi" strArray={hi} idx={0} />
          </p>
          <h1>
            <AnimatedLetters letterClass="name" strArray={name} idx={9} />
          </h1>
          <h2>
            <AnimatedLetters letterClass="hi" strArray={job} idx={21} />
          </h2>
        </div>
      ) : (
        <div className="intro-simple">
          <p>Hii, I am</p>
          <h1>Manan Patel</h1>
          <h2>I build websites using ReactJS.</h2>
        </div>
      )}
    </div>
  );
}

export default About;
