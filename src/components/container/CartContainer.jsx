//react
import React from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../pure/Button';
import CartItem from '../pure/CartItem';
import CartTotal from '../pure/CartTotal';

//redux
import { removeItem } from '../../store/cartState/reducer';
import { useDispatch, useSelector } from 'react-redux';

//styles
import '../../styles/css/components/containers/cartContainer.css'

const CartContainer = ({className = '', closeCart }) => {

  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={`cart-detail ${className}`}>
      <div className="my-order">
        <div className="my-order-container">
          <div className="title-container" onClick={closeCart} >
            <img className="close-arrow-cart" src="https://img.icons8.com/android/24/000000/up-left-arrow.png" alt="arrow" />
            <p className="title">Shopping cart</p>
          </div>

          {
            !state.products.length
            ? 
              <div className='empty-cart'>
                <h3>Aun no tienes articulos...</h3>
                <img alt='' src="https://img.icons8.com/officel/80/null/buy.png"/>
                <p>Vamos a agregar algunos 😀</p>
              </div>
            :
              <div className="my-order-content">
                {
                  state.products.map((product, index) => {
                    return <CartItem 
                      onClick={()=>dispatch(removeItem(index))}
                      nameArticle={product.name}
                      price={product.price}
                      key={index}
                      imgArticle={product.imgProduct} />
                  })
                }
                <CartTotal />
              </div>
          }
        </div>
      </div>
      <Button
        buttonText={!state.products.length ? 'Ir a la tienda' : 'Proceder al pago'} 
        typeButton={'primary-button'} 
        // onClick={!state.products.length ? ()=>navigate('/') : ()=>navigate('/checkout')}
        onClick={!state.products.length ? className === 'desktop-view cart-desplegado' ? ()=>closeCart() : ()=>navigate('/') : ()=>navigate('/checkout')}
      />
    </div>
  );
}
export default (CartContainer);
