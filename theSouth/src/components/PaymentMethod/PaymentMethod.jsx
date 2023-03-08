import React from 'react'
import styles from './PaymentMethod.module.css'

const PaymentMethod = ({component, text}) => {
  return (
    <div className={styles.container}> 
        { component  }
        <p className={styles.text}>{text}</p>
    </div>
  )
}

export default PaymentMethod