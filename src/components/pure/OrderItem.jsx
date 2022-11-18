import React from 'react';

//styles
import '../../styles/css/components/pure/orderItem.css'

const OrderItem = ({imgArticle , nameArticle, price}) => {
  return (
    <div className="order-item">
      <figure>
        <img src={imgArticle} alt="article-img" />
      </figure>
      <p>{nameArticle}</p>
      <p>{`$${price}.00`}</p>
    </div>
  );
}

export default OrderItem;
