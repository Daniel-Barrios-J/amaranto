import React from 'react';
import '../../styles/css/components/pure/cartTotal.css'

//redux
import { useSelector } from 'react-redux';

const CartTotal = () => {

  const cart = useSelector( state => state.userState.user.cart);

  const totalCart = () => {
    let priceArray = cart.map((product)=>product.price)
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
