import React from 'react';
import './Cart.css'

const Cart = ({card}) => {
  let total = 0 ;
  let shipping= 0 ;
  for(const product of card){
    total =total + product.price;
    shipping = shipping+ product.shipping
  }
  const tax =total*7/100
  const grandTotal= total+shipping+tax ;
  return (
    <div className='cart'>
       <div className='product-info'>
       <p className='order'>Order summary</p>
       <hr className='hr' />
       <p>product item selected :{card.length}</p>
       <p>total price: ${total}</p>
       <p>total Shipping:${shipping.toFixed(2)}</p>
       <p>tax:${tax}</p>
       <h2>Grand total:${grandTotal.toFixed(2)}</h2>
       </div>
     </div>
  );
};

export default Cart;