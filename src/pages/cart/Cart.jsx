import React from 'react';
import '../../styles/css/cart.css'
import Button from '../../components/pure/Button'
import Header from '../../components/container/Header';

const Cart = () => {
  return (
    <div>
      <Header />
      <div class="product-detail">
        <div class="my-order">
          <div class="my-order-container">
            <div class="title-container">
              <img src="../icons/flechita.svg" alt="arrow" class="arrow" />
              <p class="title">Shopping cart</p>
            </div>
      
            <div class="my-order-content">
      
              <div class="shopping-cart">
                <figure>
                  <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="lamp" class="product-img" />
                </figure>
                <p>Lamp room</p>
                <p>$19.00</p>
                <img src="../icons/icon_close.png" alt="" />
              </div>
              <div class="shopping-cart">
                <figure>
                  <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="lamp" class="product-img" />
                </figure>
                <p>Lamp room</p>
                <p>$19.00</p>
                <img src="../icons/icon_close.png" alt="" />
              </div>

              <div class="order">
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
        {/* <button class="primary-button add-to-cart-button">  
          Check out
        </button> */}
        <Button buttonText={'Proceder al pago'} typeButton={'primary-button'} />
      </div>
    </div>
  );
}

export default Cart;
