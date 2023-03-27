import React from 'react';
import './Cart.css'

const Cart = ({card}) => {
  let total = 0 ;
  for(const product of card){
    total =total + product.price;
  }
  return (
    <div className='cart'>
       <div className='product-info'>
       <p className='order'>Order summary</p>
       <hr className='hr' />
       <p>product item selected :{card.length}</p>
       <p>total price: {total}</p>
       <p>total Shipping:</p>
       <p>tax:</p>
       <h6>Grand total:</h6>
       </div>
     </div>
  );
};

export default Cart;