import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './styles.css';
import ChatBot from 'react-simple-chatbot';

// all available props
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
  maxHeight: "85%",
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
        return "7"
    }

    handleAbout = ()=>{
        this.props.history.push('/about');
        return "7"
    }

    handleContact = ()=>{
        this.props.history.push('/contact');
        return "7"
    }

    myToggleFloating = () => {
        if (true){
            return false
        } else {
            return
        }
    }

    render(){
        return(
            <div className="bot">
            <ChatBot style={theme} floating={true} placeholder="Type your message..."
                steps={[
                {
                    id: '1',
                    message: 'Hi my name is Jack The Bot.',
                    trigger: '2',
                },
                {
                    id: '2',
                    message: 'My brain is being built so I am not very smart yet.',
                    trigger: '3',
                },
                {
                    id: '3',
                    message: 'What is your name?',
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
                      { value: 3, label: "Contact", trigger: this.handleContact, },
                      { value: 4, label: 'Why should I hire Jean?', trigger: '8' },
                    ],
                  },
                  {
                    id: '8',
                    message: 'Because he has a passion for development and a love for learning new fun technologies!',
                    trigger: '7',
                    opened: false
                  },
                ]}
            />
        </div>
        )
    }
}
        
export default withRouter(mrChatBot);