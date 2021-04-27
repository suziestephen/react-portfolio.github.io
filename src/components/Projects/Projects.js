import React from "react";
import "./projects.css";

function Projects(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Details:</strong> {props.details}
          </li>
          <li>
            <strong>Link:</strong> {props.link}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
