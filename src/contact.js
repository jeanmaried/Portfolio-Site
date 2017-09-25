import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './flex.css';

class Contact extends Component {
  render() {
    return (
      <div id="landing">
        <header className="flex direction-rowclass justify-between">
          <Link to="/contact"><div>Contact</div></Link>
          <Link to="/about"><div>About</div></Link>
        </header>

          <div className="flex justify-around direction-row">
              <form className="flex direction-column">
                <input type="text" name="firstname" placeholder="First Name"/>
                <input type="text" name="lastname" placeholder="Last Name"/>
                <input type="text" name="Message" placeholder="Your Message"/>
                <input type="submit" name=""/>
              </form>
          </div>

        <footer className="flex align-items-center direction-column">
          <Link to="/projects"><div>Projects</div></Link>
          <p>me@jodalmasso.com</p>
        </footer>

      </div>
    );
  }
}

export default Contact;