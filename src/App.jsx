import './App.css'
import './styles/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Frontpage } from './Components/Frontpage'
import { Navbar } from './Components/Navbar'
import { Product } from './Components/Product'
import './Components/Product.css'
import { Cart } from './Components/Cart'
import React, { useState } from 'react'
import Explore from './Components/Explore'
import Wishlist from './Components/Wishlist'

function App() {

  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleClick = (item) => {
    let isItem = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isItem = true;
    })
    if (isItem) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false)
      }, 3000);
      return;
    }
    setCart([...cart, item]);
  }

  return (
    <>
      <Router>
        <Navbar count={cart.length} />
        <Routes>
          < Route path='/' element={<Frontpage />} />
          <Route path='/products' element={<Product handleClick={handleClick} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/wishlist' element={<Wishlist />} />
        </Routes>

        {/* Error Message */}
        {
          alert && <div className='alert'>Already added to the cart</div>
        }
        {/* Error Message */}

      </Router>
    </>
  );
};
export default App;
