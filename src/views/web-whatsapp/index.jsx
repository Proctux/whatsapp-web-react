import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import WhatsappContainer from '../../components/whatsapp-container'

const WebWhatsapp = () => {
  return (
    <section className={styles['web-whatsapp-box']}>
      <div className={styles['green-background']}/>
      <div className={styles['cream-background']}/>
      <WhatsappContainer className={styles['whatsapp-chat']}/>
    </section>
  )
}

export default WebWhatsapp
