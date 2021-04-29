import React from "react";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import About from "./components/About/About";
import ProjectTitle from "./components/ProjectTitle/ProjectTitle";
import Projects from "./components/Projects/Projects";
import projects from "./projects.json";
import Footer from "./components/Footer/Footer";


function App() {

  return (

      <Wrapper>
      <div>
        <Navbar />
       <Header />
        <Jumbotron />
        <h1>About Me</h1>
        <About />
         <ProjectTitle>My Projects</ProjectTitle>
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

        <Footer />
      </div> 
    </Wrapper>

  );
}


export default App;