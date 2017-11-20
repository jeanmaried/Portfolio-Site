import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
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
  position: "fixed",
  zIndex: "99999",
  textAlign: "left",
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
      loading: false,
    };

    this.handleEnd = this.handleEnd.bind(this);
  }

    handleEnd() {
        document.querySelector('.tutorial .rsc-header a').click();
    }


    handleProjects= ()=>{
        this.props.history.push('/projects');
        return "11"
    }

    handleAbout = ()=>{
        this.props.history.push('/about');
        return "11"
    }

    handleContact = ()=>{
        this.props.history.push('/contact');
        return "11"
    }

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
                headerTitle="Chat"
                style={theme}
                steps={[
                    {
                        id: '1',
                        message: 'Hi I am Jack The Bot.',
                        trigger: '2',
                    },
                    {
                        id: '2',
                        message: 'My brain is being built. I am not very smart yet.',
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'May I have your name please?',
                        trigger: '4',
                    },
                    {
                        id: '4',
                        user: true,
                        trigger: '5',
                    },
                    {
                        id: '5',
                        message: 'Nice to meet you, {previousValue}!',
                        trigger: '6',
                    },
                    {
                        id: '6',
                        message: 'What can I help you with?',
                        trigger: '7',
                    },
                    {
                    id: '7',
                        options: [
                            { value: 1, label: "Projects", trigger: this.handleProjects},
                            { value: 2, label: "About", trigger: this.handleAbout, },
                            // { value: 3, label: "Contact", trigger: this.handleContact, },
                            { value: 4, label: 'Why should I hire Jean?', trigger: '8' },
                        ],
                    },
                    {
                        id: '8',
                        message: "Jean has a passion for web development. All he ever does is code.",
                        trigger: '9',
                    },
                    {
                        id: '9',
                        message: "I can safely tell you he will bring creativity and great problem solving skills to your team!",
                        trigger: '10',
                    },
                    {
                        id: '10',
                        message: "He is also planning on learning to build me a brain using Node.js.",
                        trigger: '7',
                    },
                    {
                        id: '11',
                        replace: true,
                        component: (
                            <LinkHandler
                            handleLink={this.props.handleLink}
                            />
                        ),
                        trigger: '12'
                    },

                    {
                        id: '12',
                        options: [{ value: 1, label: "Need more help!", trigger: '7'}],
                    },
            ]}
            />
        </div>
    );
  }
}

// MrChatBot.propTypes = {
//   handleLink: PropTypes.func.isRequired,
// };

export default withRouter(MrChatBot);