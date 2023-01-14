//react, router
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Header from '../../components/container/Header';
import ProductDetailContainer from '../../components/container/ProductDetailContainer';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/userState/reducer';
import { setDetails } from '../../store/homeState/reducer';

const ProductDetail = () => {

  //estado
  const product = useSelector(state => state.homeState.detailProduct.product);
  const logState = useSelector(state=>state.userState.user.logged)
  const dispatch = useDispatch();
  
  //rutas
  const navigate = useNavigate();

  const handleAdd = () => {
    if(logState) return dispatch(addItem(product))
    navigate('/login')
  }

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  const handleClose = () => {
    width > 720 ? dispatch(setDetails({...product, detailsClick: false})) : navigate('/')
  }

  return (
    <>
      <Header />
      <ProductDetailContainer 
          onClickClose={handleClose}   
          onClickAdd={handleAdd}
          price={product.price}
          name={product.name}
          description={product.description}
          image={product.images.img1}
        />
    </>
  );
}

export default ProductDetail;