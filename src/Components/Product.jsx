import React from 'react'
import './Product.css'
import { Cards } from './Cards';
import productlist  from './productdata';


export const Product = ({handleClick}) => {
  return (
    <>
    <div className="product-section" >
      {
        productlist.map((item)=>(
            <Cards key={Math.random()} item={item} handleClick={handleClick}/>
        ))
      }
    </div>
    </>
  )
}
