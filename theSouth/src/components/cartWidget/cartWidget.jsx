import React from 'react'
import './cartWidget.css'
import { BsFillCartFill} from "react-icons/bs";

function CartWidget() {
  return (
    <div>
            <a href="">
              <button type="button" className="cart-btn btn "  
                data-target="#cart">
                <BsFillCartFill /> 
                (<span className="total-count">0</span>)
              </button>
            </a>
    </div>
  )
}

export default CartWidget