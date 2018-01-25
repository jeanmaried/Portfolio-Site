import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'grey',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: 'grey',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  position: 'fixed',
  zIndex: '99999',
  textAlign: 'left'
};

class LinkHandler extends Component {
  componentWillMount() {
    document.querySelector('.tutorial .rsc-header a').click();
  }

  render() {
    return <span />;
  }
}

class MrChatBot extends Component {
  handleEnd = () => {
    document.querySelector('.tutorial .rsc-header a').click();
  };

  handleProjects = () => {
    this.props.history.push('/projects');
    return '8';
  };

  handleAbout = () => {
    this.props.history.push('/about');
    return '8';
  };

  handleProjets = () => {
    this.props.history.push('/projects');
    return '15';
  };

  handleInfo = () => {
    this.props.history.push('/about');
    return '15';
  };

  render() {
    return (
      <div className="bot">
        <ChatBot
          className="tutorial"
          floating={true}
          headerTitle="Message"
          style={theme}
          botDelay={1500}
          placeholder="Type your message..."
          steps={[
            {
              id: '1',
              options: [
                {
                  value: 1,
                  label: 'English',
                  trigger: 2
                },
                {
                  value: 2,
                  label: 'Français',
                  trigger: 9
                }
              ]
            },
            {
              id: '2',
              message: 'Hi, I am Jack!',
              trigger: '3'
            },
            {
              id: '3',
              message: 'May I have your name please?',
              trigger: '4'
            },
            {
              id: '4',
              user: true,
              trigger: '5'
            },
            {
              id: '5',
              message: 'Nice to meet you, {previousValue}!',
              trigger: '6'
            },
            {
              id: '6',
              message: 'How may I help you?',
              trigger: '7'
            },
            {
              id: '7',
              options: [
                {
                  value: 1,
                  label: 'Projects',
                  trigger: this.handleProjects
                },
                {
                  value: 2,
                  label: 'About',
                  trigger: this.handleAbout
                }
              ]
            },
            {
              id: '8',
              replace: true,
              component: <LinkHandler handleLink={this.props.handleLink} />,
              trigger: '7'
            },
            {
              id: '9',
              message: 'Salut, je suis Jack!',
              trigger: '10'
            },
            {
              id: '10',
              message: "Pourrais-je avoir votre nom s'il vous plaît?",
              trigger: '11'
            },
            {
              id: '11',
              user: true,
              trigger: '12'
            },
            {
              id: '12',
              message: 'Ravi de vous rencontrer, {previousValue}!',
              trigger: '13'
            },
            {
              id: '13',
              message: 'Comment puis-je vous aider?',
              trigger: '14'
            },
            {
              id: '14',
              options: [
                {
                  value: 1,
                  label: 'Projets',
                  trigger: this.handleProjets
                },
                {
                  value: 2,
                  label: 'Info',
                  trigger: this.handleInfo
                }
              ]
            },
            {
              id: '15',
              replace: true,
              component: <LinkHandler handleLink={this.props.handleLink} />,
              trigger: '14'
            }
          ]}
        />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ state }) => ({
  language: state.languageChosen
});

export default connect(mapStateToProps)(withRouter(MrChatBot));
