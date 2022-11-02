import React from 'react';
import '../../styles/css/menu.css'
import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Menu = ({className = ''}) => {

  // const logState = useSelector(state => state.logState)
  
  return (
    <div className={`mobile-menu ${className}`}>
      <h3>Menu</h3>
      <ul className='ul-menu'>
        <li><NavLink to={'/'}>Inicio</NavLink></li>
        <li><NavLink to={'/cotizacion-arreglos'}>Arreglos</NavLink></li>
        <li><NavLink to={'/cotizacion-eventos'}>Eventos</NavLink></li>
      </ul>
      
      <ul className='ul-account'>
        <li>
          <NavLink to={'/my-orders'}>Mis compras</NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'}>Mi Cuenta</NavLink>
        </li>
      </ul>

      <ul className="ul-email">
        <li>
          <a href="/" className="correo">tucorreo@example.com</a>
        </li>
        <li>
          <a href="/" className="sign-out-menu">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
