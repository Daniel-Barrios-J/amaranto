import React from 'react';
import Header from '../../components/container/Header';
import ProductDetailContainer from '../../components/container/ProductDetailContainer';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const detailState = useSelector(state => state.detailState);

  return (
    <>
      <Header />
      <ProductDetailContainer
        onClickAdd={()=>console.log(detailState)}
        price={detailState.product.first_name}
        description={detailState.product.last_name}
        image={detailState.product.avatar}
      />
    </>
  );
}

export default ProductDetail;