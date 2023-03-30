import React, { useContext, useState } from 'react'
import styles1 from './CartCard.module.css'
import styles2 from '../Card/Card.module.css'
import { CartContext } from '../../contexts/CartContext'

const CartCard = ({product}) => {
  const {updateQuantity, removeProduct} = useContext(CartContext)

  const totalProduct = (product) => {
    return product.productCart.price * product.quantityCart
  }

  return (
    <div className={styles1.card}>
                    <img className={styles1.image} src={product.productCart.img}/>
                    <div className={styles1.info}>
                        <p className={styles2.title}><b>{product.productCart.name}</b></p>
                        <p className={styles2.brand}>Brand: {product.productCart.brand}</p>
                        <p className={styles2.price}>Price: ${product.productCart.price}</p>
                        <div className={styles2.quantityContainer}>
                            <input className={styles2.quantity} value={product.quantityCart} readOnly/>
                            <button className={styles2.quantityButton} onClick={() => updateQuantity(product, product.quantityCart + 1) }> + </button>
                            <button className={styles2.quantityButton} onClick={() =>updateQuantity(product, product.quantityCart - 1) }> - </button>
                        </div>
                        <p className={styles2.price}> Total: ${totalProduct(product)}</p>
                        <button className={styles2.button} onClick={() => removeProduct(product)}>Delete Product</button>
                    </div>
    </div>
  )
}

export default CartCard