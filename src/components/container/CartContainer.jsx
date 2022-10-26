import React from 'react';
import Button from '../pure/Button';
import '../../styles/css/cartContainer.css'


const CartContainer = ({className = ''}) => {
  return (
    <div className={`product-detail ${className}`}>
      <div className="my-order">
        <div className="my-order-container">
          <div className="title-container">
            <img src="../icons/flechita.svg" alt="arrow" className="arrow" />
            <p className="title">Shopping cart</p>
          </div>
    
          <div className="my-order-content">
    
            <div className="shopping-cart">
              <figure>
                <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="lamp" className="product-img" />
              </figure>
              <p>Lamp room</p>
              <p>$19.00</p>
              <img src="../icons/icon_close.png" alt="" />
            </div>
            <div className="shopping-cart">
              <figure>
                <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="lamp" className="product-img" />
              </figure>
              <p>Lamp room</p>
              <p>$19.00</p>
              <img src="../icons/icon_close.png" alt="" />
            </div>

            <div className="order">
              <p>
                <span>Total</span>
              </p>
              <p>
                $690.00
              </p>
            </div>

          </div>
        </div>
      </div>
      <Button buttonText={'Proceder al pago'} typeButton={'primary-button'} />
    </div>
  );
}

export default CartContainer;
