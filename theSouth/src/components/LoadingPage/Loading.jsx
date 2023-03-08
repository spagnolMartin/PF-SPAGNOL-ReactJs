import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.container}>
        <ClipLoader className={styles.sppiner}/>
        <h1>Loading...</h1>
    </div>
  )
}

export default Loading