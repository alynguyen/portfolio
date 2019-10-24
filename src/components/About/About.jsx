import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="About" id="about">
      <h1>About</h1>
      <img src="./images/profile.jpg" alt="about" />
      <p>
        Aly Nguyen has always been self-driven by curiosity. He attended San Francisco State University
        pursuing a degree in Business Information Systems to find his place in the tech world. While taking 
        basic coding courses, he felt joy and satisfaction from solving challenging problems and decided to 
        take a deeper dive at General Assembly’s Software Engineering Immersive. Web development soon became 
        a passion and has led him to where he is today, a Full-Stack Developer. <br /><br />

        Aly is a lifelong learner and will continue to produce creative projects reflecting his growth as an engineer.
      </p>
    </div>
  );
}

export default About;
