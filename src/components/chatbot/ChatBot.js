import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './styles.css';
import ChatBot from 'react-simple-chatbot';

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  maxHeight: "80%",
  maxWidth: "100%",
  textAlign: "left",
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

class mrChatBot extends Component{
    handleProjects= ()=>{
        this.props.history.push('/projects');
        return "5"
    }

    handleAbout = ()=>{
        this.props.history.push('/about');
        return "5"
    }

    handleContact = ()=>{
        this.props.history.push('/contact');
        return "5"
    }

    render(){
        return(
            <div className="bot">
            <ChatBot style={theme} floating={true}
                steps={[
                {
                    id: '1',
                    message: 'Hi my name is Jack The Bot. My brain is being built so I am not very smart yet. What is your name?',
                    trigger: '2',
                },
                {
                    id: '2',
                    user: true,
                    trigger: '3',
                },
                {
                    id: '3',
                    message: 'Nice to meet you, {previousValue}!',
                    trigger: '4',
                },
                {
                    id: '4',
                    message: 'What can I help you find?',
                    trigger: '5',
                  },
                  {
                    id: '5',
                    options: [
                      { value: 1, label: "Projects", trigger: this.handleProjects},
                      { value: 2, label: "About", trigger: this.handleAbout, },
                      { value: 2, label: "Contact", trigger: this.handleContact, },
                      { value: 3, label: 'Why should I hire Jean?', trigger: '6' },
                    ],
                  },
                  {
                    id: '6',
                    message: 'Because he has a passion for development and a love for learning new fun technologies!',
                    trigger: '5',
                  },
                ]}
            />
        </div>
        )
    }
}
        
export default withRouter(mrChatBot);