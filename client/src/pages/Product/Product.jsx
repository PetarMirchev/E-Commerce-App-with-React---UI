import React from 'react';
import { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';


const images = [
  'https://plus.unsplash.com/premium_photo-1669703777692-0289d224bcc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
];



const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);

  // starting Quantity is (1), cannot sell 0 products :)
  const [quantity, setQuantity] = useState(1);


  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt=""  onClick={(e) => setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$122</span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Rerum unde dolorem, et deserunt earum explicabo eius quidem eos, 
          maxime id ab quos ut neque porro maiores vel, pariatur sequi necessitatibus.
        </p>
        <div className="quantity">
          {/* for (-) button -->add condition if prev State is 1, will stay at 1, if is not will change -1 */}
          <button onClick={()=> setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CARD
        </button>
        <div className="links">
          <div className="item">
            <FavoriteIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>VendoR: Polo</span>
          <span>Product type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <div className="info">
          <span>DESCRIPTION: </span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Doloribus consectetur perspiciatis aliquam cumque culpa 
            officia nesciunt et quae facere. Ducimus, impedit cumque dolore 
            amet deserunt cum inventore aliquid laudantium. Suscipit!
          </span>
          <hr/>
          <span>ADDITIONAL INFORMATION: </span>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Doloribus consectetur perspiciatis aliquam cumque culpa 
            officia nesciunt et quae facere.
          </span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product;

