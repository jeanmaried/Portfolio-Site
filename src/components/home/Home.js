import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import './styles.css'

class Home extends Component {
  render() {
    return (
        <div className="flex justify-center">
          <Link to="/about">
            <div className="gravity flex align-items-center direction-column">
              <div className="earth text-align flex align-items-center justify-center">
              <h1 className="visibility">JOSEPH JEAN DALMASSO</h1>
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