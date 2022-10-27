import React from 'react';
import '../../styles/css/cartTotal.css'

const CartTotal = ({total}) => {
  return (
    <div className="order">
      <p>
        <span>Total</span>
      </p>
      <p>
        ${total}
      </p>
    </div>
  );
}

export default CartTotal;
