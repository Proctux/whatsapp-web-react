import React, {createContext, useMemo, useState} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import UserHeader from 'components/user-header';
import ChatsBox from 'components/chats-box';
import SearchIcon from 'assets/icons/search-icon.svg';
import LaptopIcon from 'assets/icons/laptop-icon.svg';
import Input from 'components/input';
import Chat from 'components/chat';
import WhatsappConnectImage from 'assets/images/whatsapp-connect.jpeg';

import styles from './styles.css';
import {Link} from 'react-router-dom';

const INITIAL_CONTEXT = {
  selectedUser: {},
  setSelectedUser: () => {},
};

export const UserContext = createContext(INITIAL_CONTEXT);

const WhatsappContainer = ({className}) => {
  const [selectedUser, setSelectedUser] = useState({});
  const value = useMemo(() => ({
    selectedUser,
    setSelectedUser,
  }), [selectedUser]);

  return (
    <UserContext.Provider value={value} >
      <div className={classnames(styles['whatsapp-container'], className)}>
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
        <div className={styles['chat-container']}>
          {Object.keys(selectedUser).length > 0 ? (
            <Chat />
          ) : (
          <section className={styles['initial-content-container']}>
            <img
              className={styles['whatsapp-image']}
              src={WhatsappConnectImage}
              alt="A phone on a hand"
            />
            <h1
              className={styles['initial-content-title']}
            >
              Mantenha seu celular conectado
            </h1>
            <p className={styles.text}>
              O WhatsApp conect ao seu celular para sincronizar suas messanges.
            </p>
            <p className={styles.text}>
              Para reduzir o uso de dados, conecte seu celular a uma rede Wi-Fi.
            </p>
            <div className={styles['initial-content-footer']}>
              <svg
                viewBox={LaptopIcon.viewBox}
                className={styles['laptop-icon']}
              >
                <use xlinkHref={`#${LaptopIcon.id}`} />
              </svg>
              <p className={styles.text}>
                Faça chamadas a partir de um computador com o
                WhatsApp para Mac.{' '}
                <Link
                  to="/"
                  className={classnames(styles.text, styles['download-link'])}
                >
                  Baixe aqui
                </Link>
              </p>
            </div>
          </section>
        )}
        </div>
      </div>
    </UserContext.Provider>
  );
};

WhatsappContainer.propTypes = {
  className: PropTypes.string,
};

WhatsappContainer.defaultProps = {
  className: '',
};

export default WhatsappContainer;
