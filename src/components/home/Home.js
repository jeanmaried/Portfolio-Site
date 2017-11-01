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
              <h1 className="visibility">JOSEPH DALMASSO</h1>
              </div>
            </div>
          </Link>
        </div>
    );
  }
}

export default Home;