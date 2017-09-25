import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './flex.css';

class Projects extends Component {
  render() {
    return (
      <div id="landing">
        <header className="flex direction-rowclass justify-between">
          <Link to="/contact"><div>Contact</div></Link>
          <Link to="/about"><div>About</div></Link>
        </header>



        <footer className="flex align-items-center direction-column">
          <Link to="/projects"><div>Projects</div></Link>
          <p>me@jodalmasso.com</p>
        </footer>

      </div>
    );
  }
}

export default Projects;