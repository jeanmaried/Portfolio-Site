import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Twitter from '../Twitter';
import { connect } from 'react-redux';
import { getLanguage } from '../../redux/modules/language';
import '../../flex.css';
import './styles.css';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let translate = () => {
      if (this.props.language == 'french') {
        return (
          <div>
            <p>Je suis un Développeur Web freelance basé à Toronto, ON.</p>

            <p>
              Avec de l'expérience dans la vente et le service à la clientèle,
              je suis passé au développement web pour me permettre d'appliquer
              ma créativité et ma logique d'une manière plus significative.
              J'apprends actuellement Node.js et j'ai une passion folle pour le
              codage en React.js.
            </p>

            <p>
              Je suis actuellement disponible pour des opportunités de travail
              freelance et à contrat.
            </p>
            <h3 className="text-align">Skills</h3>
          </div>
        );
      } else {
        return (
          <div>
            <p>I am a Freelance Web Developer based in Toronto, ON.</p>
            <p>
              With a background in sales and customer service, I switched over
              to web development to allow myself to apply my creativity and
              logic in a more meaningful way. I am currently learning Node.js
              and have a mad passion for coding in React.js.
            </p>
            <p>
              I am currently available for freelance and contract work
              opportunities.
            </p>
            <h3 className="text-align">Compètences</h3>
          </div>
        );
      }
    };

    return (
      <div className="about flex justify-between">
        <div className="about_view_container flex direction-column">
          <div className="title_earth flex justify-between align-items-center">
            {this.props.language == 'french' ? (
              <h2 className="about_title">Info</h2>
            ) : (
              <h2 className="about_title">About</h2>
            )}

            <div className="earth text-align">
              <div className="moon">
                <img src={require('../../assets/moon2.png')} alt="" />
              </div>
            </div>
          </div>
          <div className="about_background">
            {translate()}
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
        {window.innerWidth > 600 ? <Twitter /> : null}
      </div>
    );
  }
}

const mapStateToProps = ({ language }) => ({
  language: language.languageChosen
});

export default connect(mapStateToProps)(About);
