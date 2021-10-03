import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BackgroundImage from 'assets/images/chat-background.png';

import styles from './styles.css';
import ChatBalloon from 'components/chat-balloon';

const ChatConversation = ({messages, className}) => {
  console.log(messages)
  return (
    <div
      className={classnames(styles['chat-conversation-container'], className)}
    >
      <div
        style={{backgroundImage: `url(${BackgroundImage})`}}
        className={styles['background-image']}
      >
        <div className={styles['balloon-wrapper']}>
          {messages.map((message, index) => (
            <ChatBalloon key={index} text={message} />
          ))}
        </div>
      </div>
    </div>
  );
};

ChatConversation.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string)
};

ChatConversation.defaultProps = {
  className: '',
  messages: [],
};

export default ChatConversation;
