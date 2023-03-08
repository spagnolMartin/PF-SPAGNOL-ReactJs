import React from 'react'
import styles from './Home.module.css'
import Background from '../Background/Background'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import mainBack from '../../images/MainBack2.jpg'
import PaymentMethod from '../PaymentMethod/PaymentMethod'
import {BsCashCoin, BsCreditCard2FrontFill } from 'react-icons/bs'
import { FaBitcoin } from 'react-icons/fa'

const Home = ({products}) => {

  return (
    <>
      <Background image={`url(${mainBack})`} mainTitle={'The South'} secondaryTitle={'Where The adventures begins.'}/>
      <ItemListContainer products={products} />
      <div className={styles.methodsContainer}>
          <PaymentMethod  component={<BsCashCoin className={styles.payMethod } />} text={"Cash"}/>
          <PaymentMethod  component={<BsCreditCard2FrontFill className={styles.payMethod }/>} text={"Credit Card "}/>
          <PaymentMethod  component={<FaBitcoin className={styles.payMethod }/>} text={"Crypto"}/>
      </div>
    </> 
  )
}

export default Home

//Note: Add something under the method container.