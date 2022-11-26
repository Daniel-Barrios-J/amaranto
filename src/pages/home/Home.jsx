// react, hooks,
import React, { useEffect } from 'react';

//components
import Header from '../../components/container/Header';
import FilterBy from '../../components/pure/FilterBy';
import CustomContainer from '../../components/container/CustomContainer';
import ProductCardsContainer from '../../components/container/ProductCardsContainer';

//services
// import { getListUsers } from '../../services';

//firebase
import { getProducts } from '../../firebase';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setDataHome } from '../../store/homeState/reducer';

//--
const Home = () => {

  const dataHome = useSelector(state => state.homeState.dataHome)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   getProducts();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    console.log('trayendo productos');
    // getProducts().then(res => console.log(res));
    getProducts().then(res => dispatch(setDataHome(res)));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <CustomContainer />
      <FilterBy />
      <ProductCardsContainer productList={dataHome} />
      {/* <ProductCardsContainer productList={dataHome.data} /> */}
    </>
  );
}

export default Home;