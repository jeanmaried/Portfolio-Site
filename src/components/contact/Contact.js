import React, { Component } from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import './styles.css'

class Contact extends Component {
  render() {
    return (
        <div className="flex justify-center">
          <div className="contact flex align-items-center direction-column">
            <div className="earth text-align">
              <div className="flex align-items-center justify-center direction-column">
              </div>
            </div>
          </div>
          <div className="animate2">
              <div className="moon"><img src={require("../../assets/moon2.png")} alt=""/></div>
          </div>
        </div>
    );
  }
}

export default Contact;