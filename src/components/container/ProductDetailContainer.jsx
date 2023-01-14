//react, hooks, router
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../../components/pure/Button';

//redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/userState/reducer';

//services
import { manageUserData } from '../../services/manageUserData';

//styles
import '../../styles/css/components/containers/productDetailContainer.css'

const ProductDetailContainer = ({ classNameDetail, onClickClose, onClickAdd}) => {

  const user = useSelector(state => state.userState.user);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [width, setWidth] = useState(0);
  useEffect(() => {
    manageUserData(user);
    setWidth(window.screen.width);
  }, [user]);

  const product = useSelector(state => state.homeState.detailProduct.product)

  //estado local
  const [added, setAdded] = useState(false);
  const desktopView = width > 720 ? 'product-detail-desktop' : '' 

  const handleAdd = (product)=>{
    if(user.logged) {
        setAdded(true);
        dispatch(addItem(product))
        setTimeout(()=>setAdded(false),1000)
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
          src={product.images.img1}  
          alt="" 
          className="product-img"
        />
        <div className={added ? 'added-product' : 'added-product not-added'}>
          <p>Producto<br/>agregado</p>
        </div>
      </div>
      <div className="product-info">
        <p>{`$${product.price}.00`}</p>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <Button buttonText={'Agregar al carrito'} typeButton={'primary-button'} onClick={()=>handleAdd(product)}  />
      </div>
    </div>
  );
}

export default ProductDetailContainer;
