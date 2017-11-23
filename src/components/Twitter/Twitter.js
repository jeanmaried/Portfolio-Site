import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Timeline } from 'react-twitter-widgets';

class Twitter extends Component {
  render() {
    return (
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
    );
  }
}

export default Twitter;
