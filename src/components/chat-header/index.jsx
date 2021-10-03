import React, {useContext} from 'react';

import {formattedDate} from 'utils/date-helper';
import SearchIcon from 'assets/icons/search-icon.svg';
import MoreIcon from 'assets/icons/more-vertical-icon.svg';
import IconButton from 'components/icon-button';
import {UserContext} from 'components/whatsapp-container';

import styles from './styles.css';

const ChatHeader = () => {
  const {selectedUser} = useContext(UserContext);

  return (
    <header className={styles['chat-header-container']}>
      <img
        className={styles['user-avatar']}
        src={selectedUser.avatar}
        alt={`${selectedUser.avatar}'s avatar`}
      />
      <div className={styles['user-information']}>
        <h1 className={styles['user-name']}>{selectedUser.name}</h1>
        <p
          className={styles['last-seen']}
        >
          {formattedDate(selectedUser.lastSeen)}
        </p>
      </div>
      <div className={styles['chat-option-buttons']}>
        <IconButton icon={SearchIcon} ariaLabel="Search into conversation" />
        <IconButton icon={MoreIcon} ariaLabel="More options about this user" />
      </div>
    </header>
  );
};


export default ChatHeader;
