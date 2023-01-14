//react, hooks, router
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//components
import Button from '../pure/Button';
import ResumeOrder from '../pure/ResumeOrder';
import MethodPayment from '../pure/MethodPayment';

//redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

//dispatchers
import { setNewOrder } from '../../store/userState/reducer';
import { resetCart } from '../../store/userState/reducer';

//styles
import '../../styles/css/components/containers/checkOutContainer.css'
import { manageUserData } from '../../services/manageUserData';


const CheckOutContainer = () => {

  //global state
  const user = useSelector(state => state.userState.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //local state
  const initialPurchase = {render: false, style: false}
  const [purchase, setPurchase] = useState(initialPurchase);

  //--
  const handleOrder = ()=> {
    setPurchase({render:true, style:false})
    setTimeout(()=>{
      setPurchase({render:true, style:true});
      dispatch(setNewOrder(user.cart))
      setTimeout(()=>{
        setPurchase(initialPurchase);
        dispatch(resetCart());
        navigate('/my-orders')
      },3000)
    }, 100)
  }

  useEffect(() => {
    manageUserData(user)
  }, [user]);

  //--
  return (
    <div className='check-out-container'>
      {
        purchase.render &&
          <div className={`purchase-screen ${purchase.style ? 'processing' : ''}`}>
            <p>Realizando compra...</p>
          </div>
      }
      <h2>Resumen de orden</h2>
      <ResumeOrder order={user.cart} />
      <div className='method-payment-container'>
        <MethodPayment onClick={()=>handleOrder()} />
        <MethodPayment onClick={()=>handleOrder()} img='https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp'/>
        <MethodPayment onClick={()=>handleOrder()} img='https://juridicomartinez.com/images/icono-efectivo.png' />
      </div>
        <p className='text'>¿Quieres añadir más artículos?</p>
        <Button buttonText={'Ir a la tienda'} typeButton={'secondary-button'} onClick={()=>navigate('/')}/>
    </div>
  );
}

export default CheckOutContainer;
