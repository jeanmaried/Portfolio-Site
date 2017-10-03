import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import '../styles/home.css'

class Home extends Component {
  render() {
    return (
        <Layout>
          <div id="menu" className="flex align-items-center justify-center direction-column">
            <div className="menu_box">
              <h1 className="flex justify-center">
                Welcome!
              </h1>
              <p className="white">My name is Joseph, though everyone calls me by my middle name Jean. 
              I am a Full-Stack Web Developer based in Toronto! I spent 3 years 
              working as a sales professional before I decided to quit my job and 
              start a whole new life. After moving to a new country and a lot of 
              soul searching, I finally found my true calling in Web Development.</p>
              <p className="white">Finally a career path that allows me to apply my creativity and logic! 
              When I'm not coding, you will find me dancing like a fool, reading or 
              meditating.</p>
              <p className="white">Fun fact: I am a triple citizen of France, Canada, and the US and perfectly bilingual.</p>
              <div className="flex align-items-center direction-column">
              <h3>SKILL SET</h3>
                <div className="skills flex direction-row justify-center flex-wrap">
                  <div><i className="devicon-html5-plain"></i></div>
                  <div><i className="devicon-css3-plain"></i></div>
                  <div><i className="devicon-sass-plain"></i></div>
                  <div><i className="devicon-javascript-plain"></i></div>
                  <div><i className="devicon-jquery-plain"></i></div>
                  <div><i className="devicon-wordpress-plain"></i></div>
                  <div><i className="devicons devicons-responsive"></i></div>
                  <div><i className="devicon-php-plain"></i></div>
                  <div><i className="devicon-git-plain"></i></div>
                  <div><i className="devicon-github-plain"></i></div>
                  <div><i className="devicon-gulp-plain"></i></div>
                  <div><i className="devicon-react-plain"></i></div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
    );
  }
}

export default Home;
