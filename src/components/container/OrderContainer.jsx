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

  const navigate = useNavigate();
  let {id} = useParams()

  const user = useSelector(state => state.userState.user)
  const filter = user.orders.filter(order => order.orderId === id)
  const order = filter[0]
  console.log(order);
  return (
    <div className='order-container'>
      <ResumeOrder order={order.products}/>
      {
        order.products.map((product, index) => {
          return <OrderItem 
            key={index}
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
