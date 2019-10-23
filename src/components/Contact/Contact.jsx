import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact</h1>
      <p>
        <a onClick={() => window.open("mailto:alynguyen925@gmail.com", "_blank")}>
          Email
        </a>
        <a onClick={() => window.open("https://www.linkedin.com/in/aly-nguyen/", "_blank")}>
          LinkIn
        </a>
        <a onClick={() => window.open("https://github.com/alynguyen", "_blank")}>
          GitHub
        </a>
      </p>
    </div>
  );
}

export default Contact;
