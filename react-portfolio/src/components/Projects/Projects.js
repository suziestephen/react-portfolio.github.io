import React from "react";
import "./projects.css";

function Projects(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <h4>Project: {props.name} </h4>
          </li>
          <li>
            <strong>Details:</strong> {props.details}
          </li>
          <li>
              <p class="lead">
                  <a class="btn btn-warning btn-lg" href={props.link} role="button">Deployed Application</a>
              </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
