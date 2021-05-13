import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import About from "./pages/About";
import MyProjects from "./pages/MyProjects";
import Footer from "./components/Footer/Footer";


class App extends Component {

  render () {
  return (
    <Router>
      <Wrapper>
      <div>
        <Navbar />
        <Header />
        <Jumbotron />
              <Route exact path="/About" component={About} />
              <Route exact path="/MyProjects" component={MyProjects} />
        <Footer />
        </div>

      </Wrapper>
  </Router> 

  )}
}


export default App;