import React, { Component } from "react";
// import { SocialIcon } from 'react-social-icons';



class Jumbotron extends Component {

    render() {
      return (
        <container fluid className="text-center flex-center w-responsive mx-auto text-white" style={{ fontFamily: "'Roboto Mono', monospace" }}>
        <row className="mr-0 ml-0">
        <col className="text-center pl-0 pr-0">
            <Jumbotron className="" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <h1>Suzie Stephen</h1>
            <h4>The Coding Bootcamp Student</h4>
            <row>
                <col>
                <p Linkedin url="https://www.linkedin.com/in/suzie-stephen-b710129a/" />
                </col>
                <col>            
                    <p Github url="https://github.com/suziestephen" />
                </col>
            </row>
            </Jumbotron>
        </col>
        </row>
    </container>
  
    )
  }
}
export default Jumbotron;