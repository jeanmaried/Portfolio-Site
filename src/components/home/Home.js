import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../flex.css';
import './styles.css'

class Home extends Component {
  render() {
    return (
        <div className="flex justify-center">
          <Link to="/about">
            <div className="gravity flex align-items-center direction-column">
              <div className="mars text-align flex direction-column align-items-center justify-center">
              <h1 className="yellow name">Joseph Jean Dalmasso</h1>
              <h3 className="profession">Web Developer</h3>
              </div>
            </div>
          </Link>
          <div className="animate">
              <div className="rocket"><img src={require("../../assets/red-rocket.png")} alt=""/></div>
          </div>
        </div>
    );
  }
}

export default Home;