import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Earth from '../contact/Contact'
import '../../flex.css';
import './styles.css'

class About extends Component {
  render() {
    return (
      <div className="about">

      <div className="about_box flex justify-end">
      <div className="about_view_container flex direction-column align-items-center">
      <div className="about_background">
      <h2 className="yellow about_title">Who am I?</h2>

        <div className="earth text-align"></div>
        <div className="animate2">
            <div className="moon"><img src={require("../../assets/moon2.png")} alt=""/></div>
        </div>

        <div>
          <p>I am a Freelance Web Developer based in Toronto, ON.</p>
          <p>With a background in sales and customer service, I switched over to web development to allow myself to apply my creativity and logic in a more meaningfull way.
            I am currently learning Node.js and have a mad passion for coding in React.js.</p>
          {/* <p>When I'm not coding, you can find me dancing like a fool, listening to music or 
          meditating.</p> */}
          I am currently available for freelance and contract work opportunities.
          {/* <div className="flex justify-center">
              <Link to="/projects"><div className="red_button text-align">See my work!</div></Link>
          </div> */}
        </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default About;
