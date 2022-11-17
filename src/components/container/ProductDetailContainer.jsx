//react, hooks, router
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../../components/pure/Button';

//redux
import { useSelector } from 'react-redux';

//styles
import '../../styles/css/components/containers/productDetailContainer.css'

const ProductDetailContainer = ({name, description, price, image, classNameDetail, onClickClose, onClickAdd}) => {

  const logged = useSelector(state => state.logState.logged);
  const navigate = useNavigate();

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  //estado local
  const [added, setAdded] = useState(false);
  const desktopView = width > 720 ? 'product-detail-desktop' : '' 

  const handleAdd = ()=>{
    if(logged) {
      onClickAdd();
      setAdded(true);
      setTimeout(()=>setAdded(false),1000);
    } else {
      navigate('/login')
    }
  }

  return (
    <div className={`product-detail ${desktopView} ${classNameDetail}`}>
      <div className="product-detail-close" onClick={onClickClose}>
        <img src="https://img.icons8.com/ios/50/000000/cancel.png" alt="close" />
      </div>

      <div className='product-img' >
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
        <p>{`$${price}.00`}</p>
        <p>{name}</p>
        <p>{description}</p>
        <Button buttonText={'Agregar al carrito'} typeButton={'primary-button'} onClick={()=>handleAdd()}  />
      </div>
    </div>
  );
}

export default ProductDetailContainer;
