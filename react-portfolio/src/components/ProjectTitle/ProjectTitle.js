import React from "react";
import "./project-titles.css";

function ProjectTitle(props) {
  return <h1 className="My Projects">{props.children}</h1>;
}

export default ProjectTitle;
