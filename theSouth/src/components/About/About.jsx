import React from 'react'
import Background from '../Background/Background'
import styles from './About.module.css'
import aboutBackground from '../../images/mainBack1.jpg'

function About() {
  return (
    <>
      <Background image={`url(${aboutBackground})`} mainTitle={'About'} secondaryTitle={'Exploring sustentabilty through adventure.'}/>
      <div className={styles.intro}>
          <h4>The South</h4>
        	<span className={styles.parr}>Welcome to <b>The South</b> where we believe in the power of adventure to connect us with nature, and the importance of sustainability to protect it. We offer a wide range of exciting and unforgettable proucts, from extreme sports equipment like Snowboards or WakeBoards to tents and aluminum chairs for your lake day.</span>
        	<span className={styles.parr}>But we're more than just an adventure company - we're also committed to sustainability. We understand that the health of our planet is crucial to the health of our business, and that's why we offer a range of eco-friendly and sustainable products alongside our adventures. </span>
        	<span className={styles.parr}>Our sustainable product line includes everything from reusable water bottles and bamboo cutlery to natural insect repellent and biodegradable sunscreen. We believe that small changes can make a big difference, and we're dedicated to doing our part to protect the environment.</span>
        	<span className={styles.parr}>So if you're looking for an adventure that also supports sustainability, you've come to the right place. Join us for an unforgettable experience in nature, and feel good knowing that you're doing your part to protect it. </span>
      </div>
    </>
  )
}

export default About