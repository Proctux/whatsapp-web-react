import React, {useCallback, useContext, useMemo} from 'react';
import {format, isToday} from 'date-fns';

import {userPropType} from 'utils/proptypes';
import Button from 'components/button';
import {UserContext} from 'components/whatsapp-container';

import styles from './styles.css';

const MOCK_LAST_MESSAGE = 'Bom dia!';

const ChatCard = ({user}) => {
  const {setSelectedUser} = useContext(UserContext);

  const handleSelectedUser = useCallback(() => {
    setSelectedUser(user);
  }, [setSelectedUser, user]);

  const renderLastSeenText = useMemo(() => {
    return isToday(new Date(user.lastMessage)) ?
      format(new Date(user.lastMessage), 'p') :
      format(new Date(user.lastMessage), 'cccc');
  }, [user.lastMessage]);

  return (
    <article className={styles['chat-card-container']}>
      <Button
        className={styles['button-wrapper']}
        onClick={handleSelectedUser}
      />
      <img
        className={styles['user-avatar']}
        src={user.avatar}
        alt={`${user.name}'s avatar`}
      />
      <div className={styles['chat-card-content']}>
        <div className={styles['chat-card-data-box']}>
          <p className={styles['user-name']}>{user.name}</p>
          <p>{MOCK_LAST_MESSAGE}</p>
        </div>
        <div className={styles['user-activity-detail']}>
          <p>{renderLastSeenText}</p>
          {user.unReadMessage > 0 && (
            <span
              className={styles['unread-message']}
            >
              {user.unReadMessage}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

ChatCard.propTypes = {
  user: userPropType,
};

export default ChatCard;
