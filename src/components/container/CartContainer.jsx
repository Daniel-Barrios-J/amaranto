import React from 'react';
import Button from '../pure/Button';
import CartItem from '../pure/CartItem';
import '../../styles/css/cartContainer.css'
import CartTotal from '../pure/CartTotal';


const CartContainer = ({className = '', closeCart}) => {
  return (
    <div className={`product-detail ${className}`}>
      <div className="my-order">
        <div className="my-order-container">
          <div className="title-container">
            <img onClick={closeCart} className="close-arrow-cart" src="https://img.icons8.com/android/24/000000/up-left-arrow.png" alt="arrow" />
            <p className="title">Shopping cart</p>
          </div>
    
          <div className="my-order-content">
    
            <CartItem 
              imgArticle={'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
              nameArticle={'Lampara'}
              price={'$19,00'}
            />
            <CartItem 
              imgArticle={'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
              nameArticle={'Lampara'}
              price={'$19,00'}
            />
            <CartItem 
              imgArticle={'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
              nameArticle={'Lampara'}
              price={'$19,00'}
            />
            <CartItem 
              imgArticle={'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
              nameArticle={'Lampara'}
              price={'$19,00'}
            />
            <CartItem 
              imgArticle={'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
              nameArticle={'Lampara'}
              price={'$19,00'}
            />

            {/* <div className="order">
              <p>
                <span>Total</span>
              </p>
              <p>
                $690.00
              </p>
            </div> */}
            <CartTotal total={'690.00'}/>

          </div>
        </div>
      </div>
      <Button buttonText={'Proceder al pago'} typeButton={'primary-button'} />
    </div>
  );
}

export default CartContainer;
