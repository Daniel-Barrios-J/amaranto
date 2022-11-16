import React from 'react';
import '../../styles/css/components/pure/searchBar.css'

const SearchBar = ({onClickSearch}) => {

  const handleSearch = (e) => {
    if (e.code==='Enter' || e.type === 'click') {
      return console.log('buscando contenido...');
    } else {
      console.log('ingresando datos...')
    }
  }
  //todo crear funcion handle keyUp
  return (
    <div className='search-container'>
      <button className='icon-search'>
        <img onClick={(e)=>handleSearch(e)} alt='icon' src="https://img.icons8.com/tapes/40/000000/experimental-search-tapes.png"/>
      </button>
      <input onKeyUp={(e)=>handleSearch(e)}
      type={'text'} 
      placeholder='Buscar...' 
      className='input-search'
      />
    </div>
  );
}

export default SearchBar;
