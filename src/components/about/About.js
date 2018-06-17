import React, { Component } from 'react';
import Twitter from '../Twitter';
import { connect } from 'react-redux';
import firebase from '../../firebase';
import '../../flex.css';
import './styles.css';

class About extends Component {
  state = {
    about: {}
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    firebase.database().ref('about').on('value', snapshot => {
      const about = snapshot.val()
      this.setState({ about })
    });
  }

  render() {
    return (
      <div className="about flex">
        <div className="about_view_container flex direction-column">
          <div className="title_earth flex justify-center align-items-center">
            <div className="earth text-align">
              <div className="moon">
                <img src={require('../../assets/moon.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="about_background">
            <div>
              <h2 className="about_title text-align">
                {this.props.language === 'french'
                  ? this.state.about.titleFr
                  : this.state.about.title}
              </h2>
              <p className="paragraph">
                {this.props.language === 'french'
                  ? this.state.about.contentFr
                  : this.state.about.content}
              </p>
              <h3 className="text-align">
                {this.props.language === 'french' ? 'Compétences' : 'Skills'}
              </h3>
            </div>
            <div className="skills flex flex-wrap justify-center">
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
              <i className="devicon-nodejs-plain" />
              <i className="devicon-express-original" />
            </div>
          </div>
        </div>
        <Twitter />
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen,
});

export default connect(mapStateToProps)(About);
