import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/css/menuDesktop.css'
import { useDispatch } from 'react-redux';
import { setLog } from '../../store/loginState/reducer';

const MenuDesktop = ({className}) => {

  const dispatch = useDispatch();

  return (
    <div className={`desktop-menu ${className}`}>
      <ul>
        <li>
          <NavLink to={'/my-orders'}>Mis compras</NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'}>Mi cuenta</NavLink>
        </li>
        <li onClick={()=>dispatch(setLog({logged: false, textLog: 'Desconectado'}))}>
          <NavLink to={'/login'}>Sign out</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuDesktop;
