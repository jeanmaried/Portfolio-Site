import React, {Component} from 'react';
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
  maxHeight: "90%",
  maxWidth: "90%",
  textAlign: "left"
};

const steps = [
  {
    id: '1',
    message: 'Hello World',
    end: true,
  },
];

const mrChatBot = () => (
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
                message: 'Nice to meet you, {previousValue}! Have a nice day!',
                end: true,
            },
            ]}
        />
    </div>
)
        
export default mrChatBot;