import React, { useState } from 'react';
import '../../styles/css/components/pure/cartItem.css'

const CartItem = ({ imgArticle, nameArticle, price, onClick }) => {

  const [remove, setRemove] = useState(false);
  const handleRemove = () => {
    setRemove(true)
    setTimeout(()=>{
      onClick();
      setRemove(false)
    }, 800)
  }
  return (
    <div className="shopping-cart">
      {/* <div className={remove ? 'remove-product' : 'remove-product'}>
        <p>Eliminando del carrito...</p>
      </div> */}
      <div className={remove ? 'remove-product' : 'remove-product not-remove'}>
        <p>Eliminando del carrito...</p>
      </div>
      <figure>
        <img src={imgArticle} alt="lamp" />
      </figure>
      <p>{nameArticle}</p>
      <p>{`$${price}.00`}</p>
      <img 
        className='icon-remove-cart' 
        alt=""
        // onClick={onClick} 
        onClick={()=>handleRemove()} 
        src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" 
      />
    </div>
  );
}

export default CartItem;
