import React from 'react';
import '../../styles/css/menu.css'

const Menu = () => {
  return (
    <div class="mobile-menu">
      <h3>Menu</h3>
      <ul class="ul-menu">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/">Arreglos</a>
        </li>
        <li>
          <a href="/">Cotiza tu evento</a>
        </li>
        <li>
          <a href="/">Arreglos personalizados</a>
        </li>
      </ul>
      
      <ul className='ul-account'>
        <li>
          <a href="/">Mis compras</a>
        </li>
        <li>
          <a href="/">Mi Cuenta</a>
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
