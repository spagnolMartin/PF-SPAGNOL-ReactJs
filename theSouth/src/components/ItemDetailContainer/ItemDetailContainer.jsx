import { doc, getDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  db  from '../../../db/firebase-config'
import { CartContext } from '../../contexts/CartContext'
import styles from './ItemDetailContainer.module.css'

const ItemDetailContainer = () => {
  let { id } = useParams()
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(0)
  const {addProduct} = useContext(CartContext)

  const getProduct = async (id) => {
    const docRef = doc(db, "products", id)

    const docSnap = await getDoc(docRef)
    if(docSnap.exists()) {
      setProduct(docSnap.data())
    }else{
      setProduct(null)
    }
  }

  useEffect(() => {
    getProduct(id)
  }, [id])


    return(
      <div className={styles.container}>
        <img className={styles.img} src={product.img} alt={product.name} />
        <div className={styles.info}>
          <h2>{product.name}</h2>
          <p className={styles.price}><b>$ {product.price}</b></p>
          <p className={styles.brand}>{product.brand}</p>
          <h5><b>Behind the Product </b></h5>
          <p className={styles.description}>{product.description}</p>
          {product.stock > 0 ? 
          <div>
            <div className={styles.quantityContainer}>
              <input className={styles.quantity} value = {quantity} readOnly="true"/>
              <button className={styles.quantityButton} onClick={() => setQuantity(quantity + 1)}> + </button>
              <button className={styles.quantityButton} onClick={() => setQuantity(quantity - 1)}> - </button>
            </div>  
            {quantity > 0 ? 
                            <button className={styles.button} onClick={() => (addProduct(product, quantity) , setQuantity(0))}>Add to cart</button> : 
                            <button className={styles.button} >Quantity need it</button>
            }
          </div>
            : <span>Not Avaiable</span>} 
        </div>
      </div>
    )     

}

export default ItemDetailContainer

/*Note:
-Can add a div with similar products under the main content
*/ 