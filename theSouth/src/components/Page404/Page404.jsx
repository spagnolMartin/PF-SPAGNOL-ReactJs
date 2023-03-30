import React from 'react'
import styles from './Page404.module.css'
import groot from '../../images/groot-sad.png'

function Page404() {
  return (
    <div className={styles.container} style={isDark ? {backgroundColor: "#04042988", color: "whiteSmoke"} : {backgroundColor: "whitesmoke",color:"#04042988"}}>
        <img src={groot}/>
        <p className={styles.title}><b>404</b></p>
        <p className={styles.text}>You are in the wrong page buddy.</p>
    </div>
  )
}

export default Page404