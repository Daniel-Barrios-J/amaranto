import React from 'react';
import Button from '../pure/Button';
import CartItem from '../pure/CartItem';
import '../../styles/css/cartContainer.css'
import CartTotal from '../pure/CartTotal';
// import { connect } from 'react-redux';
// import { removeToCart } from '../../store/cartState/action';
// import usuarios from '../../usuarios.json'
// import { fetchAllUSers } from '../../store/cartState/reducer';
import products from '../../products.json'
import { setCartList, removeItem } from '../../store/cartState/reducer';
import { useDispatch, useSelector } from 'react-redux';

// const mapCart = (state) => {
//   return {
//     products: state.cartReducer.products,
//   }
// }
// const mapCart = (state) => {
//   return {
//     usuarios: state.cartReducer.usuarios,
//   }
// }

const CartContainer = ({className = '', closeCart, removeToCart}) => {

  const state = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <div className={`product-detail ${className}`}>
      <div className="my-order">
        <div className="my-order-container">
          <div className="title-container">
            <img onClick={closeCart} className="close-arrow-cart" src="https://img.icons8.com/android/24/000000/up-left-arrow.png" alt="arrow" />
            <p className="title">Shopping cart</p>
          </div>
    
          <div className="my-order-content">
            {/* {
              products.map((product, index) => {
                return <CartItem onClick={()=>removeToCart(index)} nameArticle={product.nameProduc} price={product.proce} key={index} imgArticle={'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              })
            } */}
            {/* {
              products.map((product, index) => {
                return <CartItem onClick={()=>removeToCart(product.nameProduc)} nameArticle={product.nameProduc} price={product.proce} key={index} imgArticle={'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
              })
            } */}
            {
              state.usuarios.map((usuario, index) => {
                return <CartItem onClick={()=>{console.log(`Eliminando del carrito objeto ${index}`); dispatch(removeItem(index))}} nameArticle={usuario.first_name} price={usuario.last_name} key={index} imgArticle={usuario.avatar} />
              })
            }

            <CartTotal total={'690.00'}/>

          </div>
        </div>
      </div>
      <Button buttonText={'setear nueva lista'} typeButton={'primary-button'} onClick={()=>{console.log('seteando nueva lista'); dispatch(setCartList(products))}}/>
    </div>
  );
}

// export default connect(mapCart,{removeToCart})(CartContainer);
export default (CartContainer);
