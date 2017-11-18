import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../flex.css';
import './styles.css'

class About extends Component {
  render() {
    return (
      <div className="about_box flex justify-center">
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

        <div className="skills flex direction-row justify-center flex-wrap">
          <div><i className="devicon-html5-plain"></i></div>
          <div><i className="devicon-css3-plain"></i></div>
          <div><i className="devicon-sass-plain"></i></div>
          <div><i className="devicon-javascript-plain"></i></div>
          <div><i className="devicon-jquery-plain"></i></div>
          <div><i className="devicon-wordpress-plain"></i></div>
          <div><i className="devicon-php-plain"></i></div>
          <div><i className="devicon-github-plain"></i></div>
          <div><i className="devicon-gulp-plain"></i></div>
          <div><i className="devicon-react-plain"></i></div>
          <div><i className="devicon-mongodb-plain"></i></div>
          <div><i className="devicon-nodejs-plain"></i></div>
          <div><i className="devicon-express-original"></i></div>
          <div><i className="devicon-postgresql-plain"></i></div>
          <div><i className="devicon-meteor-plain"></i></div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
