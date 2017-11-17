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
        { value: 3, label: "Contact", trigger: this.handleContact, },
        { value: 4, label: 'Why should I hire Jean?', trigger: '8' },
    ],
},
{
    id: '8',
    message: "Jean has a passion for web development. All he ever does is code.",
    trigger: '9',
    opened: false
},
{
    id: '9',
    message: "I can safely tell you he will bring creativity and great problem solving skills to your team!",
    trigger: '10',
    opened: false
},
{
    id: '10',
    message: "He is also planning on learning to build me a brain using Node.js.",
    trigger: '7',
    opened: false
},
{
    id: '11',
    message: 'You have been redirected!',
    trigger: '12',
},

{
    id: '12',
    options: [{ value: 1, label: "Need more help?", trigger: '7'}],
},
                ]}
            />
        </div>
        )
    }
}
        
export default withRouter(mrChatBot);