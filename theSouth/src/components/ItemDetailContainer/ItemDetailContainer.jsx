import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = ({ products }) => {
  let { id } = useParams()
  let product = products.find((product) => product.id == id)

    try {
      return(
        <div className={styles.container}>
        <img className={styles.image} src={product.image} alt={product.title} />
        <div className={styles.info}>
          <h2>{product.title}</h2>
          <p><b>$ {product.price}</b></p>
          <p>{product.description}</p>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
      )     
    } catch (error) {
      console.log(error)
    }

}

export default ItemDetailContainer

/*Note:
-Can add a div with similar products under the main content
*/ 