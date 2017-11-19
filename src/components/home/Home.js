import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../flex.css';
import './styles.css'

class Home extends Component {
  render() {
    return (
        <div className="home_page flex justify-center">
          <Link to="/about">
              <div className="mars text-align">
              <h1 className="yellow name">Joseph Jean Dalmasso</h1>
              </div>
          </Link>
              <div className="rocket"><img src={require("../../assets/red-rocket.png")} alt=""/></div>
        </div>
    );
  }
}

export default Home;