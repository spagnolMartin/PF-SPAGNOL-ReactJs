import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

//Styles
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

//Firebase
import db  from '../db/firebase-config'
import { collection, getDocs } from 'firebase/firestore';

//Components
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Loading from './components/LoadingPage/Loading';
import Page404 from './components/Page404/Page404';
import Cart from './components/Cart/Cart';

//Context
import  CartProvider  from './contexts/CartContextProvider'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const productsCollectionRef = collection(db, "products")

  const getProducts = async () => {
    const productsCollection = await getDocs(productsCollectionRef);
    setProducts(
      productsCollection.docs.map((doc) => ({...doc.data(), id: doc.id}))
      );
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
  },[])

  let firtsThreeProducts = (list) => {
    return list.slice(0,3)
  }

  if(loading){
    return(
      <Loading />
    )
  }


  return (
    <>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home products={firtsThreeProducts(products)} />} />
            <Route path='/about' element={ <About />} />
            <Route path='/category/:id' element={<ItemListContainer products={products} />} /> 
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<Page404/>} />
          </Routes>
          <Footer />
        </CartProvider>
    </>
  )
}

export default App

/*
Notes: 
-useContext with the categories. 

-to do: 
  - useContext (end the darkMode context)
  - made a useContext for categories.
  - Deploy with vercel.
  - Create .env file and add apiKey to it.
      - Need to install .env library.
      - Read docs."https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj"
  - See the docs for final presentation.
  - Change the NavBar to a dropdown menu
  - Make an Loading stuff for detailProduct so it doesn't appear an error.
  - Check the repeated logic. Made the utils file more extensive.
*/
