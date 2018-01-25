import React, { Component } from 'react';
import { Timeline } from 'react-twitter-widgets';
import { connect } from 'react-redux';
import { getNotLoading } from '../../redux/modules/state';
import './styles.css';

class Twitter extends Component {
  removeLoader = () => {
    this.props.dispatch(getNotLoading());
  };
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
  loader: state.isLoading
});

export default connect(mapStateToProps)(Twitter);
