import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/menuDesktop.css'
import { useDispatch } from 'react-redux';
import { setLog } from '../../store/loginState/reducer';

const MenuDesktop = ({className}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={`desktop-menu ${className}`}>
      <ul>
        <li onClick={()=>navigate('/my-orders')}>
          Mis compras
        </li>
        <li onClick={()=>navigate('/my-account')}>
          Mi cuenta
        </li>
        <li onClick={ () => {dispatch(setLog({logged: false, textLog: 'Desconectado'})); navigate('/'); } }>
          Log Out
        </li>
      </ul>
    </div>
  );
}

export default MenuDesktop;
