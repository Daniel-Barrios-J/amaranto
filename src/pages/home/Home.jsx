import React from 'react';
import '../../styles/css/home.css'
import Header from '../../components/container/Header';
import SearchBar from '../../components/pure/SearchBar';
import CotizationsComponent from '../../components/pure/cotizationsComponent';
import FilterBy from '../../components/pure/FilterBy';
import ProductCard from '../../components/pure/ProductCard';

const Home = () => {
  return (
    <>
      <Header />
      <div className='custom-container'>
        <SearchBar />
        <CotizationsComponent />
      </div>
        <FilterBy />
      {/* <section class="main-container"> */}
        <div class="cards-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      {/* </section> */}
    </>
    
  );
}

export default Home;