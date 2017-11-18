import React, { Component } from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import './styles.css'

class Earth extends Component {
  render() {
    return (
        <div className="earth_box">
          <div className="earth text-align"></div>
          <div className="animate2">
              <div className="moon"><img src={require("../../assets/moon2.png")} alt=""/></div>
          </div>
        </div>
    );
  }
}

export default Earth;