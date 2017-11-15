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
        //   width: "256px",
          zIndex: "3010",
          height: "50px",
      }

      const styles2 = {
          margin: "15px 0 15px 0",
      }

      const header = {
          width: "100%",
        //   height: "36px",
          background: "grey",
          opacity: "0.7",
          position: "absolute",
          zIndex: "3000",
          height: "5vh"
      }
    return (
      <div>
            <RaisedButton
            style={styles}
            label={<FontAwesome style={styles2} name="bars" size="2x"/>}
            onClick={this.handleToggle}
            />
        <Drawer open={this.state.open}>
            <MenuItem disabled={true}></MenuItem>
          <Link to="/"><MenuItem onClick={this.handleToggle}>HOME</MenuItem></Link>
          <Link to="/about"><MenuItem onClick={this.handleToggle}>ABOUT</MenuItem></Link>
          <Link to="/projects"><MenuItem onClick={this.handleToggle}>PROJECTS</MenuItem></Link>
          <Link to="/contact"><MenuItem onClick={this.handleToggle}>CONTACT</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}