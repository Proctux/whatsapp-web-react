import React from 'react';

import IconButton from 'components/icon-button';
import Input from 'components/input';
import EmojiIcon from 'assets/icons/insert-emoji-icon.svg';
import MicIcon from 'assets/icons/mic-icon.svg';
import AttachIcon from 'assets/icons/attach-file-icon.svg';

import styles from './styles.css';

const ChatFooter = () => {
  return (
    <footer className={styles['chat-type-container']}>
      <IconButton ariaLabel="Add emoji icon" icon={EmojiIcon} className={styles.icon} />
      <IconButton ariaLabel="Attach files" icon={AttachIcon} className={styles.icon} />
      <Input
        id="input-message"
        label="Message box"
        hiddenLabel
        placeholder="Digite uma mensagem"
      />
      <IconButton ariaLabel="Send an audio" icon={MicIcon} className={styles.icon} />
    </footer>
  );
};

export default ChatFooter
;
