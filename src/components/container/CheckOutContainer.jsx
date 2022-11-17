import React from 'react';
import Button from '../pure/Button';
import { useNavigate } from 'react-router-dom';
import ResumeOrder from '../pure/ResumeOrder';
import MethodPayment from '../pure/MethodPayment';
import '../../styles/css/components/containers/checkOutContainer.css'

const CheckOutContainer = () => {

  const navigate = useNavigate();

  return (
    <div className='check-out-container'>
      <h2>Resumen de orden</h2>
      <ResumeOrder />
      <MethodPayment />
      <MethodPayment img='https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp'/>
      <MethodPayment img='https://juridicomartinez.com/images/icono-efectivo.png' />
        <p className='text'>¿Quieres añadir mas articulos?</p>
        <Button buttonText={'Ir a la tienda'} typeButton={'secondary-button'} onClick={()=>navigate('/')}/>
    </div>
  );
}

export default CheckOutContainer;
