import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Earth from '../contact/Contact'
import '../../flex.css';
import './styles.css'

class About extends Component {
  render() {
    return (
    <div className="about">
      <div className="about_view_container flex direction-column">
        <div className="title_earth flex justify-between align-items-center">

          <h2 className="about_title">About</h2>

          <div className="earth text-align">
            <div className="moon"><img src={require("../../assets/moon2.png")} alt=""/></div>
          </div>
          
        </div>

        <div className="about_background">
          <p>I am a Freelance Web Developer based in Toronto, ON.</p>
          <p>With a background in sales and customer service, I switched over to web development to allow myself to apply my creativity and logic in a more meaningfull way.
          I am currently learning Node.js and have a mad passion for coding in React.js.</p>
          I am currently available for freelance and contract work opportunities.
        </div>
      </div>
    </div>
    );
  }
}

export default About;
