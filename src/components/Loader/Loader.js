import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  loader_holder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#292F33',
    zIndex: 999999,
    position: 'fixed'
  }
};

const Loader = () => (
  <div
    className="flex justify-center align-items-center"
    style={styles.loader_holder}
  >
    <CircularProgress size={60} thickness={7} color="yellow" />
  </div>
);

export default Loader;
