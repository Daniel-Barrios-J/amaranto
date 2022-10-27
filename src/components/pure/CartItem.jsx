import React from 'react';
import '../../styles/css/cartItem.css';

const CartItem = ({ imgArticle, nameArticle, price }) => {
  return (
    <div className="shopping-cart">
      <figure>
        {/* <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="lamp" className="product-img" /> */}
        <img src={imgArticle} alt="lamp" />
      </figure>
      {/* <p>Lampara</p> */}
      <p>{nameArticle}</p>
      {/* <p>$19.00</p> */}
      <p>{price}</p>
      <img className='icon-remove-cart' src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" alt="" />
    </div>
  );
}

export default CartItem;
