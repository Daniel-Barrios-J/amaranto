//react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Header from '../../components/container/Header';
import ProductDetailContainer from '../../components/container/ProductDetailContainer';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/cartState/reducer';
import { setDetails } from '../../store/producDetailState/reducer';

const ProductDetail = () => {

  //estado
  const details = useSelector(state => state.detailState);
  const logState = useSelector(state=>state.logState)
  const dispatch = useDispatch();
  
  //rutas
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <ProductDetailContainer 
          onClickClose={()=>dispatch(setDetails({...details, detailsClick: false}))}           
          onClickAdd={logState.logged ? ()=>dispatch(addItem(details.product)) : ()=>navigate('/login')}
          price={details.product.price}
          name={details.product.name}
          description={details.product.description}
          image={details.product.imgProduct}
        />
    </>
  );
}

export default ProductDetail;