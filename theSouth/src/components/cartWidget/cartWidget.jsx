import React from 'react'
import styles from './CartWidget.module.css'
import { BsFillCartFill} from "react-icons/bs";

function CartWidget() {
  return (
    <div className={styles.container}>
            <a href="">
              <button type="button" className="cart-btn btn "  
                data-target="#cart">
                <BsFillCartFill className={styles.cart}/> 
               (<span className="total-count">0</span>)
              </button>
            </a>
    </div>
  )
}

export default CartWidget
