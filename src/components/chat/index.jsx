import React, {useEffect, useState, useContext, useMemo} from 'react';

import ChatHeader from 'components/chat-header';
import ChatConversation from 'components/chat-conversation';
import ChatFooter from 'components/chat-footer';
import {getMessages} from 'services/messages';
import {UserContext} from 'components/whatsapp-container';
import {db} from 'services/';

import styles from './styles.css';

const Chat = () => {
  const {selectedUser} = useContext(UserContext);
  const [messageList, setMessageList] = useState([]);
  const [selectedUserMessages, setSelectedUserMessages] = useState([]);

  useEffect(() => {
    getMessages(db).then((results) => {
      setMessageList(results);
    });
  }, []);

  console.log(messageList);

  useEffect(() => {
    if (messageList.length > 0) {
      setSelectedUserMessages(
          messageList.filter((user) => user.userId === selectedUser.id)
              .map((user) => user.message));
    }
  }, [messageList, selectedUser.id]);

  return (
    <section className={styles['chat-container']}>
      <ChatHeader />
      <ChatConversation
        messages={selectedUserMessages}
        className={styles['chat-conversation']}
      />
      <ChatFooter />
    </section>
  );
};

export default Chat;
