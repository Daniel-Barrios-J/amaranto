import React from 'react';
import '../../styles/css/components/pure/orderCard.css'

const OrderCard = ({date, articles, amount, onClick}) => {
  return (
    <div className="order-card" onClick={onClick}>
      <p>
        <span>{date}</span>
        <span>{articles}</span>
      </p>
      <p>{ `$${amount}.00` }</p>
      <img alt='flecha-derecha' className='arrow' src="https://img.icons8.com/ios/50/null/circled-chevron-up.png"/>
    </div>
  );
}

export default OrderCard;
