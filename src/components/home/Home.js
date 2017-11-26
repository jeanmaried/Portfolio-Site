import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../flex.css';
import './styles.css';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = () => {
    document.querySelector('.rsc-float-button').click();
  };

  render() {
    return (
      <div className="home_page flex justify-center">
        <a href="#">
          <div className="mars text-align" onClick={this.handleClick}>
            {this.props.language == 'french' ? (
              <h1 className="yellow name">Jean-Marie Dalmasso</h1>
            ) : (
              <h1 className="yellow name">Joseph Jean Dalmasso</h1>
            )}
          </div>
        </a>
        <div className="rocket">
          <img src={require('../../assets/red-rocket.png')} alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ language }) => ({
  language: language.languageChosen
});

export default connect(mapStateToProps)(Home);
