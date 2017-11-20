import React, { Component } from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import './styles.css'

class Skills extends Component {
    render() {
        return (
        <div className="skills white flex direction-column align-items-center flex-wrap">
            <h2 className="skills_title text-align">Skills</h2>
            <div className="flex flex-wrap text-align">
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-sass-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-jquery-plain"></i>
                <i className="devicon-wordpress-plain"></i>
                <i className="devicon-php-plain"></i>
                <i className="devicon-github-plain"></i>
                <i className="devicon-gulp-plain"></i>
                <i className="devicon-react-plain"></i>
                <i className="devicon-mongodb-plain"></i>
            </div>
                {/* <div><i className="devicon-postgresql-plain"></i></div> */}

            <div>
                <div><i className="devicon-meteor-plain"></i></div>
            </div>
            <h3 className="skills_title text-align">Learning</h3>
            <div className="flex flex-wrap text-align">
                <i className="devicon-nodejs-plain"></i>
                <i className="devicon-express-original"></i>
            </div>
        </div>
        );
  }
}

export default Skills;