import React from 'react';
import OrderItem from '../pure/OrderItem';
import ResumeOrder from '../pure/ResumeOrder';
import Button from '../../components/pure/Button'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../styles/css/components/containers/orderContainer.css'


const OrderContainer = () => {
  
  const order = useSelector(state => state.orderState.order)
  const navigate = useNavigate();

  return (
    <div className='order-container'>
      <ResumeOrder order={order.products}/>
      {
        order.products.map(product => {
          return <OrderItem 
            key={product.id}
            price={product.price}
            imgArticle={product.images.img1}
            nameArticle={product.name}
          />
        })
      }
      <Button 
        buttonText={'⬅ Regresar a mis ordenes'} 
        typeButton={'secondary-button'} 
        onClick={()=>navigate('/my-orders')}
      />
    </div>
  );
}

export default OrderContainer;
