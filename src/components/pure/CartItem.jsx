import React from 'react';
import '../../styles/css/components/pure/cartItem.css'

const CartItem = ({ imgArticle, nameArticle, price, onClick }) => {
  return (
    <div className="shopping-cart">
      <figure>
        <img src={imgArticle} alt="lamp" />
      </figure>
      <p>{nameArticle}</p>
      <p>{`$${price}.00`}</p>
      <img className='icon-remove-cart' onClick={onClick} src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" alt="" />
    </div>
  );
}

export default CartItem;
