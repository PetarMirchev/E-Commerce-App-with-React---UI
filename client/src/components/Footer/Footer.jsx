import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Random</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Odit beatae vitae explicabo repellat alias amet! Obcaecati 
            exercitationem sequi et? Sed voluptates saepe dolorem ab ducimus officia iusto, 
            explicabo reiciendis quis.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Odit beatae vitae explicabo repellat alias amet! Obcaecati 
            exercitationem sequi et? Sed voluptates saepe dolorem ab ducimus officia iusto, 
            explicabo reiciendis quis.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Pepi Store</span>
          <span className='copyright'>© 2023 Petar Mirchev</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer;

