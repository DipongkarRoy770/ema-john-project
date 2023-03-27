import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import './Shop.css'

const Shop = () => {
  const [data ,setData] =useState([])
  useEffect(()=>{
    fetch('products.json')
     .then(res =>res.json())
     .then(data=>setData(data))
  },[])
  return (
    <div className='shop-container'>
      <div className="card-container">
        {
          data.map(product=><SingleData
          key={product.id}
          product ={product}
          ></SingleData>)
        }
      </div>
      <div className="product-container">
        <p>oder summary</p>
      </div>
    </div>
  );
};

export default Shop;