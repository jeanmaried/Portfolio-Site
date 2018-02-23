import React, { Component } from 'react';
import ChatBot from '../chatbot/ChatBot';
import ChatBotFrench from '../chatbot/ChatBotFrench';
import { connect } from 'react-redux';

import './styles.css';

class Footer extends Component {
  render() {
    return (
      <footer className="flex direction-row justify-between text-align">
        {this.props.language === 'french' ? <ChatBotFrench /> : <ChatBot />}
      </footer>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen
});

export default connect(mapStateToProps)(Footer);
