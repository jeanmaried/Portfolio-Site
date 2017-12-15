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
    }, 1000);
  };

  render() {
    return (
      <div className="home_page flex justify-center">
        <div className="make_clickable">
          <div>
            <div onClick={this.handleClick}>
              <img
                onLoad={this.removeLoader}
                className="mars_img"
                src={require('../../assets/mars.png')}
              />
              <h1 className="yellow name text-align">
                {this.props.language == 'french'
                  ? 'Jean-Marie Dalmasso'
                  : 'Joseph Dalmasso'}
              </h1>
            </div>
          </div>
        </div>
        <div className="rocket">
          <img
            src={require('../../assets/red-rocket.png')}
            alt=""
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
