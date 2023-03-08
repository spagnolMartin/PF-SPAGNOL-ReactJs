import React from 'react'
import styles from './Card.module.css'
import { NavLink } from 'react-router-dom'

const Card = ({product}) => {
    return(
        <NavLink className={styles.link} to={`/item/${product.id}`}>
            <div className={styles.container}>
                <img className={styles.image} src={product.image} alt={product.title} />
                <div className={styles.info}>
                    <span className={styles.name}>{product.title}</span>
                    <span className={styles.category}>{product.category}</span>
                    <div className={styles.costs}>
                        <span className={styles.price}>$ {product.price}</span>
                        <button className='btn btn-success'>Add to cart</button>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
export default Card