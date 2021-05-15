import React from "react";
import "./jumbotron.css";




function Jumbotron() {
      return (
      <div class="jumbotron">
          <div class="jumbotron-text">
              <h4>
                <b>Email:</b> <a href="mailto:someone@example.com">suzietstephen@gmail.com</a>
                <br></br>
                <b>Mobile:</b> +61 4 29 008 919
              </h4>
        <div class="row">
            <div class="row">
                <div class="col-md-4">
                  <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://github.com/suziestephen" role="button">Github</a>
                  </p>
                </div>
                
                <div class="col-md-4">
                  <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://www.linkedin.com/in/suzie-stephen-b710129a/" role="button">Linkedin</a>
                  </p>
                </div>
      
                <div class="col-md-4">
                  <p class="lead">
                  <a class="btn btn-primary btn-lg" href="https://drive.google.com/file/d/17ERL9vmrPk-e1FFJOp2DTSTtLH-05NgH/view?usp=sharing" role="button">My CV</a>
                  </p>
                </div>
            </div>
        </div>
      </div>
    </div>


  
    )
  }

export default Jumbotron;