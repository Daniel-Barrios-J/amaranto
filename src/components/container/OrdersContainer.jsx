//react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import OrderCard from '../pure/OrderCard';
import Button from '../pure/Button';

//redux
import { useSelector } from 'react-redux';

//styles
import '../../styles/css/components/containers/ordersContainer.css'

const OrdersContainer = () => {
  //todo implementar renderizado a partir de una lista con las ordenes del usuario
  const orders = useSelector(state => state.ordersState.orders)
  const navigate = useNavigate();
  console.log(orders.valueOf())

  return (
    <div className="my-orders-container">
      <div className='title-container'>
        <h1 className="title">Mis Ordenes</h1>
      </div>
      <div className="my-order-content">
        {
          !orders.length
          ? 
            <div className='empty-orders'>
              <h3>Aun no haz realizado compras...</h3>
              <img alt='icon-cart' src="https://img.icons8.com/quill/100/null/experimental-shopping-bag-full-quill.png"/>
              <p>Agregar articulos a tu carrito para hacer una compra 😁</p>
              <Button
                buttonText={'Ir a la tienda'} 
                typeButton={'primary-button'} 
                onClick={()=>navigate('/')}
              />
            </div>
          : 
            orders.map((order) => {
              return <OrderCard 
                key={order.orderId}
                onClick={()=>navigate('/order')} 
                date={order.date} 
                articles={`${order.products.length} articulos`} 
                amount={order.totalPurchase} 
              />
          })
        }
      </div>
    </div>
  );
}

export default OrdersContainer;
