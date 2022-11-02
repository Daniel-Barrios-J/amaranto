import React from 'react';
import SearchBar from '../pure/SearchBar';
import CotizationsComponent from '../pure/cotizationsComponent';
import '../../styles/css/customContainer.css'
const CustomContainer = () => {
  return (
    <div className='custom-container'>
      <SearchBar />
      <CotizationsComponent />
    </div>
  );
}

export default CustomContainer;
