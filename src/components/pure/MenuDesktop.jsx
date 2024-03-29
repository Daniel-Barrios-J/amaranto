 //react, router
import React from 'react';
import { useNavigate } from 'react-router-dom';

//redux
import { useDispatch } from 'react-redux';
import { resetUserState } from '../../store/userState/reducer';

//styles
import '../../styles/css/components/pure/menuDesktop.css'

const MenuDesktop = ({className}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(resetUserState(true))
    alert('se ha cerrado tu sesion correctamente.')
    navigate('/')
  }

  return (
    <div className={`desktop-menu ${className}`}>
      <ul>
        <li onClick={()=>navigate('/my-orders')}>
          Mis compras
        </li>
        <li onClick={()=>navigate('/my-account')}>
          Mi cuenta
        </li>
        <li 
        onClick={ handleLogOut }
        >
          Log Out
        </li>
      </ul>
    </div>
  );
}

export default MenuDesktop;
