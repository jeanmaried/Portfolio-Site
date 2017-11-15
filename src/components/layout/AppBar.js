import React from 'react';
import AppBar from 'material-ui/AppBar';
import Dropdown from './Dropdown';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const styles = {
    backgroundColor: "grey",
    opacity: "0.7"
}

const AppBarExampleIcon = () => (
  <AppBar
    title={<Dropdown />}
    style={styles}
 ></AppBar>
);

export default AppBarExampleIcon;