import React from 'react'
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';

export const Navbar=({count,setDisplay})=> {
  const navigate = useNavigate();
  
  return (
<div className="navbar">
        <img src="./images/K..png" className="logo" onClick={()=> navigate('/')} />
        <nav className="nav-elements">
            <ul>
                <li><a href="#" onClick={()=> navigate('/')}>Home</a></li>
                <li><a href="#" onClick={()=> navigate('/products')}>Products</a></li>
                <li><a href="#" onClick={()=>navigate('/explore')}>Explore</a></li>
                <li><a href="#">Payments</a></li>
                <li><a href="#" onClick={()=>navigate('/wishlist')}>Wishlist</a></li>
            </ul>
            <img className="cart" src="./images/cart.png" alt="cart" 
            onClick={()=>navigate('cart')}/>
            <div className='count' onClick={()=>navigate('cart')}>
            <span>{count}</span>
            </div>
        </nav>
        </div>
  )
}
