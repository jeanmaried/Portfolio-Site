import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './flex.css';

class Home extends Component {
  render() {
    return (
      <div id="landing">
        <header className="flex direction-rowclass justify-between">
          <Link to="/contact"><div>Contact</div></Link>
          <Link to="/about"><div>About</div></Link>
        </header>

        <div className="icons flex justify-center direction-column">
          <div className="flex justify-around direction-row">
            <div><i className="devicon-html5-plain"></i></div>
            <div><i className="devicon-css3-plain"></i></div>
            <div><i className="devicon-sass-plain"></i></div>
            <div><i className="devicon-javascript-plain"></i></div>
            <div><i className="devicon-jquery-plain"></i></div>
            <div><i className="devicon-wordpress-plain"></i></div>
            <div><i className="devicons devicons-responsive"></i></div>
          </div>
          <div className="flex justify-around direction-row">
            <div><i className="devicons devicons-php"></i></div>
            <div><i className="devicon-git-plain"></i></div>
            <div><i className="devicon-github-plain"></i></div>
            <div><i className="devicon-gulp-plain"></i></div>
            <div><i className="devicon-react-plain"></i></div>
          </div>
        </div>

        <div id="home" className="flex justify-center">
          <img src={require('./assets/rocket.png')}/>
        </div>


        <footer className="flex align-items-center direction-column">
          <Link to="/projects"><div>Projects</div></Link>
          <p>me@jodalmasso.com</p>
        </footer>

      </div>
    );
  }
}

export default Home;