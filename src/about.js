import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './flex.css';

class About extends Component {
  render() {
    return (
      <div id="landing">
        <header className="flex direction-rowclass justify-between">
          <Link to="/contact"><div>Contact</div></Link>
          <Link to="/about"><div>About</div></Link>
        </header>

        <div id="about">
          <h1>
            Hi, my name is Joseph Dalmasso.
          </h1>
          <p>I am a bilingual Full-Stack developer based in Toronto! It took a lot of soul searching for me to get here, but after 3 years as a sales professional I finally found my true calling in Web Development. I love learning all things web related but specially JavaScript. When I'm not coding, you will find me dancing like a fool, reading or meditating.
          If you speak French, we're already friends!</p>
          <Link to="/home"><div id="button" className="text-align">3...2...1...Take Off!</div></Link>
        </div>


        <footer className="flex align-items-center direction-column">
         <Link to="/projects"><div>Projects</div></Link>
          <p>me@jodalmasso.com</p>
        </footer>

      </div>
    );
  }
}

export default About;
