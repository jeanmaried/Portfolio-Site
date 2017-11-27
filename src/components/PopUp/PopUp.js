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
import { getLanguage } from '../../redux/modules/language';

const styles = {
  popupContainer: {
    position: 'fixed',
    zIndex: 99999,
    height: '100vh',
    width: '100vw'
  },

  cardHolder: {
    paddingBottom: 20,
    background: '#292F33'
  },

  card: {
    width: 200,
    height: 100,
    marginTop: -50,
    position: 'absolute',
    top: '50%'
  },

  flag: {
    width: 30,
    paddingTop: 2
  }
};

class PopUp extends Component {
  constructor() {
    super();

    this.state = {
      language: ''
    };
  }

  handleClick = e => {
    this.props.dispatch(getLanguage(e.target.id));
    this.props.history.push('/home');
  };

  render() {
    return (
      <div
        style={styles.popupContainer}
        className="flex align-items-center justify-center"
      >
        <Card style={styles.card}>
          <h3 className="text-align">Language</h3>
          <div style={styles.cardHolder} className="flex justify-center">
            <div className="flex direction-column text-align align-items-center">
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
            <div className="flex direction-column align-items-center">
              <FlatButton
                onClick={this.handleClick}
                style={styles.canadianFlag}
                label={
                  <img
                    id="english"
                    style={styles.flag}
                    src={require('../../assets/canada.png')}
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

const mapStateToProps = ({ language }) => ({
  language: language.languageChosen
});

export default connect(mapStateToProps)(withRouter(PopUp));
