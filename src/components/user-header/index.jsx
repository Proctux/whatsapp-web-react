import React from 'react'

import UserImage from 'assets/images/user.jpeg'

import styles from './styles.css'

const UserHeader = () => {
  return (
    <article className={styles['user-header-container']}>
      <img src={UserImage} alt="User account photo" className={styles['users-avatar']}/>
    </article>
  )
}

export default UserHeader
