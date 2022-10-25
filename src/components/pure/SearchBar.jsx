import React from 'react';
import '../../styles/css/searchBar.css'

const SearchBar = () => {
  return (
    <div className='search-container'>
      <button className='icon-search'>
        <img alt='icon' src="https://img.icons8.com/tapes/40/000000/experimental-search-tapes.png"/>
      </button>
      <input
      type={'text'} 
      placeholder='Buscar...' 
      className='input-search'
      />
    </div>
  );
}

export default SearchBar;
