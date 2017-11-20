import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Timeline } from 'react-twitter-widgets';

import '../../flex.css';
import './styles.css';

class Twitter extends Component {
  render() {
    return (
      <div className="twitter">
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'MeDalmasso'
          }}
          options={{
            username: 'MeDalmasso',
            height: '100vh',
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
