import styles from './Cart.module.css';
import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext';
import CartList from '../CartList/CartList';
import { cartSize, totalCart } from '../../utils/Utils';
import {addDoc, collection, doc, getDoc} from 'firebase/firestore'
import db from '../../../db/firebase-config.js'
import { useNavigate } from 'react-router-dom';
import { response } from 'har-validator';

function Cart() {
  const {cart, clearCart} = useContext(CartContext)
  const [emailInput, setEmailInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [addressInput, setAddressInput] = useState('')
  const [orderId, setOrderId] = useState(null)
  const navigate = useNavigate()

  const createOrder = async (e) => {
    e.preventDefault()
    const order = {
      email: emailInput,
      name: nameInput,
      phoneInput: phoneInput,
      address: addressInput,
      detail: cart
    }

    setEmailInput('')
    setAddressInput('')
    setNameInput('')
    setPhoneInput('')
    
    //Add the order to the collection.
    const ordersCollectionRef = collection(db, "orders");	
    await addDoc(ordersCollectionRef, order)
    .then((response) => {
      setOrderId(response.id)
    })

    setTimeout(() => {
      setOrderId(null)
      clearCart()
    }, 10000)
  }


  return (
      <>
        {

        }
        {cartSize(cart) > 0 ? 
        <div className={styles.container}>
            <CartList list={cart} />
            <div className={styles.info}>
              <p className={styles.title}><b>PURCHASE SUMMARY</b></p>
              <p className={styles.description}>{cartSize(cart)} Products</p>
              <p className={styles.description}>FREE SHIPPING</p>
              <div className={styles.totalContainer}>
                <p><b className={styles.total}>TOTAL </b></p>
                <p className={styles.total}> ${totalCart(cart)}</p>
              </div>
              <div className={styles.orderContainer}>
                <p className={styles.title} style={{marginLeft: '0px'}}><b>MAKE YOUR ORDER </b></p>
                <label className={styles.label}>Email</label>
                <input className={styles.input} value={emailInput} placeholder={"example@gmail.com"} onChange={(e) => setEmailInput(e.target.value)} required/>
                <label className={styles.label}>Name</label>
                <input className={styles.input} value={nameInput} placeholder={"martin"} onChange={(e) => setNameInput(e.target.value)} required/>
                <label className={styles.label}>Phone</label>
                <input className={styles.input} value={phoneInput} placeholder={"1155826541"} onChange={(e) => setPhoneInput(e.target.value)} required/>
                <label className={styles.label}>Address</label>
                <input className={styles.input} value={addressInput} placeholder={"exampleStreet 123, exampleCity"} onChange={(e) => setAddressInput(e.target.value)} required/>
                <button className={styles.button} style={{marginLeft:'0px'}} onClick={(e) => createOrder(e)}>CONFIRM ORDER</button>
                {orderId ?<div className={styles.orderId}>
                            <p>Your order number is: <b>{orderId}</b></p>
                            <p><b>SAVE IT!</b></p> 
                         </div> 
                : null}
                <button className={styles.button} style={{marginLeft:'0px'}} onClick={(e) => clearCart(e)}>CLEAN CART </button>
              </div>
            </div>
        </div> : 
        <div className={styles.emptyContainer}>
          <h1> Your cart is empty :(</h1>
          <p > Looks like you have not added anything to your cart.</p>
          <p>   Go ahead and explores top categories. </p>
          <button className={styles.button} style={{width:'300px'}} onClick={() => navigate("/")}>Go Shopping. </button> 
        </div>}
      </>
  )
}

export default Cart