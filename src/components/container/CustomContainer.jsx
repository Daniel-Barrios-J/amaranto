//react
import React from 'react';

//components
import SearchBar from '../pure/SearchBar';
import CotizationsComponent from '../pure/cotizationsComponent';

//styles
import '../../styles/css/components/containers/customContainer.css'

const CustomContainer = () => {
  return (
    <div className='custom-container'>
      <SearchBar />
      <CotizationsComponent />
    </div>
  );
}

export default CustomContainer;
