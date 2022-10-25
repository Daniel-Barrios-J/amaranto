import React from 'react';

const Order = () => {
  return (
    <div class="order">
    <div class="order-container">

      <h1 class="title">My order</h1>

      <div class="my-order-content">
        <div class="order">
          <p>
            <span>01.01.2022</span>
            <span>6 articles</span>
          </p>
          <p>
            $690.00
          </p>
        </div>

        <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="lamp" class="product-img" />
          </figure>
          <p>Lamp room</p>
          <p>$19.00</p>
        </div>
  
        <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="lamp" class="product-img" />
          </figure>
          <p>Lamp room</p>
          <p>$19.00</p>
        </div>
  
        <div class="shopping-cart">
          <figure>
            <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="lamp" class="product-img" />
          </figure>
          <p>Lamp room</p>
          <p>$19.00</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Order;