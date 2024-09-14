import React from 'react';
import './Explore.css';
import exploreProducts from './exploreProduct';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Explore() {
  const [likedProducts, setLikedProducts] = useState([]);

  const handleLikeClick = (productId) => {
    if (!likedProducts.includes(productId)) {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  return (
    <>
      <div className="product-section explore-section">
        {exploreProducts.map((product) => (
          <div className="cards explore-cards" key={product.id}>
            <div className="image-container">
              <img className="shirts" src={product.imgUrl} alt="Image is Loading" />
            </div>
            <div className='cards-details'>
              <div className="cards-title">
                <p>{product.name}</p>
              </div>
              <p>({product.brand})</p>
              <button className="like-button" onClick={() => handleLikeClick(product.id)}>
                <FontAwesomeIcon icon={faHeart} style={{ color: likedProducts.includes(product.id) ? 'red' : 'black' }} />
              </button>
            </div>
          </div>
        ))}
        </div>
    </>
  )
}

export default Explore;
