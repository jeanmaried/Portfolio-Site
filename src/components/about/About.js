import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../../flex.css';
import './about.css'

class About extends Component {
  render() {
    return (
          <div id="menu" className="flex align-items-center justify-center direction-column">
            <div className="laptop white">
              <div className="about_me">
                <div className="yellow">
                  <div className="flex justify-between align-items-center">
                    <div id="myface"></div>
                    <div  className="text-align white">
                      <div>&uarr;</div>
                      <div>SCROLL</div>
                      <div>&darr;</div>
                    </div>
                  </div>
                  <div className="text-end title_para_space">
                    <h1>Joseph Dalmasso</h1>
                      <p><em>Full-Stack Developer</em></p>
                      <p><em>Toronto, ON</em></p>
                  </div>
                  
                </div>
                <div>
                  <p>After 3 years in sales I quit my job, moved to a new country, and did a lot of 
                  soul searching before realizing my true calling was Web Development. Finally a career that allows me to apply my creativity and logic!</p>
                  <p>When I'm not coding, you can find me dancing like a fool, listening to music or 
                  meditating.</p>
                  <p>Feel free to click around and see some of my work!</p>
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
          </div>
    );
  }
}

export default About;
