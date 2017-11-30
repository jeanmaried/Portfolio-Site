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
        <div className="make_clickable">
          <div className="mars text-align" onClick={this.handleClick}>
            <h1 className="yellow name">Joseph Jean Dalmasso</h1>
          </div>
        </div>
        <div className="rocket">
          <img src={require('../../assets/red-rocket.png')} alt="" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen
});

export default connect(mapStateToProps)(Home);
