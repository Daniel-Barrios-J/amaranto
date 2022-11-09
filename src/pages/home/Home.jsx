// react, hooks,
import React, { useEffect } from 'react';

//components
import Header from '../../components/container/Header';
import FilterBy from '../../components/pure/FilterBy';
import CustomContainer from '../../components/container/CustomContainer';
import ProductCardsContainer from '../../components/container/ProductCardsContainer';
import { Pagination } from '@mui/material';

//services
import { getListUsers } from '../../services';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setDataHome } from '../../store/homeState/reducer';

// Styles
import '../../styles/css/home.css';

//--
const Home = () => {

  const dataHome = useSelector(state => state.homeState.dataHome)
  // console.log(dataHome.length)
  const dispatch = useDispatch()

  useEffect(() => {
    getListUsers().then(data => dispatch(setDataHome(data)));
    console.log('trayendo productos');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (change) => {
    console.log(change)
    console.log(change.textContent);
    if(change.textContent > 0) {
      getListUsers(`https://reqres.in/api/users?page=${change.textContent}`).then(data => dispatch(setDataHome(data)));
    } else if(change.textContent === '>') {
      
    }
  }
  // const handleChange = (change) => {
  //   console.log(change);
  //   if(change > 0) {
  //   } else if(change === '>') {
  //     getListUsers(`https://reqres.in/api/users?page=${dataHome.total_pages+1}`).then(data => dispatch(setDataHome(data)));
      
  //   }
  // }

  return (
    <>
      <Header />
      <CustomContainer />
      <FilterBy />
      <ProductCardsContainer productList={dataHome.data} />
      <Pagination onChange={(e)=>handleChange(e.target)} style={{display: 'flex', justifyContent: 'center'}} count={dataHome.total_pages} />
      {/* <Pagination onChange={(e)=>handleChange(e.target.textContent)} style={{display: 'flex', justifyContent: 'center'}} count={dataHome.total_pages} /> */}
    </>
    
  );
}

export default Home;