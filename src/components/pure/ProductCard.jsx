//react, router, hooks
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/userState/reducer';

//styles
import '../../styles/css/components/pure/productCard.css'


const ProductCard = ({product, onClickInfo}) => {
  
  //estado global
  const logState = useSelector(state => state.userState.user.logged)
  const dispatch = useDispatch();

  //estado local
  const [added, setAdded] = useState(false);

  //rutas
  const navigate = useNavigate()

  // const validateCartProduct = cartState.products.some(product => product.name === name)
  const handleAdd = ()=>{
    dispatch(addItem(product));
    setAdded(true);
    setTimeout(()=>setAdded(false),1500);
  }
  
  return (
    <div className="product-card">
      <div className='product-img' onClick={onClickInfo}>
        <img 
          src={product.images.img1}  
          alt="" 
          className="product-img"
        />
        <div className={added ? 'added-product' : 'added-product not-added'}>
          <p>Producto<br/>agregado</p>
        </div>
      </div>
      <div className="product-info">
        <div className='data-info' onClick={onClickInfo}>
          <p>{`$${product.price}.00`}</p>
          <p>{product.name}</p>
        </div>
        {/* todo clase condicional segun se agrega al carrito */}
        <div 
          className='cart-logo-info'
          onClick={logState ? ()=>handleAdd() : ()=>navigate('/login')}
        >
          <img src="https://img.icons8.com/color/48/null/shopping-cart--v1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
