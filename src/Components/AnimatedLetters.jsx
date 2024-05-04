import React from "react";
import "./animate.scss";

function AnimatedLetters({ letterClass, word, idx }) {
  let strArray = word.split("");
  return (
    <span>
      {strArray.map((char, i) => {
        return (
          <span
            key={char + i}
            className={`${letterClass} text-animate _${i + idx} `}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}

export default AnimatedLetters;
