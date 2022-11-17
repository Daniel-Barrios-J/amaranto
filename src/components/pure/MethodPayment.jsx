import React from 'react';
import '../../styles/css/components/pure/methodPayment.css'

const MethodPayment = ({onClick, img='https://1000marcas.net/wp-content/uploads/2019/12/logo-Paypal-768x432.png', text}) => {
  return (
    <div className='method-payment' onclick={onClick}>
      <span>Pagar con </span>
      <img alt={''} src={img}/>
    </div>
  );
}

export default MethodPayment;
