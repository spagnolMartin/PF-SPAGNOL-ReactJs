import React from 'react'
import styles from './CartList.module.css'
import CartCard from '../CartCard/CartCard'

const CartList = ({list}) => {
    return(
        <div className={styles.container}>
            {list.map((product) => (
                <CartCard key={product.productCart.id} product={product}/>
            ))}
        </div>
    )
}


export default CartList
