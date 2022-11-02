import React from 'react';
import OrderCard from '../pure/OrderCard';
import '../../styles/css/orderContainer.css'

const OrderContainer = () => {
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
