import React from 'react';
import '../../styles/css/home.css'
import Header from '../../components/container/Header';

const Home = () => {
  return (
    <>
      <Header />
      <section class="main-container">
        <div class="cards-container">
          <div class="product-card">
            <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-img" />
            <div class="product-info">
              <div>
                <p>$120.00</p>
                <p>Lampara</p>
              </div>
              <div>
                <figure>
                  <img src="../icons/bt_add_to_cart.svg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div class="product-card">
            <img src="https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" class="product-img" />
            <div class="product-info">
              <div>
                <p>$120.00</p>
                <p>Lampara</p>
              </div>
              <div>
                <figure>
                  <img src="../icons/bt_add_to_cart.svg" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
}

export default Home;