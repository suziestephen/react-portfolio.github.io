import React from "react";
import { Row, Container } from "react-bootstrap";
import ProjectTitle from "../components/ProjectTitle/ProjectTitle"
import Projects from "../components/Projects/Projects"
import projects from "../projects.json"

const MyProjects = () => {
    return (
      <Container fluid>
        <Row>
         <ProjectTitle/>
         <Projects
         name={projects[0].name}
         image={projects[0].image}
         details={projects[0].details}
         link={projects[0].link}
       />
       <Projects
         name={projects[1].name}
         image={projects[1].image}
         details={projects[1].details}
         link={projects[1].link}
       />
       <Projects
         name={projects[2].name}
         image={projects[2].image}
         details={projects[2].details}
         link={projects[2].link}
       />
        </Row>
      </Container>
    );
  };
  
  export default MyProjects;



