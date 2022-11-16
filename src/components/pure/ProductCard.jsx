//react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';

//styles
import '../../styles/css/components/pure/productCard.css'

const ProductCard = ({name, description, price, image, onClickCart, onClickInfo}) => {

  const navigate = useNavigate()
  const logState = useSelector(state => state.logState)

  return (
    <div className="product-card">
      <img src={image} onClick={onClickInfo} alt="" className="product-img" />
      <div className="product-info">
        <div className='data-info' onClick={onClickInfo}>
          <p>{`$${price}.00`}</p>
          <p>{`${name} ${description}`}</p>
        </div>
        {/* todo clase condicional segun se agrega al carrito */}
        <div className='cart-logo-info' onClick={logState.logged ? ()=>onClickCart() : ()=>navigate('/login')}>
          <img src="https://img.icons8.com/color/48/null/shopping-cart--v1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
