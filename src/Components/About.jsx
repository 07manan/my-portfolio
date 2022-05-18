import React from "react";

function About() {
  // const about = ["A", "b", "o", "u", "t", " ", "M", "e"];
  return (
    <div id="about">
      <div data-aos="zoom-in" className="text">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magnam
          delectus deleniti quae officiis quo id facere, nam eos debitis quasi
          dicta deserunt magni maiores, at possimus. Ad, harum vitae?
        </p>
      </div>
      <div data-aos="zoom-out" className="img">
        <img src="myImg.webp" alt="..." />
      </div>
    </div>
  );
}

export default About;
