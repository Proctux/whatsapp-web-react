import React, { useEffect, useState, useContext } from 'react';

import ChatHeader from 'components/chat-header';
import ChatConversation from 'components/chat-conversation';
import ChatFooter from 'components/chat-footer';
import { getMessages } from 'services/messages'
import {UserContext} from 'components/whatsapp-container';
import { db } from 'services/'

import styles from './styles.css';

const Chat = () => {
  const {selectedUser} = useContext(UserContext)
  const [messageList, setMessageList] = useState()

  useEffect(() => {
     getMessages(db).then(results => {
      const userMessages = results.filter(user => user.userId === selectedUser.id)
        .map(user => user.message)

      setMessageList(userMessages)
     })
  }, [selectedUser])

  return (
    <section className={styles['chat-container']}>
      <ChatHeader />
      <ChatConversation messages={messageList} className={styles['chat-conversation']} />
      <ChatFooter />
    </section>
  );
};

export default Chat;
