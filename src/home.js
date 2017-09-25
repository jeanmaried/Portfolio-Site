import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './flex.css';

class Home extends Component {
  render() {
    return (
      <div id="landing">
        <header className="flex direction-rowclass justify-between">
          <div>Contact</div>
          <div>About</div>
        </header>

        <div id="home" className="flex justify-center">
          <h1>SUH DUDE</h1>
        </div>


        <footer className="flex align-items-center direction-column">
          <div>Projects</div>
          <p>me@jodalmasso.com</p>
        </footer>

      </div>
    );
  }
}

export default Home;