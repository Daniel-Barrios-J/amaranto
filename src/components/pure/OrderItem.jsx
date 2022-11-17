import React from 'react';

//styles
import '../../styles/css/components/pure/orderItem.css'

const OrderItem = ({imgArticle='https://img.ltwebstatic.com/images3_pi/2022/06/23/16559561529e4defb3fe6ae8ae706e4b5c7b8ac1dd.webp', nameArticle='Florecitas', price}) => {
  return (
    <div className="order-item">
      <figure>
        <img src={imgArticle} alt="article-img" />
      </figure>
      <p>{nameArticle}</p>
      <p>{`$${'27'}.00`}</p>
    </div>
  );
}

export default OrderItem;
