import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    let d = new Date();
    d = d.getFullYear();

      const styles = {
        button: {
          zIndex: "3010",
          width: "56px",
        },

        hamburger:{
          color: "yellow"
        },
      }
      
    return (
      <div className="header_background">
      <div className="header flex justify-start">

        <RaisedButton
            style={styles.button}
            label={<FontAwesome style={styles.hamburger} name="bars" size="2x"/>}
            onClick={this.handleToggle}
        />
        <div>
        <Drawer className="drawer" open={this.state.open}>
          <MenuItem disabled={true}></MenuItem>
          <Link to="/"><MenuItem onClick={this.handleToggle}><FontAwesome className="fontAwesome" name="home" size="2x"/>Home</MenuItem></Link>
          <Link to="/about"><MenuItem onClick={this.handleToggle}><FontAwesome className="fontAwesome" name="question" size="2x"/>About</MenuItem></Link>
          <Link to="/projects"><MenuItem onClick={this.handleToggle}><FontAwesome className="fontAwesome" name="briefcase" size="2x"/>Projects</MenuItem></Link>
          <Link to="/skills"><MenuItem onClick={this.handleToggle}><FontAwesome className="fontAwesome" name="magic" size="2x"/>Skills</MenuItem></Link>
          <div className="copyright_contact text-align flex direction-column align-items-center">
            <div className="flex justify-between">
              <a className="fontAwesome" href="https://www.linkedin.com/in/joseph-jean-dalmasso-1b5473141/" target="_blank" rel="noopener noreferrer"><FontAwesome name="linkedin" size="2x"/></a>
              <a className="fontAwesome" href="https://github.com/jeanmaried" target="_blank" rel="noopener noreferrer"><FontAwesome name="github" size="2x"/></a>
              <a className="fontAwesome" href="mailto:me@jodalmasso.com"><FontAwesome name="envelope" size="2x"/></a>
            </div>
            <div className="text-align white copyright">© {d} jodalmasso.com</div>
          </div>
        </Drawer>
        </div>
      </div>
      <div className="header_background"></div>
      </div>
    );
  }
}