import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/css/menuDesktop.css'

const MenuDesktop = ({className}) => {
  return (
    <div className={`desktop-menu ${className}`}>
      <ul>
        <li>
          <NavLink to={'/my-orders'}>Mis compras</NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'}>Mi cuenta</NavLink>
        </li>
        <li>
          <NavLink to={'/login'}>Sign out</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuDesktop;
