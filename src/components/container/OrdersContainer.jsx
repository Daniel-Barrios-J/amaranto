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

  return (
    <div className="my-orders-container">
      <div className='title-container'>
        <h1 className="title">Mis Ordenes</h1>
      </div>
      <div className="my-order-content">
        {
          orders[0].totalPurchase === '00'
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
            orders.map((order,index) => {
              return <OrderCard 
                onClick={()=>navigate('/order')} 
                date={orders[index].date} 
                articles={`${orders[index].products.length} articulos`} 
                amount={orders[index].totalPurchase} 
              />
          })
        }
      </div>
    </div>
  );
}

export default OrdersContainer;
