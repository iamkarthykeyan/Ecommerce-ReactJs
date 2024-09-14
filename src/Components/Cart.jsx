import React , {useEffect, useState} from 'react'
import "./Cart.css"

export const Cart = ({cart, setCart}) => {
  const [amount,setAmount] = useState(0);

  const priceHandling = () =>{
    let total = 0;
    cart.map((item)=>(
      total+= item.quantity * item.price
      ))
      setAmount(total);
  }

  const removeCart = (id)=>{
    const product = cart.filter((item)=>
      item.id !== id
    );
    setCart(product);
  }

  useEffect(()=>{
    priceHandling();
  })

  return (
    <article className='cart-page'>
    {
       cart.map((item)=>(
          <div className="cart-container" key={item.id}>
            <div className="cart-image">
              <img src={item.img} alt="dress"/>
            </div>
            <div className="cart-contents">
            <p className='cart-text'>{item.title}</p>
              <p>{item.description}</p>
              <p className='price-text'>Price: ${item.price}</p>
              <button className='add'>+</button>
              <button className='add'>{item.quantity}</button>
              <button className='add'>-</button>
              <button className="remove-button" onClick={()=>removeCart(item.id)}>Remove</button>
            </div>
          </div>
       ))

    }
    <div className='totalamount'>
    <p>Total Amount of your Cart <h1>${amount}/-</h1></p>
    </div>
    </article>
  );
};
