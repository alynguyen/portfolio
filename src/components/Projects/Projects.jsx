import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <h1>Projects</h1>
      <div className="Projects-Container">
        <div className="Projects-Img">
          <img src="./images/travel.png" alt="Tiny's Travel Tricks" />
        </div>
        <div className="Projects-Description">
          <h2>Tiny's Travel Tricks</h2>
          <p>
            Concept Project<br/>
            React/Ruby on Rails/Postgres
          </p>
          <p>
            Current project. Place where users can create travel notes for destinations around the world. Utilizes Google Places API 
            to create new destinations. Destinations are mapped out using Google Maps API with custom markers.
          </p>
          <p className="Projects-Links">
            <button className="btn" onClick={() => window.open("https://rails-travelblogtest.herokuapp.com/", "_blank")}>
              Link
            </button>
            <button className="btn" onClick={() => window.open("https://github.com/alynguyen/rails-react-travel", "_blank")}>
              GitHub
            </button>
          </p>
        </div>
      </div>
      <div className="Projects-Container">
        <div className="Projects-Img">
          <img src="./images/hangergames.png" alt="Hanger Games" />
        </div>
        <div className="Projects-Description">
          <h2>Hanger Games</h2>
          <p>
            Concept Project<br/>
            MongoDB/Express/React/Node
          </p>
          <p>
            Web app that uses Yelp's Fusion API and Google Map's API to display nearby restaurant details. 
            A user can log in to save search preferences. "Choose for Me' feature helps a user decide where 
            to eat.
          </p>
          <p className="Projects-Links">
            <button className="btn" onClick={() => window.open("https://hangrygames.herokuapp.com/", "_blank")}>
              Link
            </button>
            <button className="btn" onClick={() => window.open("https://github.com/alynguyen/what-to-eat", "_blank")}>
              GitHub
            </button>
          </p>
        </div>
      </div>
      <div className="Projects-Container">
        <div className="Projects-Img">
          <img src="./images/wechefn.png" alt="WeChef'n" />
        </div>
        <div className="Projects-Description">
          <h2>WeChef'n</h2>
          <p>
            Team Concept Project<br/>
            Django/Python/Postgres
          </p>
          <p>
            Idea that will allow home chefs to cook and sell meals from the comfort of their own homes. 
            A user can sign up to be a chef and create meals. Other users can add meals to cart/checkout 
            and comment on the meals posted. Uses Amazon S3 for meal photo uploads.
          </p>
          <p className="Projects-Links">
            <button className="btn" onClick={() => window.open("https://wechefn.herokuapp.com/", "_blank")}>
              Link
            </button>
            <button className="btn" onClick={() => window.open("https://github.com/alynguyen/cook_around", "_blank")}>
              GitHub
            </button>
          </p>
        </div>
      </div>
      <div className="Projects-Container">
        <div className="Projects-Img">
          <img src="./images/eventb.png" alt="EventB" />
        </div>
        <div className="Projects-Description">
          <h2>EventB</h2>
          <p>
            Concept Project<br/>
            Express/MongoDB/MVC
          </p>
          <p>
            Simple web app creating a hub for event planning. When logged in with Google's OAuth, a user 
            can view events or create a new one. Events can only be deleted by original creator. All users 
            can comment on events. Designed for mobile.
          </p>
          <p className="Projects-Links">
            <button className="btn" onClick={() => window.open("http://alyplans.herokuapp.com/", "_blank")}>
              Link
            </button>
            <button className="btn" onClick={() => window.open("https://github.com/alynguyen/event-planner", "_blank")}>
              GitHub
            </button>
          </p>
        </div>
      </div>
      <div className="Projects-Container">
        <div className="Projects-Img">
          <img src="./images/battleship.png" alt="Battleship" />
        </div>
        <div className="Projects-Description">
          <h2>Battleship</h2>
          <p>
            Concept Project<br/>
            JavaScript/HTML/CSS
          </p>
          <p>
            Create a battleship like game using HTML and JavaScript. Player places ships down to start game. 
            The player will have to guess all of AI ships to win game. Player can lose if AI guesses all 
            player ships first.
          </p>
          <p className="Projects-Links">
            <button className="btn" onClick={() => window.open("https://alynguyen.github.io/battle-ship/", "_blank")}>
              Link
            </button>
            <button className="btn" onClick={() => window.open("https://github.com/alynguyen/battle-ship", "_blank")}>
              GitHub
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
