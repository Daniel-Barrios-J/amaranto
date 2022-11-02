import React from 'react';
import '../../styles/css/home.css'
import Header from '../../components/container/Header';
import SearchBar from '../../components/pure/SearchBar';
import CotizationsComponent from '../../components/pure/cotizationsComponent';
import FilterBy from '../../components/pure/FilterBy';
import ProductCard from '../../components/pure/ProductCard';
import products from '../../products.json'
import { addItem } from '../../store/cartState/reducer';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Header />
      <div className='custom-container'>
        <SearchBar />
        <CotizationsComponent />
      </div>
        <FilterBy />
      {/* <section className="main-container"> */}
        <div className="cards-container">
        {
          products.map((product, index)=>{
            return <ProductCard onClick={()=>dispatch(addItem(product))} name={product.first_name} description={product.last_name} price={product.id} image={product.avatar} key={index}/>
          })
        }
          
        </div>
      {/* </section> */}
    </>
    
  );
}

export default Home;