import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import styles from './NavBar.module.css'
import {NavLink} from "react-router-dom"

function NavBar() {

  return (
    <div className={styles.nav}>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                      <span className={styles.title}><strong>The South</strong></span>   
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <NavLink className="nav-link active" to="/about">
                          <span>About</span>
                        </NavLink>
                        <NavLink className="nav-link active" to='category/2'>Jewerly</NavLink>
                        <NavLink className="nav-link active" to='category/3' >Electronics</NavLink>
                        <NavLink className="nav-link active" to='category/4' >Women's Clothes</NavLink>
                        <NavLink className="nav-link active" to='category/1' >Men's Clothes</NavLink>
                      </div>
                    </div>
                  </div>
                  <CartWidget />
                </nav>
    </div>
  )
}

export default NavBar