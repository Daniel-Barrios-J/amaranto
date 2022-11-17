import React from 'react';
import OrderItem from '../pure/OrderItem';
import ResumeOrder from '../pure/ResumeOrder';
import Button from '../../components/pure/Button'
import { useNavigate } from 'react-router-dom';

const OrderContainer = () => {
  
  const navigate = useNavigate();

  return (
    <div>
      <ResumeOrder/>
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <Button 
        buttonText={'⬅️ Regresar a mis ordenes'} 
        typeButton={'secondary-button'} 
        onClick={()=>navigate('/my-orders')}
      />
    </div>
  );
}

export default OrderContainer;
