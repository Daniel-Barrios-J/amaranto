import React from 'react';
import '../../styles/css/filterBy.css'

const FilterBy = () => {
  return (
    <div className='filter-container'>
      <label className='label' htmlFor='select-filter'>Ordenar: </label>
      <select className='select-filter' id='select-filter'>
        <option>Recientes</option>
        <option>Polular</option>
        <option>Mayor $</option>
        <option>Menor $</option>
        <option>opcion $</option>
      </select>
      
    </div>
  );
}

export default FilterBy;
