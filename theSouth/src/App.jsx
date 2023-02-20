import React from 'react'
import "./App.css"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/navBar/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Product's List"} />
    </div>
  )
}

export default App
