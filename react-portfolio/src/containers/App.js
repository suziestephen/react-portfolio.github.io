import React, { Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Navbar from "../components/Navbar/Navbar";
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import projects from "../projects.json";

class App extends Component {
  state = {
    projects
  };

  removeProjects = id => {
    const projects = this.state.projects.filter(project => project.id !== id);
    this.setState({ projects });
  };

  render () {
  return (
    <Router>
      <div>
        <Navbar />
        < Jumbotron />
        {/* <Header /> */}
          <Route component={About} />
          <Route component={Projects} />
          {this.state.projects.map(projects => (
          <Projects
            removeProject={this.removeProject}
            id={projects.id}
            key={projects.id}
            name={projects.name}
            image={projects.image}
            details={projects.details}
            link={projects.link}
          />
        ))}


        <Footer />
      </div>
    </Router>
  );
}
}

export default App;