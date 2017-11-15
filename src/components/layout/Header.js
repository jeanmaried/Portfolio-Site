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
      const styles = {
        button: {
          width: "100%",
          position: "absolute",
          zIndex: "3010",
          height: "50px",
        },

        hamburger:{
          margin: "15px 0 15px 0",
          color: "yellow"
        }
      }
      
    return (
      <div>
        <RaisedButton
            style={styles.button}
            backgroundColor="#424242"
            label={<FontAwesome style={styles.hamburger} name="bars" size="2x"/>}
            onClick={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem disabled={true}></MenuItem>
          <Link to="/"><MenuItem onClick={this.handleToggle}><FontAwesome className="fontAwesome" name="home" size="2x"/>HOME</MenuItem></Link>
          <Link to="/about"><MenuItem onClick={this.handleToggle}><FontAwesome className="fontAwesome" name="question" size="2x"/>ABOUT</MenuItem></Link>
          <Link to="/projects"><MenuItem onClick={this.handleToggle}><FontAwesome className="fontAwesome" name="briefcase" size="2x"/>PROJECTS</MenuItem></Link>
          <Link to="/contact"><MenuItem onClick={this.handleToggle}><FontAwesome className="fontAwesome" name="phone" size="2x"/>CONTACT</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}