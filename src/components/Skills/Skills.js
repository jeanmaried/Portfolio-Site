import React, { Component } from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';

class Skills extends Component {
  render() {
    return (
        <div className="skills white flex direction-row justify-center flex-wrap">
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
    );
  }
}

export default Skills;