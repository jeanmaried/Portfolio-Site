import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './styles.css';

const styles = {
  theme: {
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
  },

  reviewTitles: {
    textDecoration: 'underline',
    textDecorationColor: 'yellow'
  }
};

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  componentDidMount() {
    const { steps } = this.props;
    const { name, email, message } = steps;

    this.setState({ name, email, message });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Message</h3>
        <div>
          <p style={styles.reviewTitles}>Nom:</p>
          <p>{name.value}</p>
        </div>
        <div>
          <p style={styles.reviewTitles}>Email:</p>
          <p>{email.value}</p>
        </div>
        <div>
          <p style={styles.reviewTitles}>Message:</p>
          <p>{message.value}</p>
        </div>
      </div>
    );
  }
}

class MrChatBot extends Component {
  sendMessage = e => {
    let contactObj = {
      name: e.steps.name.value,
      email: e.steps.email.value,
      message: e.steps.message.value
    };
    fetch('https://bot-contact-form.herokuapp.com/contact', {
      method: 'POST',
      body: JSON.stringify(contactObj),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    return 'end';
  };
  render() {
    return (
      <div className="bot">
        <ChatBot
          className="tutorial"
          floating={true}
          headerTitle="Contact"
          style={styles.theme}
          botDelay={500}
          placeholder="Type here..."
          steps={[
            {
              id: '1',
              message: 'Salut, je peux vous aider à entrer en contact!',
              trigger: '2'
            },
            {
              id: '2',
              message: 'Comment vous appelez-vous?',
              trigger: 'name'
            },
            {
              id: 'name',
              user: true,
              trigger: '5'
            },
            {
              id: '4',
              message: 'Enchanté, {previousValue}!',
              trigger: '5'
            },
            {
              id: '5',
              message: 'Quel est votre email?',
              trigger: 'email'
            },
            {
              id: 'email',
              user: true,
              trigger: '7'
            },
            {
              id: '7',
              message:
                'Je vous remercie! Quel message aimeriez-vous que je transmette?',
              trigger: 'message'
            },
            {
              id: 'message',
              user: true,
              trigger: '9'
            },
            {
              id: '9',
              message: 'Génial! Consultez votre résumé',
              trigger: 'review'
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update'
            },
            {
              id: 'update',
              message: 'Voulez-vous mettre à jour un champ?',
              trigger: 'update-question'
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Modifier', trigger: 'update-yes' },
                {
                  value: 'no',
                  label: 'Envoyer',
                  trigger: 'end-message'
                }
              ]
            },
            {
              id: 'update-yes',
              message: 'Quel champ souhaitez-vous modifier?',
              trigger: 'update-fields'
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Nom', trigger: 'update-name' },
                { value: 'email', label: 'Email', trigger: 'update-email' },
                {
                  value: 'message',
                  label: 'Message',
                  trigger: 'update-message'
                }
              ]
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '9'
            },
            {
              id: 'update-email',
              update: 'email',
              trigger: '9'
            },
            {
              id: 'update-message',
              update: 'message',
              trigger: '9'
            },
            {
              id: 'end-message',
              message: 'Merci! Votre message a été envoyé avec succès!',
              trigger: this.sendMessage
            },
            {
              id: 'end',
              message: 'Au revoir!',
              end: true
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
