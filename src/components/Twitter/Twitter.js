import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Timeline } from 'react-twitter-widgets';
import { relative } from 'path';
import { connect } from 'react-redux';
import { getNotLoading, getLoading } from '../../redux/modules/state';

const styles = {
  position: 'relative',
  zIndex: 999,
  height: '125vh',
  overflow: 'auto'
};

class Twitter extends Component {
  removeLoader = () => {
    this.props.dispatch(getNotLoading());
  };
  render() {
    return (
      <div style={styles}>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'MeDalmasso'
          }}
          options={{
            username: 'MeDalmasso',
            width: '256',
            theme: 'dark'
          }}
          onLoad={this.removeLoader}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen,
  loader: state.isLoading
});

export default connect(mapStateToProps)(Twitter);
