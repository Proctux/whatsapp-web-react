import React from 'react';

import ChatHeader from 'components/chat-header';
import ChatConversation from 'components/chat-conversation';
import ChatFooter from 'components/chat-footer';

import styles from './styles.css';

const Chat = () => {
  return (
    <section className={styles['chat-container']}>
      <ChatHeader />
      <ChatConversation className={styles['chat-conversation']} />
      <ChatFooter />
    </section>
  );
};

export default Chat;
