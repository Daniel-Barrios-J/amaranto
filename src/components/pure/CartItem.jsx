//react, hooks, router
import React, { useState } from 'react';

//styles
import '../../styles/css/components/pure/cartItem.css'

//redux
// import { useSelector } from 'react-redux';

const CartItem = ({ imgArticle, nameArticle, price, onClick }) => {

  // const cartState = useSelector(state => state.cart)
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
      <div className={remove ? 'remove-product' : 'remove-product not-remove'}>
        <p>Eliminando del carrito...</p>
      </div>
      <figure>
        <img src={imgArticle} alt="article" />
      </figure>
      <p className='name-article'>{nameArticle}</p>
      {/* <p className='quantity'>x2</p> */}
      <p className='price-article'>{`$${price}.00`}</p>
      <img 
        className='icon-remove-cart' 
        alt="delete-icon"
        // onClick={onClick} 
        onClick={()=>handleRemove()} 
        src="https://img.icons8.com/material-outlined/24/000000/trash--v1.png" 
      />
    </div>
  );
}

export default CartItem;
