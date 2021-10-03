import React from 'react';

import styles from './styles.css';

const ChatBalloon = () => {
  return (
    <div className={styles['chat-balloon-container']}>
      <span className={styles['tail-in']}/>
      <p className={styles['chat-balloon-text']}>
        LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM
        LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM
        LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM
        LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM
        LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM
        LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM LOREM IMPSUM
      </p>
      <span className={styles['chat-balloon-hour']}>20:00</span>
    </div>
  );
};

export default ChatBalloon;
