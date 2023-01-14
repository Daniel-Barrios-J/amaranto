//react, hooks
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../pure/Button';
import CartItem from '../pure/CartItem';
import CartTotal from '../pure/CartTotal';

//redux
import { removeItem } from '../../store/userState/reducer';
import { useDispatch, useSelector } from 'react-redux';

//styles
import '../../styles/css/components/containers/cartContainer.css'
import { manageUserData } from '../../services/manageUserData';

const CartContainer = ({className = '', closeCart }) => {

  const user = useSelector (state => state.userState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    manageUserData(user)
  }, [user]);

  const handleRemove = async (index) => {
    dispatch(removeItem(index));
  }

  return (
    <div className={`cart-detail ${className}`}>
      <div className="my-order">
        <div className="my-order-container">
          <div className="title-container" onClick={closeCart} >
            <img className="close-arrow-cart" src="https://img.icons8.com/android/24/000000/up-left-arrow.png" alt="arrow" />
            <p className="title">Shopping cart</p>
          </div>

          {
            !user.cart.length
            ? 
              <div className='empty-cart'>
                <h3>Aun no tienes articulos...</h3>
                <img alt='' src="https://img.icons8.com/officel/80/null/buy.png"/>
                <p>Vamos a agregar algunos 😀</p>
              </div>
            :
              <div className="my-order-content">
                {
                  user.cart.map((product, index) => {
                    return <CartItem 
                      onClick={()=>handleRemove(index)}
                      nameArticle={product.name}
                      price={product.price}
                      key={index}
                      imgArticle={product.images.img1} />
                  })
                }
                <CartTotal />
              </div>
          }
        </div>
      </div>
      <Button
        buttonText={!user.cart.length ? 'Ir a la tienda' : 'Proceder al pago'} 
        typeButton={'primary-button'} 
        // onClick={!state.products.length ? ()=>navigate('/') : ()=>navigate('/checkout')}
        onClick={!user.cart.length ? className === 'desktop-view cart-desplegado' ? ()=>closeCart() : ()=>navigate('/') : ()=>navigate('/checkout')}
      />
    </div>
  );
}
export default (CartContainer);
