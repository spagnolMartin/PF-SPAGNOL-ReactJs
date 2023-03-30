import React, { useContext } from 'react'
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.container}>
        <div className={styles.spinner}></div>
        <h1><b>The South</b></h1>
    </div>
  )
}

export default Loading