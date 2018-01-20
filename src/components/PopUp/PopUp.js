import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getLanguage,
  getNotLoading,
  getLoading
} from '../../redux/modules/state';

const styles = {
  popupContainer: {
    position: 'fixed',
    zIndex: 99,
    height: '100vh',
    width: '100vw'
  },

  card: {
    width: 200,
    position: 'fixed',
    padding: 20,
    borderRadius: 10,
    marginTop: -60,
    top: '50vh',
    background: '#292F33'
  },

  flag: {
    width: 45,
    height: 45,
    marginTop: -4
  },

  moon: {
    position: 'fixed',
    top: '50vh',
    marginTop: -125,
    with: 200,
    height: 200
  }
};

class PopUp extends Component {
  handleClick = e => {
    sessionStorage.setItem('language', e.target.id);
    let language = sessionStorage.getItem('language');
    this.props.dispatch(getLanguage(language));
    this.props.history.push('/home');
  };

  componentWillMount() {
    this.props.dispatch(getLoading());
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.dispatch(getNotLoading());
    }, 1000);
  }

  render() {
    return (
      <div
        style={styles.popupContainer}
        className="flex align-items-center justify-center"
      >
        {/* <img style={styles.moon} src={require('../../assets/moon2.png')} /> */}
        <Card style={styles.card}>
          <div className="flex justify-center align-content-center">
            <div>
              <FlatButton
                onClick={this.handleClick}
                label={
                  <img
                    id="french"
                    style={styles.flag}
                    src={require('../../assets/france.png')}
                  />
                }
              />
            </div>
            <div>
              <FlatButton
                onClick={this.handleClick}
                style={styles.canadianFlag}
                label={
                  <img
                    id="english"
                    style={styles.flag}
                    src={require('../../assets/english.png')}
                  />
                }
              />
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen,
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(withRouter(PopUp));
