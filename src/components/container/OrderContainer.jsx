// react, router
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//components
import OrderItem from '../pure/OrderItem';
import ResumeOrder from '../pure/ResumeOrder';
import Button from '../../components/pure/Button'

// redux
import { useSelector } from 'react-redux';

//styles
import '../../styles/css/components/containers/orderContainer.css'


const OrderContainer = () => {
  let {id} = useParams()
  console.log(id);
  const orders = useSelector(state => state.userState.user.orders)
  console.log(orders);
  const order = orders.filter(order => order.orderId === id)
  console.log('order',order);
  const navigate = useNavigate();

  return (
    <div className='order-container'>
      <ResumeOrder order={order}/>
      {
        order[0].products.map(product => {
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
