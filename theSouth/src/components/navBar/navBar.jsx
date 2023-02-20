import React from 'react'
import CartWidget from '../cartWidget/cartWidget'
import './navBar.css'

function NavBar() {
  return (
    <div className='nav'>
              <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#"><strong>The South</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                        <a className="nav-link active" aria-current="page" href="#">Mountain</a>
                        <a className="nav-link active" href="#">Snow</a>
                        <a className="nav-link active" href="#">Camping</a>
                        <a className="nav-link active" href="#">Lake</a>
                      </div>
                    </div>
                  </div>
                  <CartWidget />
                </nav>
    </div>
  )
}

export default NavBar