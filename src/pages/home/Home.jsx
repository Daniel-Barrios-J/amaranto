import React from 'react';
import '../../styles/css/home.css';
import Header from '../../components/container/Header';
import FilterBy from '../../components/pure/FilterBy';
import products from '../../products.json';
import CustomContainer from '../../components/container/CustomContainer';
import ProductCardsContainer from '../../components/container/ProductCardsContainer';

const Home = () => {
  return (
    <>
      <Header />
      <CustomContainer />
      <FilterBy />
      <ProductCardsContainer productList={products} />
    </>
    
  );
}

export default Home;