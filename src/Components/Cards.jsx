import React from 'react'
import './Cards.css'

export const Cards = ({item,handleClick}) => {

    const {img,title,type,description,color,reviews,details} = item;

  return (
    <>
    <div className="cards">
     <div className="image-container">
        <img className="shirts" src={img} alt="Image is Loading" />
     </div>      
     
     <div className='cards-details'>
     <div className="cards-title">
     <p>{title}</p>
     </div>
      <p>({type})</p>
      <p>Color: {color}</p>
      <p>Reviews: {reviews}</p>
      <button className="add-cart" onClick={()=>handleClick(item)}>Add to Cart</button>
      </div>
     </div>    
   
    </>
  );
};
