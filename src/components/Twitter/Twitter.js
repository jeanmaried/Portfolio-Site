import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import { connect } from 'react-redux';
import './styles.css';

class Twitter extends Component {

  render() {
    return (
      <div className="twitter_container">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'MeDalmasso'
          }}
          options={{
            username: 'MeDalmasso',
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
});

export default connect(mapStateToProps)(Twitter);
