import React from 'react';

import UserImage from 'assets/images/user.jpeg';
import ChatIcon from 'assets/icons/chat-icon.svg';
import MoreIcon from 'assets/icons/more-vertical-icon.svg';
import CircularStatusIcon from 'assets/icons/circular-status-icon.svg';
import IconButton from 'components/icon-button';


import styles from './styles.css';

const UserHeader = () => {
  return (
    <article className={styles['user-header-container']}>
      <img
        src={UserImage}
        alt="User account photo"
        className={styles['users-avatar']}
      />
      <div className={styles['user-header-buttons']}>
        <IconButton icon={CircularStatusIcon} ariaLabel="Contacts status" />
        <IconButton icon={ChatIcon} ariaLabel="Start a new chat" />
        <IconButton icon={MoreIcon} ariaLabel="More options" />
      </div>
    </article>
  );
};

export default UserHeader;
