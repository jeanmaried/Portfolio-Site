import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, withRouter } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux';
import { getLanguage } from '../../redux/modules/language';

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClick = e => {
    this.props.dispatch(getLanguage(e.target.id));
    this.props.history.push('/home');
  };

  render() {
    let d = new Date();
    d = d.getFullYear();

    const styles = {
      header: {
        zIndex: '9999',
        background: '#292F33',
        color: 'yellow',
        position: 'fixed'
      },

      drawer: {
        background: '#292F33'
      },

      flag: {
        width: 30,
        padding: 5,
        paddingBottom: 0,
        cursor: 'pointer'
      },

      flagHolder: {
        position: 'fixed',
        zIndex: 9999,
        top: 10,
        right: 10
      },

      selected: {
        background: 'yellow',
        borderRadius: 5,
        padding: 0,
        margin: 0
      }
    };

    return (
      <div className="header_background">
        <AppBar
          title={
            window.innerWidth > 600
              ? this.props.language == 'french'
                ? 'Développeur Web'
                : 'Web Developer'
              : null
          }
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onClick={this.handleToggle}
          style={styles.header}
        />

        <div style={styles.flagHolder} className="flex align-items-center">
          <div
            onClick={this.handleClick}
            style={this.props.language == 'french' ? styles.selected : null}
          >
            <img
              id="french"
              style={styles.flag}
              src={require('../../assets/france.png')}
            />
          </div>
          <div
            onClick={this.handleClick}
            style={this.props.language == 'english' ? styles.selected : null}
          >
            <img
              id="english"
              style={styles.flag}
              src={require('../../assets/canada.png')}
            />
          </div>
        </div>

        <Drawer
          backgroundColor="#292F33"
          containerStyle={styles.drawer}
          containerClassName="drawer"
          open={this.state.open}
        >
          <MenuItem disabled={true} />
          <Link to="/home">
            <MenuItem
              onClick={this.handleToggle}
              className="flex align-items-center"
            >
              <FontAwesome className="fontAwesome" name="home" size="2x" />
              {this.props.language == 'french' ? 'Accueil' : 'Home'}
            </MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem
              onClick={this.handleToggle}
              className="flex align-items-center"
            >
              <FontAwesome className="fontAwesome" name="question" size="2x" />
              {this.props.language == 'french' ? 'Info' : 'About'}
            </MenuItem>
          </Link>
          <Link to="/projects">
            <MenuItem onClick={this.handleToggle}>
              <FontAwesome className="fontAwesome" name="briefcase" size="2x" />
              {this.props.language == 'french' ? 'Projets' : 'Projects'}
            </MenuItem>
          </Link>
          {/* <Link to="/skills">
            <MenuItem onClick={this.handleToggle}>
              <FontAwesome className="fontAwesome" name="magic" size="2x" />
              {this.props.language == 'french' ? 'Compétences' : 'Skills'}
            </MenuItem>
          </Link> */}
          <div className="copyright_contact text-align flex direction-column align-items-center">
            <div className="flex justify-between">
              <a
                className="fontAwesome"
                href="https://twitter.com/MeDalmasso"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesome name="twitter" size="2x" />
              </a>
              <a
                className="fontAwesome"
                href="https://www.linkedin.com/in/joseph-jean-dalmasso-1b5473141/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesome name="linkedin" size="2x" />
              </a>
              <a
                className="fontAwesome"
                href="https://github.com/jeanmaried"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesome name="github" size="2x" />
              </a>
              <a className="fontAwesome" href="mailto:me@jodalmasso.com">
                <FontAwesome name="envelope" size="2x" />
              </a>
            </div>
            <div className="text-align white copyright">
              © {d} jodalmasso.com
            </div>
          </div>
        </Drawer>

        <div className="header_background" />
      </div>
    );
  }
}
const mapStateToProps = ({ language }) => ({
  language: language.languageChosen
});

export default connect(mapStateToProps)(withRouter(SideDrawer));
