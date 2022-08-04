import React from "react";

function About() {
  // const copyEmail = async () => {
  //   try {
  //     await navigator.clipboard.writeText("07manan1850@gmail.com");
  //     toast.success("Email copied to clipboard", {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div id="about">
      <div className="text">
        <h1 className="animateIn">Get to know Me</h1>
        <p className="animateIn-secondary">
          This section is yet to be written.
        </p>
        <a
          href="/resume.pdf"
          className="resume-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
}

export default About;
