import React from 'react';
import '../../styles/css/cartTotal.css'

import { useSelector } from 'react-redux';

const CartTotal = () => {

  const cartState = useSelector( state => state.cart);

  const totalCart = () => {
    let priceArray = cartState.usuarios.map((product)=>product.price)
    if (priceArray.length === 0) {
      return '0'
     }
    let totalTemp = priceArray.reduce((a, b)=>a + b)
    return totalTemp
  }

  return (
    <div className="total-order">
      <p>
        <span>Total</span>
      </p>
      <p>
        ${totalCart()}.00
      </p>
    </div>
  );
}

export default CartTotal;
