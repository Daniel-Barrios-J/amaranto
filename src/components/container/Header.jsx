//react, hooks, router
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//styles
import '../../styles/css/components/containers/header.css'

//components
import Menu from '../pure/Menu';
import CartContainer from './CartContainer';
import MenuDesktop from '../pure/MenuDesktop';

//redux
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const logState = useSelector(state => state.logState)

  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [menuDesktop, setMenuDesktop] = useState(true);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  
  const desplegarMenuDesktop = () => {
    setMenuDesktop(!menuDesktop)
  }
  const desplegarMenuMobile = () => {
    setMenu(!menu)
  }
  const desplegarCart = () => {
    setCart(!cart)
  }

  return (
    <nav className='header-container'>
      <div onClick={desplegarMenuMobile} className='menu'>
        <img alt="icon-menu" src="https://img.icons8.com/quill/50/000000/experimental-menu-quill.png" />
        <Menu className={menu === true ? 'menu-desplegado' : ''} />
      </div>
      <div className="navbar-left navbar">
        <img onClick={()=>navigate('/')} alt="logo" className="logo" src="https://st2.depositphotos.com/1768926/11968/v/450/depositphotos_119685590-stock-illustration-beauty-lotus-logo-template.jpg" />
        <ul>
          <li onClick={()=>navigate('/')}>Inicio</li>
          <li onClick={()=>navigate('/cotizacion-arreglos')}>Arreglos</li>
          <li onClick={()=>navigate('/cotizacion-eventos')}>Eventos</li>
        </ul>
      </div>
      <div className="navbar-right navbar">
        <ul>
          <li className="navbar-email" onClick={ logState.logged ? () => desplegarMenuDesktop() : () => navigate('/login')}>
            <img className={menuDesktop ? 'arrow-menu-desktop arrow-menu-desktop-none' : 'arrow-menu-desktop' } alt='arrow-menu-desktop' src="https://img.icons8.com/ios/50/000000/circled-chevron-right.png" />
            {
              logState.logged
              ? 
                <p>tucorreo@example.com</p>
              :
                <p onClick={()=>navigate('/login')}>Iniciar sesion</p>
            }
            {
              width > 720 && <MenuDesktop className={ menuDesktop ? 'desktop-menu-none' : ''}/> 
            }
          </li>
          <li className="navbar-shopping-cart">
            {
              logState.logged
              ? width > 720  
                ? <div>
                    <img onClick={desplegarCart} className='cart-header-desktop' alt="shopping cart" src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" />
                    <CartContainer className={cart ? 'desktop-view cart-desplegado' : 'desktop-view'} closeCart={desplegarCart} />
                  </div>
                : <img className='cart-header-desktop' onClick={()=>navigate('/cart')} src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" alt="shopping cart" />
              : <img onClick={()=>navigate('/login')} className='cart-header-desktop' src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" alt="shopping cart" />
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
