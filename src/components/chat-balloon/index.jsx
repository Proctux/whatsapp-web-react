import React, {useContext} from 'react';
import PropTypes from 'prop-types'

import styles from './styles.css';

const ChatBalloon = ({text}) => {
  return (
    <div className={styles['chat-balloon-container']}>
      <span className={styles['tail-in']}/>
      <p className={styles['chat-balloon-text']}>
        {text}
      </p>
      <span className={styles['chat-balloon-hour']}>20:00</span>
    </div>
  );
};

ChatBalloon.propTypes = {
  text: PropTypes.string,
}

export default ChatBalloon;
