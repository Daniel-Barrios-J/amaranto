// react, hooks,
import React, { useEffect } from 'react';

//components
import Header from '../../components/container/Header';
import FilterBy from '../../components/pure/FilterBy';
import CustomContainer from '../../components/container/CustomContainer';
import ProductCardsContainer from '../../components/container/ProductCardsContainer';

//services
import { getListUsers } from '../../services';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setDataHome } from '../../store/homeState/reducer';

//--
const Home = () => {

  const dataHome = useSelector(state => state.homeState.dataHome)
  const dispatch = useDispatch()

  useEffect(() => {
    getListUsers().then(data => dispatch(setDataHome(data)));
    console.log('trayendo productos');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <CustomContainer />
      <FilterBy />
      <ProductCardsContainer productList={dataHome.data} />
    </>
  );
}

export default Home;