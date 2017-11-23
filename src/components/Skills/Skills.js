import React, { Component } from 'react';
import '../../flex.css';
import FontAwesome from 'react-fontawesome';
import './styles.css';

class Skills extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="skills white flex direction-column align-items-center flex-wrap">
        <h2 className="skills_title text-align">Skills</h2>
        <div className="flex flex-wrap justify-center">
          <i className="devicon-html5-plain" />
          <i className="devicon-css3-plain" />
          <i className="devicon-sass-plain" />
          <i className="devicon-javascript-plain" />
          <i className="devicon-jquery-plain" />
          <i className="devicon-wordpress-plain" />
          <i className="devicon-php-plain" />
          <i className="devicon-github-plain" />
          <i className="devicon-gulp-plain" />
          <i className="devicon-react-plain" />
          <i className="devicon-mongodb-plain" />
          <i className="devicon-meteor-plain" />
        </div>
        {/* <div><i className="devicon-postgresql-plain"></i></div> */}
        <h3 className="text-align">Learning</h3>
        <div className="flex flex-wrap text-align">
          <i className="devicon-nodejs-plain" />
          <i className="devicon-express-original" />
        </div>
      </div>
    );
  }
}

export default Skills;
