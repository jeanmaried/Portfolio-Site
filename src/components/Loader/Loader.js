import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  loader: {
    top: '50%',
    left: '50%'
  },
  loader_holder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#292F33',
    zIndex: 999999,
    position: 'fixed'
  }
};

const Loader = () => (
  <div style={styles.loader_holder}>
    <CircularProgress
      style={styles.loader}
      size={60}
      thickness={7}
      color="yellow"
    />
  </div>
);

export default Loader;
