import db from './firebase-config.js'
import { collection, addDoc } from 'firebase/firestore'
import products from '../products.js'

const itemsCollectionRef = collection(db, "products")

const promises = products.map(product => addDoc(itemsCollectionRef, product))

Promise.all(promises).then(() => {
    console.log("All products added successfully")
    process.exit(0)
})