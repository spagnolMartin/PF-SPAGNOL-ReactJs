import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import styles from './NavBar.module.css'
import {NavLink } from "react-router-dom"

const NavBar = ( )  => {

  return (
    <div className={styles.nav}>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavLink className="navbar-brand" to="/">
                      <span className={styles.title}><strong>The South</strong></span>   
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <NavLink className="nav-link active" to="/about">About </NavLink>
                        <NavLink className="nav-link active" to='category/6'>Sports</NavLink>
                        <NavLink className="nav-link active" to='category/1'>Clothes</NavLink>
                        <NavLink className="nav-link active" to='category/5'>Camping</NavLink>
                        <NavLink className="nav-link active" to='category/4'>Products</NavLink>
                      </div>
                    </div>
                        <NavLink to='cart' className={styles.cart}><CartWidget/></NavLink>
                    </div>
                </nav>
    </div>
  )
}

export default NavBar



