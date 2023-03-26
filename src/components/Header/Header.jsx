import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div>
        <h5 className='name'>Ema-Jhon</h5>
      </div>
      <div>
        <ul>
         <a href="#shop">Shop</a>
         <a href="#order">Oder</a>        
         <a href="#inventori">Inventori</a>        
         <a href="#login">Login</a>   
        </ul>       
      </div>
    </div>
  );
};

export default Header;