// react, hooks,
import React, { useEffect } from 'react';

//components
import Header from '../../components/container/Header';
import FilterBy from '../../components/pure/FilterBy';
import CustomContainer from '../../components/container/CustomContainer';
import ProductCardsContainer from '../../components/container/ProductCardsContainer';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../store/homeState/reducer';

// services
import { getProducts } from '../../services/manageProducts';

//--
const Home = () => {

  const productsHome = useSelector(state => state.homeState.products)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('trayendo productos');
    getProducts().then(res => dispatch(setProducts(res)));
  }, [dispatch]);

  return (
    <>
      <Header />
      <CustomContainer />
      <FilterBy />
      <ProductCardsContainer 
        productList={productsHome} 
      />
    </>
  );
}

export default Home;