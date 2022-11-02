import React from 'react';
import Button from '../../components/pure/Button';
import '../../styles/css/productDetailContainer.css'

const ProductDetailContainer = (props) => {
  return (
    <div className={`product-detail ${props.classNameDetail}`}>
      <div className="product-detail-close" onClick={props.onClickClose}>
        <img src="https://img.icons8.com/ios/50/000000/cancel.png" alt="close" />
      </div>
      <img className="product-img" src={props.image} alt="" />
      <div className="product-info">
        <p>{`$${props.price}.00`}</p>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <Button buttonText={'Agregar al carrito'} typeButton={'primary-button'} onClick={props.onClickAdd}  />
      </div>
    </div>
  );
}

export default ProductDetailContainer;
