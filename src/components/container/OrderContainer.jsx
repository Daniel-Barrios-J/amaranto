import React from 'react';
import OrderItem from '../pure/OrderItem';
import ResumeOrder from '../pure/ResumeOrder';
import Button from '../../components/pure/Button'
import { useNavigate } from 'react-router-dom';
import '../../styles/css/components/containers/orderContainer.css'

const OrderContainer = () => {
  
  const navigate = useNavigate();

  return (
    <div className='order-container'>
      <ResumeOrder order={[]}/>
      <OrderItem />
      <Button 
        buttonText={'⬅ Regresar a mis ordenes'} 
        typeButton={'secondary-button'} 
        onClick={()=>navigate('/my-orders')}
      />
    </div>
  );
}

export default OrderContainer;
