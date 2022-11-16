import React from 'react';

//components
import OrderCard from '../pure/OrderCard';

//styles
import '../../styles/css/components/containers/orderContainer.css'

const OrderContainer = ({orders}) => {
  //todo implementar renderizado a partir de una lista con las ordenes del usuario
  return (
    <div className="my-orders-container">
      <h1 className="title">Mis Ordenes</h1>
      <div className="my-order-content">
        <OrderCard date={'05/07/2022'} articles={'7 articulos'} amount={700} />
        <OrderCard date={'05/07/2022'} articles={'7 articulos'} amount={700} />
        <OrderCard date={'05/07/2022'} articles={'7 articulos'} amount={700} />
        <OrderCard date={'05/07/2022'} articles={'7 articulos'} amount={700} />
        <OrderCard date={'05/07/2022'} articles={'7 articulos'} amount={700} />
        <OrderCard date={'05/07/2022'} articles={'7 articulos'} amount={700} />
      </div>
    </div>
  );
}

export default OrderContainer;
