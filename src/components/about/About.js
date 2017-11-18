import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Earth from '../contact/Contact'
import '../../flex.css';
import './styles.css'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="earth_box">
          <div className="earth text-align"></div>
          <div className="animate2">
              <div className="moon"><img src={require("../../assets/moon2.png")} alt=""/></div>
          </div>
        </div>

      <div className="about_box flex justify-end">
      <div className="about_view_container flex direction-column align-items-center">

  

        <h1 className="text-align yellow">ABOUT ME</h1>

        <div>
          <p>Hello,</p>
          <p>My name is Joseph but everyone calls me by my middle name Jean. I am a Web Developer based in Toronto, ON.</p>
          <p>After 3 years in sales I quit my job, moved to a new country, and did a lot of 
          soul searching before realizing my true calling was Web Development. Finally a career that allows me to apply my creativity and logic!</p>
          <p>When I'm not coding, you can find me dancing like a fool, listening to music or 
          meditating. Know french? On est déjà amis!</p>
          <div className="flex justify-center">
              <Link to="/projects"><div className="red_button text-align">See my work!</div></Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default About;
