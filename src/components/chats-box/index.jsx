import React, {useMemo} from 'react';

import Button from 'components/button';
import ArchiveIcon from 'assets/icons/archive-icon.svg';

import styles from './styles.css';
import ChatCard from './chat-card';
import {compareDates} from 'utils/date-helper';

const MOCK_CHATS = {
  normalChats: [
    {
      id: 4,
      name: 'Fulano',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 0,
    },
    {
      id: 10,
      name: 'Juca',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 4,
    },
    {
      id: 11,
      name: 'Fabi',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Thu Sep 23 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      unReadMessage: 1,
    },
    {
      id: 12,
      name: 'Mariana',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Wed Sep 22 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      unReadMessage: 0,
    },
    {
      id: 15,
      name: 'Higor',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 0,
    },
    {
      id: 18,
      name: 'Grupo facul',
      isGroup: true,
      numberList: ['+5548919191919', '+5548919191919', '+5548919191919'],
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 0,
    },
    {
      id: 21,
      name: 'Gabriela',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Thu Sep 23 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 0,
    },
    {
      id: 26,
      name: 'Otavio',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 0,
    },
    {
      id: 31,
      name: 'Julia',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Fri Sep 24 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
    },
    {
      id: 47,
      name: 'Luiz',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 0,
    },
    {
      id: 52,
      name: 'Amanda',
      number: '+5548919191919',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Mon Sep 13 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 0,
    },
  ],
  fixedChats: [
    {
      id: 1,
      name: 'Mãe',
      number: '+554899999999',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      lastMessage: 'Mon Sep 13 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: true,
      unReadMessage: 13,
    },
  ],
  archivedChats: [
    {
      id: 7,
      name: 'Cicrano',
      number: '+554899669966',
      avatar: 'https://source.unsplash.com/random',
      lastSeen: 'Sat Sep 25 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
      isFixed: false,
      unReadMessage: 0,
      lastMessage: 'Mon Sep 13 2021 14:56:28 GMT-0300 (Brasilia Standard Time)',
    },
  ],
};

const ChatsBox = () => {
  const formatChatList = useMemo(() => {
    const sortedNormalChats = MOCK_CHATS.normalChats.sort(
        (firstElement, secondElement) =>
          compareDates(firstElement, secondElement));
    return MOCK_CHATS.fixedChats.concat(sortedNormalChats);
  }, []);

  return (
    <div className={styles['chats-box-container']}>
      <Button
        startAdornment={ArchiveIcon}
        iconClassName={styles.icon}
        className={styles['archive-button']}
      >
          Arquivadas
      </Button>
      {formatChatList.map((user) => (
        <ChatCard key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default ChatsBox;
