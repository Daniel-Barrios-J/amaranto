import React from 'react';
import '../../styles/css/orderCard.css'

const OrderCard = ({date, articles, amount, onClick}) => {
  return (
    <div className="order-card" onClick={onClick}>
      <p>
        <span>{date}</span>
        <span>{articles}</span>
      </p>
      <p>{ `$${amount}.00` }</p>
      <img src="../icons/flechita.svg" alt="" />
    </div>
  );
}

export default OrderCard;
