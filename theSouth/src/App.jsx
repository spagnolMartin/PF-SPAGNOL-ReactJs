import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./App.css"
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Loading from './components/LoadingPage/Loading';
import Page404 from './components/Page404/Page404';

function App() {
  const [products, setProducts] = useState([])
  //const [loading, setLoading] = useState(true)

  const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
  },[])

  let firtsThreeProducts = (list) => {
    return list.slice(0,3)
  }

  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home products={firtsThreeProducts(products)} />} />
          <Route path='/about' element={ <About />} />
          <Route path='/category/:id' element={<ItemListContainer products={products}/>} /> 
          <Route path='/item/:id' element={<ItemDetailContainer products={products}/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer />
    </>
  )
}

export default App

/*
Notes: 
-Problems with /item/:id (Works with a try and catch)
*/
