import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../pure/Button'
import '../../styles/css/buttons.css'
import '../../styles/css/cotizationComponent.css'


const CotizationsComponent = () => {
  return (
    <div className='cotizations-container button-container'>
      <NavLink to={'/cotizacion-eventos'}>
        <Button buttonText={'Eventos 🍾'} typeButton={'secondary-button'}>Cotiza tu evento</Button>
      </NavLink>
      <NavLink to={'/cotizacion-arreglos'}>
        <Button buttonText={'Personalizar arreglo'} typeButton={'secondary-button'}>Cotiza tu evento</Button>
      </NavLink>
    </div>
  );
}

export default CotizationsComponent;
