//react
import React from 'react';

//redux
import { useDispatch } from 'react-redux';
import { setHigherPrice, setLowerPrice, setPopulars, setRecents } from '../../store/filterState/reducer';

//styles
import '../../styles/css/filterBy.css'


const FilterBy = () => {

  const dispatch = useDispatch();
  
  return (
    <div className='filter-container'>
      <label className='label' htmlFor='select-filter'>Ordenar: </label>
      <select className='select-filter' id='select-filter'>
        <option onClick={()=>dispatch(setRecents('recents'))}>Recientes</option>
        <option onClick={()=>dispatch(setPopulars('popular'))}>Polular</option>
        <option onClick={()=>dispatch(setHigherPrice('higher-price'))}>Mayor $</option>
        <option onClick={()=>dispatch(setLowerPrice('lower-price'))}>Menor $</option>
      </select>
    </div>
  );
}

export default FilterBy;
