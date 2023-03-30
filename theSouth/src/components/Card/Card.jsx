import React, { useContext, useState } from 'react'
import styles from './Card.module.css'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

const Card = ({product}) => {
    const [quantity, setQuantity] = useState(0)
    const {addProduct} = useContext(CartContext)

  const handleSubmit = () => {
    addProduct(product, quantity)
    setQuantity(0)
  }

    return(

            <div className={styles.container}>
                <img className={styles.image} src={product.img} alt={product.name} />
                <div className={styles.info}>
                    <span className={styles.name}>{product.name}</span>
                    <span>{product.brand}</span>
                    <NavLink className={styles.category}>{product.categories[0]}</NavLink>
                    <span className={styles.price}>$ {product.price}</span>
                        {product.stock > 0 ? 
                        <div className={styles.buyContainer}>
                          <div className={styles.quantityContainer}>
                            <input className={styles.quantity} value = {quantity} readOnly/>
                            <button className={styles.quantityButton} onClick={() => setQuantity(quantity + 1)}> + </button>
                            <button className={styles.quantityButton} onClick={() => setQuantity(quantity - 1)}> - </button>
                          </div>  
                          <div className={styles.buttonContainer}>
                            {quantity > 0 ? 
                            <button className={styles.button} onClick={handleSubmit}>Add to cart</button> : 
                            <button className={styles.button} >Quantity need it</button> }
                            <NavLink className={styles.link} to={`/item/${product.id}`}> 
                            <button className={styles.button}>View More </button> 
                            </NavLink>
                          </div>
                        </div>
                        : <span>Not Avaiable</span>} 
                </div>
            </div>
    )
}
export default Card