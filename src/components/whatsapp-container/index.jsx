import React from 'react';
import PropTypes from 'prop-types';

import UserHeader from 'components/user-header';
import ChatsBox from 'components/chats-box';
import SearchIcon from 'assets/icons/search-icon.svg';
import Input from 'components/input';

import styles from './styles.css';

const WhatsappContainer = ({className}) => {
  return (
    <div className={className}>
      <div className={styles.sidebar}>
        <UserHeader />
        <div className={styles['search-chat']}>
          <Input
            id="search-input"
            label="Pesquisar conversas"
            hiddenLabel
            startAdornment={SearchIcon}
            placeholder="Pesquisar ou começar uma nova conversa"
          />
        </div>
        <ChatsBox />
      </div>
    </div>
  );
};

WhatsappContainer.propTypes = {
  className: PropTypes.string,
};

WhatsappContainer.defaultProps = {
  className: '',
};

export default WhatsappContainer;
