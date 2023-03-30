import React, { useContext, useEffect, useState } from 'react'
import styles from './CartWidget.module.css'
import { BsFillCartFill} from "react-icons/bs";
import { CartContext } from '../../contexts/CartContext'
import { cartSize } from '../../utils/Utils';

function CartWidget() {
  const {cart} = useContext(CartContext)

  return (
    <div className={styles.container}>
              <button type="button" className="cart-btn btn "  
                data-target="#cart">
                <BsFillCartFill className={styles.cart}/> 
               (<span className="total-count">{cartSize(cart)}</span>)
              </button>
    </div>
  )
}

export default CartWidget
