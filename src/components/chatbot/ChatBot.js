import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLanguage } from '../../redux/modules/language';
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
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };

    this.handleEnd = this.handleEnd.bind(this);
  }

  handleEnd() {
    document.querySelector('.tutorial .rsc-header a').click();
  }

  handleProjects = () => {
    this.props.history.push('/projects');
    return '12';
  };

  handleAbout = () => {
    this.props.history.push('/about');
    return '12';
  };

  handleContact = () => {
    this.props.history.push('/contact');
    return '12';
  };

  render() {
    const { loading } = this.state;
    const mobile = window.innerWidth < 568;

    if (loading) {
      return <span />;
    }

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
                  trigger: 14
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
              message: 'My brain is being built. I am not very smart yet.',
              trigger: '4'
            },
            {
              id: '4',
              message: 'May I have your name please?',
              trigger: '5'
            },
            {
              id: '5',
              user: true,
              trigger: '6'
            },
            {
              id: '6',
              message: 'Nice to meet you, {previousValue}!',
              trigger: '7'
            },
            {
              id: '7',
              message: 'How may I help you?',
              trigger: '8'
            },
            {
              id: '8',
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
                },
                // { value: 3, label: "Contact", trigger: this.handleContact, },
                {
                  value: 4,
                  label: 'Why should I hire Jean?',
                  trigger: '9'
                }
              ]
            },
            {
              id: '9',
              message:
                'Jean has a passion for web development. All he ever does is code.',
              trigger: '10'
            },
            {
              id: '10',
              message:
                'I can safely tell you he will bring creativity and great problem solving skills to your team!',
              trigger: '11'
            },
            {
              id: '11',
              message:
                'He is also planning on learning to build me a brain using Node.js.',
              trigger: '13'
            },
            {
              id: '12',
              replace: true,
              component: <LinkHandler handleLink={this.props.handleLink} />,
              trigger: '8'
            },

            {
              id: '13',
              options: [{ value: 1, label: 'Need more help!', trigger: '8' }]
            },
            {
              id: '14',
              message:
                "Désolé, je suis toujours en train d'apprendre le français",
              trigger: '1'
            }
          ]}
        />
        )}
      </div>
    );
  }
}

// MrChatBot.propTypes = {
//   handleLink: PropTypes.func.isRequired,
// };

const mapStateToProps = ({ language }) => ({
  language: language.languageChosen
});

export default connect(mapStateToProps)(withRouter(MrChatBot));
