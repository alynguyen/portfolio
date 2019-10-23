import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import { Parallax } from 'react-parallax';
import './MainPage.css';

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  fontSize: "4em",
  color: "white",
  fontFamily: "Montserrat",
  letterSpacing: ".2em",
  fontWeight: "bold"
};

export class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Parallax bgImage="/images/stars.jpg" strength={500}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              ALY NGUYEN<br />
              <span className="MainPage-Title">
                SOFTWARE ENGINEER
              </span>
            </div>
          </div>
        </Parallax>
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default MainPage;
