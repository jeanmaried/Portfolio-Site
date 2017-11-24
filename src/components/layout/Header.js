import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import AppBar from 'material-ui/AppBar';

class DrawerSimpleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

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
        paddingTop: 2,
        padding: 5
      },

      flagHolder: {
        position: 'fixed',
        zIndex: 9999,
        top: 10,
        right: 10
      }
    };

    return (
      <div className="header_background">
        <AppBar
          title="Web Developer"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onClick={this.handleToggle}
          style={styles.header}
        />

        <div style={styles.flagHolder} className="flex align-items-center">
          <a href="#">
            <img style={styles.flag} src={require('../../assets/france.png')} />
          </a>
          <a href="#">
            <img style={styles.flag} src={require('../../assets/canada.png')} />
          </a>
        </div>

        <Drawer
          backgroundColor="#292F33"
          containerStyle={styles.drawer}
          containerClassName="drawer"
          open={this.state.open}
        >
          <MenuItem disabled={true} />
          <Link to="/home">
            <MenuItem onClick={this.handleToggle}>
              <FontAwesome className="fontAwesome" name="home" size="2x" />Home
            </MenuItem>
          </Link>
          <Link to="/about">
            <MenuItem onClick={this.handleToggle}>
              <FontAwesome className="fontAwesome" name="question" size="2x" />About
            </MenuItem>
          </Link>
          <Link to="/projects">
            <MenuItem onClick={this.handleToggle}>
              <FontAwesome className="fontAwesome" name="briefcase" size="2x" />Projects
            </MenuItem>
          </Link>
          <Link to="/skills">
            <MenuItem onClick={this.handleToggle}>
              <FontAwesome className="fontAwesome" name="magic" size="2x" />Skills
            </MenuItem>
          </Link>
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

export default DrawerSimpleExample;
