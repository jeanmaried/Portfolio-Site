import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Timeline } from 'react-twitter-widgets';
import { relative } from 'path';

const styles = {
  position: 'relative'
};

class Twitter extends Component {
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
          onLoad={() => console.log('Timeline is loaded!')}
        />
      </div>
    );
  }
}

export default Twitter;
