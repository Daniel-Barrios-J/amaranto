//react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../pure/Button'

//styles
import '../../styles/css/components/containers/cotizationComponent.css'

const CotizationsComponent = () => {

  const navigate = useNavigate()

  return (
    <div className='cotizations-container button-container'>
      <Button buttonText={'Eventos 🍾'} typeButton={'secondary-button'} onClick={()=>navigate('/cotizacion-eventos')}>Cotiza tu evento</Button>
      <Button buttonText={'Personalizar arreglo'} typeButton={'secondary-button'} onClick={()=>navigate('/cotizacion-arreglos')}>Cotiza tu evento</Button>
    </div>
  );
}

export default CotizationsComponent;
