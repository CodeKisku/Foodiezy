import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Modal'
import Cart from '../screens/Cart'
import { useCart } from './ContextReducer'
import '../App.css';
import logoImg from '../assets/img/logo.png'

export default function Navbar() {
  let data = useCart()
  const [cartView, setCartView] = useState(false)

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("authToken")
    navigate("/")
    alert("You have been successfully logged out")
  }

  return (
    <div>
      <nav className="navbar">

        <Link class="navbar-brand" to="#">
          <img src={logoImg} width="50" height="50" class="d-inline-block align-top" alt="Foodiezy logo" />
          Foodiezy
        </Link>

        <div id="navbarNav" className='navbarNav'>
          <div>

            {(localStorage.getItem("authToken")) ?
              <Link className="btn mx-1" to="/myOrder">My Orders</Link>
              : ""
            }
          </div>
          {(!localStorage.getItem("authToken")) ?
            <div className='d-flex'>
              <Link className="btn mx-1" to="/login">Login</Link>
              <Link className="btn mx-1" to="/signup">Signup</Link>
            </div>
            :
            <div>
              <div className='btn mx-1' onClick={() => { setCartView(true) }}>
                My Cart {" "}
                <Badge pill bg='danger'>{data.length === 0 ? "" : data.length}</Badge>
              </div>
              {cartView ? <Modal onClose={() => { setCartView(false) }}><Cart /></Modal> : null}
              <div className='btn mx-1 btn-logout' onClick={handleLogout} >
                Logout
              </div>
            </div>
          }
        </div>
      </nav>
    </div>
  )
}
