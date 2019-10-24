import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <h1>Contact</h1>
      <div>
        <button 
          className="btn"
          onClick={() => window.open("mailto:alynguyen925@gmail.com", "_blank")}>
          Email
        </button>
        <button 
          className="btn"
          onClick={() => window.open("https://www.linkedin.com/in/aly-nguyen/", "_blank")}>
          LinkIn
        </button>
        <button 
          className="btn"
          onClick={() => window.open("https://github.com/alynguyen", "_blank")}>
          GitHub
        </button>
      </div>
    </div>
  );
}

export default Contact;
