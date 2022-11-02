import React from 'react';
//components
import Button from '../pure/Button';
import CartItem from '../pure/CartItem';
import CartTotal from '../pure/CartTotal';
//redux
import { removeItem } from '../../store/cartState/reducer';
import { useDispatch, useSelector } from 'react-redux';
// styles
import '../../styles/css/cartContainer.css'

const CartContainer = ({className = '', closeCart, removeToCart}) => {

  const state = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div className={`cart-detail ${className}`}>
      <div className="my-order">
        <div className="my-order-container">
          <div className="title-container">
            <img onClick={closeCart} className="close-arrow-cart" src="https://img.icons8.com/android/24/000000/up-left-arrow.png" alt="arrow" />
            <p className="title">Shopping cart</p>
          </div>
    
          <div className="my-order-content">
            {
              state.usuarios.map((usuario, index) => {
                return <CartItem onClick={()=>{console.log(`Eliminando del carrito objeto ${index}`); dispatch(removeItem(index))}} nameArticle={usuario.first_name} price={usuario.last_name} key={index} imgArticle={usuario.avatar} />
              })
            }
            <CartTotal total={'690.00'}/>

          </div>
        </div>
      </div>
      <Button buttonText={'Proceder al pago'} typeButton={'primary-button'} onClick={()=>console.log('llendo al checkout')}/>
    </div>
  );
}

// export default connect(mapCart,{removeToCart})(CartContainer);
export default (CartContainer);
