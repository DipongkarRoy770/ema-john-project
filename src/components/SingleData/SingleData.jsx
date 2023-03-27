import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './SingleData.css'

const SingleData = (props) => {
  const {img,name,price,ratings,seller} =props.product
  const handleAddToCard =props.handleAddToCard
 
  return (
    <div className='product'>
      <img className='img' src={img} alt="load" />
       <div className='product-discription'>
       <h1 className='title'>{name}</h1>
       <p className='price'>Price :${price}</p>
       <p>Manufacturer:{seller}</p>
       <p>Ratings:{ratings}</p>
       </div>
      <button onClick={()=>handleAddToCard(props.product)} className='btn'>ADD To Card
      <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default SingleData;