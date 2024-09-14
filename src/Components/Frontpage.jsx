import React from 'react'
import "./Frontpage.css"
import { useNavigate } from 'react-router-dom'


export const Frontpage=()=> {

  const navigate = useNavigate();
  return (
    <div className='frontpage'>
    <div className='showcase-wrapper'>
      <h1>Style simplified,</h1>
       <h1>Elegance amplified.</h1>
       <div className='showcase-button'>
       <button className='explore-button' onClick={()=>navigate('explore')}>Explore More</button>
       <button className='products-button' onClick={ () => navigate('products') }>Go to Products</button>
       </div>
    </div>

    <footer>
<div className="footer">
  <div className="query-box">
    <input type="text" placeholder='Query Your Issues Here!'/>
    <img src="./images/send.png" alt="" />
  </div>
<div className="row">
<a href="#"></a>
<a href="#"></a>
<a href="#"></a>
<a href="#"></a>
</div>

<div className="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div className="row"><p>"Discover the Intersection of Comfort and Fashion at K store.</p>
<p>Our Thoughtfully Curated Collection Blends Modern Aesthetics with Classic Designs, Ensuring You Look and Feel Your Best, Every Day!</p>
<br />
<p> Contact:<a href="#"> karthikeyan@gmail.com</a></p>
</div>
</div>
</footer>
    </div>
    
  )
}

