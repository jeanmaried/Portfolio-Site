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
              <div className="visibility2 flex align-items-center justify-center direction-column">
                <h1 className="yellow contact_title">CONTACT</h1>
                <p className="white">
                  +1(647)467-3977<br/>
                  me@jodalmasso.com
                </p>
                <div className="flex justify-around white">
                  <a href="https://www.linkedin.com/in/joseph-jean-dalmasso-1b5473141/" target="_blank" rel="noopener noreferrer"><FontAwesome name="linkedin" size="2x"/></a>
                  <a href="https://github.com/jeanmaried" target="_blank" rel="noopener noreferrer"><FontAwesome name="github" size="2x"/></a>
                  <a href="mailto:me@jodalmasso.com"><FontAwesome name="envelope" size="2x"/></a>
                </div>
              </div>
            </div>
          </div>
          <div className="animate2">
              <div className="moon"><img src={require("../../assets/moon.png")} alt=""/></div>
          </div>
        </div>
    );
  }
}

export default Contact;