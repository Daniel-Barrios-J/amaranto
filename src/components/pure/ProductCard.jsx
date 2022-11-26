//react, router, hooks
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';

//styles
import '../../styles/css/components/pure/productCard.css'

const ProductCard = ({name, description, price, image, onClickCart, onClickInfo}) => {
  
  //estado global
  const logState = useSelector(state => state.logState)
  // const cartState = useSelector(state => state.cart)

  //estado local
  const [added, setAdded] = useState(false);

  //rutas
  const navigate = useNavigate()

  // const validateCartProduct = cartState.products.some(product => product.name === name)

  const handleAdd = ()=>{
    onClickCart();
    setAdded(true);
    setTimeout(()=>setAdded(false),1000);
  }
  
  return (
    <div className="product-card">
      <div className='product-img' onClick={onClickInfo}>
        <img 
          src={image}  
          alt="" 
          className="product-img"
        />
        <div className={added ? 'added-product' : 'added-product not-added'}>
          <p>Producto<br/>agregado</p>
        </div>
      </div>
      <div className="product-info">
        <div className='data-info' onClick={onClickInfo}>
          <p>{`$${price}.00`}</p>
          <p>{name}</p>
        </div>
        {/* todo clase condicional segun se agrega al carrito */}
        <div 
          className='cart-logo-info'
          onClick={logState.logged ? ()=>handleAdd() : ()=>navigate('/login')}
        >
          <img src="https://img.icons8.com/color/48/null/shopping-cart--v1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
