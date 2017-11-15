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
          width: "100%",
          position: "absolute",
          width: "256px",
          zIndex: "301",
      }

      const header = {
          width: "100%",
          height: "36px",
          background: "grey",
          opacity: "0.7",
          position: "absolute",
          zIndex: "3000",
      }
    return (
      <div>
        <div style={header}>
            <RaisedButton
            style={styles}
            label={<FontAwesome name="bars" size="2x"/>}
            onClick={this.handleToggle}
            />
        </div>
        <Drawer open={this.state.open}>
            <MenuItem></MenuItem>
          <Link to="/"><MenuItem>HOME</MenuItem></Link>
          <Link to="/about"><MenuItem>ABOUT</MenuItem></Link>
          <Link to="/projects"><MenuItem>PROJECTS</MenuItem></Link>
          <Link to="/contact"><MenuItem>CONTACT</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}