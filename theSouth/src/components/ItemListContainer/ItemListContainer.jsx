import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import styles from "./ItemListContainer.module.css"
import { uniqueCategories} from '../../utils/Utils'
import { CartContext } from '../../contexts/CartContext'

const ItemListContainer = ({ products }) => {
  let { id } = useParams()
  const [productsList, setProductList] = useState([])
  const {cart} = useContext(CartContext)
  let listCategory = []

  if(id){
    listCategory = products.filter(product => product.categories.includes(uniqueCategories(products)[id-1]))
  }

  useEffect(() => {
    if(id){
      setProductList(listCategory)
    }else{
      setProductList(products)
    }
  }, [id])

  return (
    <div className={styles.container}>
        {productsList.map((product) =>(
          <Card key={product.id} product={product} />
        ))}
    </div>
  )

}

export default ItemListContainer
