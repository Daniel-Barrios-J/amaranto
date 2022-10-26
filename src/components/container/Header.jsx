import React, { useEffect, useState } from 'react';
import '../../styles/css/header.css'
import { NavLink } from 'react-router-dom';
import Menu from '../pure/Menu';
import CartContainer from './CartContainer';

const Header = () => {

  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);


  const desplegarMenu = () => {
    setMenu(!menu)
  }
  const desplegarCart = () => {
    setCart(!cart)
  }

  return (
    <nav className='header-container'>
      <div className={menu === true ? 'menu menu-desplegado' : 'menu'} onClick={desplegarMenu}>
        <img src="https://img.icons8.com/quill/50/000000/experimental-menu-quill.png" alt="icon-menu"/>
        <Menu />
      </div>
      <div class="navbar-left navbar">
        <NavLink to={'/'}>
          <img src="https://scontent.fmex7-1.fna.fbcdn.net/v/t39.30808-6/280951877_112559854786002_6645048926993550950_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEXMDOvOHKjv7L5sIaLZfUl5KsPiLZKYb_kqw-ItkphvwKFrGU4OoOoHzlz9rgdwAZywN7JQ2Eg0PaRPP1111K-&_nc_ohc=VGePVZ4GfhsAX854UwL&_nc_ht=scontent.fmex7-1.fna&oh=00_AT_efgiVyGOXkPcIMJ_4B4FY1mDUhnmm9LcsJe55yKXLUg&oe=635C6664" alt="logo" class="logo" />
        </NavLink>
        <ul>
          <li><NavLink to={'/'}>Inicio</NavLink></li>
          <li><NavLink to={'/cotizacion-arreglos'}>Arreglos</NavLink></li>
          <li><NavLink to={'/cotizacion-eventos'}>Eventos</NavLink></li>
          <li><NavLink to={'/'}>Contacto</NavLink></li>
        </ul>
      </div>

      <div class="navbar-right navbar">
        <ul>
          <li class="navbar-email">
            tucorreo@host.com
          </li>
          <li class="navbar-shopping-cart">
            {
              width > 720
              ? <div 
                  className={
                    cart === true
                    ? 'cart cart-desplegado'
                    : 'cart'}
                  onClick={desplegarCart}
                >
                  <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" alt="shopping cart" />
                  <CartContainer />
                </div>
              : <NavLink to={'/cart'}>
                  <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" alt="shopping cart" />
                </NavLink>

            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
