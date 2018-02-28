import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../flex.css';
import './styles.css';
import { getNotLoading, getLoading } from '../../redux/modules/state';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillMount() {
    this.props.dispatch(getLoading());
  }

  handleClick = () => {
    document.querySelector('.rsc-float-button').click();
  };

  removeLoader = () => {
    setTimeout(() => {
      this.props.dispatch(getNotLoading());
    }, 500);
  };

  render() {
    return (
      <div className="home_page flex justify-center">
        <div className="make_clickable">
          <div>
            <div className="home-animation" onClick={this.handleClick}>
              <img
                onLoad={this.removeLoader}
                className="mars_img"
                alt="mars planet"
                src={require('../../assets/mars.png')}
              />
              <h1 className="yellow name text-align">Jean-Marie Dalmasso</h1>
            </div>
          </div>
        </div>
        <div className="rocket">
          <img
            src={require('../../assets/red-rocket.png')}
            alt="red rocket"
            onLoad={this.removeLoader}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen,
  loader: state.isLoading
});

export default connect(mapStateToProps)(Home);
