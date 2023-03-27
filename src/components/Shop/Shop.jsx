import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import SingleData from '../SingleData/SingleData';
import './Shop.css'

const Shop = () => {
  const [data ,setData] =useState([])
  const [card ,setCard] =useState([])
  useEffect(()=>{
    fetch('products.json')
     .then(res =>res.json())
     .then(data=>setData(data))
  },[]);
  useEffect(()=>{
    const storCard = getShoppingCart()
    console.log(storCard)
  },[])
  
  const handleAddToCard=(product)=>{
    // console.log(product)
    const newCard = [...card ,product]
    setCard(newCard)
    addToDb(product.id)
  };

  return (
    <div className='shop-container'>
      <div className="card-container">
        {
          data.map(product=><SingleData
          key={product.id}
          product ={product}
          handleAddToCard={handleAddToCard}
          ></SingleData>)
        }
      </div>
      <div className="product-container">
        <Cart card={card}></Cart>
      </div>
    </div>
  );
};

export default Shop;