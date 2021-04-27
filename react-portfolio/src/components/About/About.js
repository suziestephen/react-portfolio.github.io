import React from "react";
import "./about.css";
// import profie from  ""



function About() {
  return (
    <about className="about">
      <h2>About Me</h2>
      {/* <div className="img-container">
        <img src={profie} alt="Profile Picture" />
      </div> */}
      <p> 
        Hello! My name is Suzie Stephen and I am a coding student at The Coding Bootcamp. 
        I work full time as a Product Manager for a company that speciliases in Agritech. I am taking this coding course to make me a better Product Manager. 
        I am interested in learning more about UX and UI design after taking this course. 
      </p>
    </about>
  );
}

export default About;
