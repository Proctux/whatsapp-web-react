import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import BackgroundImage from 'assets/images/chat-background.png';

import styles from './styles.css';
import ChatBalloon from 'components/chat-balloon';

const ChatConversation = ({className}) => {
  return (
    <div
      className={classnames(styles['chat-conversation-container'], className)}
    >
      <div
        style={{backgroundImage: `url(${BackgroundImage})`}}
        className={styles['background-image']}
      >
        <div className={styles['balloon-wrapper']}>
          <ChatBalloon />
        </div>
      </div>
    </div>
  );
};

ChatConversation.propTypes = {
  className: PropTypes.string,
};

ChatConversation.defaultProps = {
  className: '',
};

export default ChatConversation;
