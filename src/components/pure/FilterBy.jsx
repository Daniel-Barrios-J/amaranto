//react
import React from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setFilterState } from '../../store/filterState/reducer';

//styles
import '../../styles/css/components/pure/filterBy.css'


const FilterBy = () => {

  const filterState = useSelector(state => state.filterState)
  const dispatch = useDispatch();

  const handleFilter = (value)=> {
    if (value === filterState.filter) {
      return
    } else {
      console.log(`filtrando por ${value}`)
      dispatch(setFilterState(value))
    }
  }
  
  return (
    <div className='filter-container'>
      <label className='label' htmlFor='select-filter'>Ordenar: </label>
      <select className='select-filter' id='select-filter' onClick={(e)=>handleFilter(e.target.value)}>
        <option value={'recents'}>Recientes</option>
        <option value={'popular'}>Polular</option>
        <option value={'highest'}>Mayor $</option>
        <option value={'lower'}>Menor $</option>
      </select>
    </div>
  );
}

export default FilterBy;
