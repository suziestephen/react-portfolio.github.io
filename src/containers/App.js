import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./components/About";
import Search from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jumbotron from "../components/Jumbotron/jumbotron";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        < Jumbotron />
        <Header />
          <Route component={About} />
          <Route component={Projects} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;