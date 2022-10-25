import React from 'react';
import '../../styles/css/menu.css'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div class="mobile-menu">
      <h3>Menu</h3>
      <ul className='ul-menu'>
        <li><NavLink to={'/'}>Inicio</NavLink></li>
        <li><NavLink to={'/cotizacion-arreglos'}>Arreglos</NavLink></li>
        <li><NavLink to={'/cotizacion-eventos'}>Eventos</NavLink></li>
        <li><NavLink to={'/'}>Contacto</NavLink></li>
      </ul>
      
      <ul className='ul-account'>
        <li>
          <NavLink to={'/my-orders'}>Mis compras</NavLink>
        </li>
        <li>
          <NavLink to={'/my-account'}>Mi Cuenta</NavLink>
        </li>
      </ul>

      <ul class="ul-email">
        <li>
          <a href="/" class="correo">tucorreo@example.com</a>
        </li>
        <li>
          <a href="/" class="sign-out-menu">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
