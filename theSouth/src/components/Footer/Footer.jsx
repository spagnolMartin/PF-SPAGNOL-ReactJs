import React from 'react'
import styles from './Footer.module.css'
import { SlSocialFacebook, SlSocialInstagram, SlSocialTwitter } from "react-icons/sl"

function Footer() {
  return (
    <div className={styles.container}>
        <h2 className={styles.footerTitle}>The South</h2>
        <div className={styles.info}>
            <ul>
                <li><b>Contact</b></li>
                <li>Phone: +1-202-555-0196</li>
                <li>Mail: theSouthStore@gmail.com</li>
                <li>Address: 1842 Park Street, SF, CA, USA. </li>
                <li>
                    <div>
                        <SlSocialFacebook className={styles.social}/>
                        <SlSocialInstagram className={styles.social}/>
                        <SlSocialTwitter className={styles.social}/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer