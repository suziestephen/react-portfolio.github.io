import React from "react";
import "./about.css";
import Picture from "./profilepicture.jpg";





function About() {
  return (
    <div className="about-card">
    <div className="about-content">
      <div class="row">  
        <div class="col-lg-4">
          <div className="img-container">
            <img src={Picture} alt="Profile Picture"  />
          </div>
        </div>
        <div class="col-lg-8">
          <h3>
              <p>Hello! My name is Suzie Stephen and I am a coding student at The Coding Bootcamp. </p>
              <br></br>
          </h3>
          <h4>  
              <p>I work full time as a Product Manager for a company that speciliases in Agritech.</p> 
              <p>I am taking this coding course to make me a better Product Manager. </p>
              <p>I am interested in learning more about UX and UI design after taking this course. </p>
          </h4>
        </div>
      </div>
    </div>
  </div>
    
    
    
    
    

  );
}

export default About;
