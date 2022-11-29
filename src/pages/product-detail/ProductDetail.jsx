//react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Header from '../../components/container/Header';
import ProductDetailContainer from '../../components/container/ProductDetailContainer';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/userState/reducer';
import { setDetails } from '../../store/producDetailState/reducer';

const ProductDetail = () => {

  //estado
  const product = useSelector(state => state.detailState.product);
  const logState = useSelector(state=>state.logState)
  const dispatch = useDispatch();
  
  //rutas
  const navigate = useNavigate();

  const handleAdd = () => {
    if(logState.logged) {
      
      dispatch(addItem(product))
    } 
    navigate('/login')
  }

  return (
    <>
      <Header />
      <ProductDetailContainer 
          onClickClose={()=>dispatch(setDetails({...product, detailsClick: false}))}           
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