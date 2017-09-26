import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flex.css';
import Layout from '../page/Layout'

class Home extends Component {

  render() {
    return (
      <div id="landing">
      <Layout>
        <div className="icons flex justify-center direction-column">
          <div className="flex justify-around direction-row">
            <div><i className="devicon-html5-plain"></i></div>
            <div><i className="devicon-css3-plain"></i></div>
            <div><i className="devicon-sass-plain"></i></div>
            <div><i className="devicon-javascript-plain"></i></div>
            <div><i className="devicon-jquery-plain"></i></div>
            <div><i className="devicon-wordpress-plain"></i></div>
            <div><i className="devicons devicons-responsive"></i></div>
          </div>
          <div className="flex justify-around direction-row">
            <div><i className="devicons devicons-php"></i></div>
            <div><i className="devicon-git-plain"></i></div>
            <div><i className="devicon-github-plain"></i></div>
            <div><i className="devicon-gulp-plain"></i></div>
            <div><i className="devicon-react-plain"></i></div>
          </div>
        </div>

        <div id="spaceship" className="flex justify-center">
          <img src={require('../assets/rocket.png')} alt=""/>
        </div>
        </Layout>
      </div>
    );
  }
}

export default Home;