import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Card/Card'
import styles from "./ItemListContainer.module.css"

const ItemListContainer = ({ products }) => {
  let { id } = useParams()

  let categories = products.map(product => product.category)

  let uniqueCategories = Array.from(new Set(categories))
  
  let mapList = products 

  let listCategory = products.filter(product => product.category === uniqueCategories[id-1])

  if(id) {
    mapList = listCategory 
  }
  
  return (
    <div className={styles.container}>
        {mapList.map((product) =>(
          <Card key={product.id} product={product}/>
        ))}
    </div>
  )

}

export default ItemListContainer