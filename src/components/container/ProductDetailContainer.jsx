//react, hooks
import React, {useEffect, useState} from 'react';

//components
import Button from '../../components/pure/Button';

//styles
import '../../styles/css/components/containers/productDetailContainer.css'

const ProductDetailContainer = ({name, description, price, image, classNameDetail, onClickClose, onClickAdd}) => {

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  const desktopView = width > 720 ? 'product-detail-desktop' : '' 

  return (
    <div className={`product-detail ${desktopView} ${classNameDetail}`}>
      <div className="product-detail-close" onClick={onClickClose}>
        <img src="https://img.icons8.com/ios/50/000000/cancel.png" alt="close" />
      </div>
      <img className="product-img" src={image} alt="" />
      <div className="product-info">
        <p>{`$${price}.00`}</p>
        <p>{name}</p>
        <p>{description}</p>
        <Button buttonText={'Agregar al carrito'} typeButton={'primary-button'} onClick={onClickAdd}  />
      </div>
    </div>
  );
}

export default ProductDetailContainer;
