import React from "react";
import { Row, Container } from "react-bootstrap";
import About from "../components/About/About"

const AboutMe = () => {
    return (
      <Container fluid>
        <Row>
            <About />
        </Row>
      </Container>
    );
  };
  
  export default AboutMe;