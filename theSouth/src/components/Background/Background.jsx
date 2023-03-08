import React from 'react'
import styles from './Background.module.css'

function Background({image, mainTitle, secondaryTitle}) {
  

  return (
    <div className={styles.container} style={{backgroundImage: image}}>
        <h1 className={styles.mainTitle}>{mainTitle}</h1>
        <span className={styles.secondaryTitle}>{secondaryTitle}</span>
    </div>
  )
}

export default Background