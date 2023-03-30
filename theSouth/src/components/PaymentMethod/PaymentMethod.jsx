import React from 'react'
import styles from './PaymentMethod.module.css'

const PaymentMethod = ({component, title, text}) => {
  return (
    <div className={styles.container}> 
        { component  }
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
    </div>
  )
}

export default PaymentMethod