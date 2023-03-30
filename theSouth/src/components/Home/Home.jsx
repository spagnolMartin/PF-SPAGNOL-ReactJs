import React, { useContext } from 'react'
import styles from './Home.module.css'
import Background from '../Background/Background'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import mainBack from '../../images/MainBack2.jpg'
import PaymentMethod from '../PaymentMethod/PaymentMethod'
import {BsPerson , BsCreditCard2FrontFill } from 'react-icons/bs'
import { SiMinutemailer } from 'react-icons/si'
import boots from '../../images/bootsBackground.jpg'
import { NavLink } from 'react-router-dom'


const Home = ({products}) => {
  return (
    <div >
      <Background image={`url(${mainBack})`} mainTitle={'The South'} secondaryTitle={'Where The adventures begins.'}/>
      <ItemListContainer products={products}  />
      <NavLink className={styles.boots} to='item/jg3TGAfxlFc5eDS6A8LL'><Background image={`url(${boots})`} mainTitle={'New Burton Boots'} secondaryTitle={'For an awesome ride.'}/></NavLink>
      <div className={styles.methodsContainer}>
        <PaymentMethod  component={<BsPerson className={styles.payMethod } />} title={"We care about your experience."} text={"You can talk with us and ask for help after the purchase."}/>
        <PaymentMethod  component={<BsCreditCard2FrontFill className={styles.payMethod }/>} 
        title={"Credit Card or Cash"}  text={"Pay with Cash, credir/debit card or even with Crypto. It will be allways safe! "}/>
        <PaymentMethod  component={<SiMinutemailer className={styles.payMethod }/>} 
        title={"Buy From Home"} text={"Track your order until it's in your hands."}/>
      </div>
    </div> 
  )
}

export default Home


      


