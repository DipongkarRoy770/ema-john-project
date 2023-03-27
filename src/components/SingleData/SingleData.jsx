import React from 'react';
import './SingleData.css'

const SingleData = (props) => {
  console.log(props)
  const {img,name,price,ratings,seller} =props.product
  return (
    <div className='product'>
      <img className='img' src={img} alt="load" />
       <div className='product-discription'>
       <h1 className='title'>{name}</h1>
       <p className='price'>Price :${price}</p>
       <p>Manufacturer:{seller}</p>
       <p>Ratings:{ratings}</p>
       </div>
       <button className='btn'>ADD To Card</button>
    </div>
  );
};

export default SingleData;