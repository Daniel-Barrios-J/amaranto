import React, { useEffect, useState } from 'react';
import '../../styles/css/header.css'
import { NavLink, useNavigate } from 'react-router-dom';
import Menu from '../pure/Menu';
import CartContainer from './CartContainer';
import MenuDesktop from '../pure/MenuDesktop';
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
  const desplegarMenu = () => {
    setMenu(!menu)
  }
  const desplegarCart = () => {
    setCart(!cart)
  }

  return (
    <nav className='header-container'>
      <div onClick={desplegarMenu} className='menu'>
        <img src="https://img.icons8.com/quill/50/000000/experimental-menu-quill.png" alt="icon-menu"/>
        <Menu className={menu === true ? 'menu-desplegado' : ''} />
      </div>
      <div className="navbar-left navbar">
        <NavLink to={'/'}>
          <img src="https://scontent.fmex7-1.fna.fbcdn.net/v/t39.30808-6/281026779_112067488168572_2137207060159041813_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEeh_fkyhwhiuveIeaZ8Tkw_r1q36oWOev-vWrfqhY565i51wZteOliP0eqcMuyAQxlkkX8apbiVANxYTVclPuT&_nc_ohc=SSF47Eih7FQAX9KRJ5B&_nc_ht=scontent.fmex7-1.fna&oh=00_AfAnwyWVyZKRx3yiSdnUeu0AECSkFvt40SXL4ozoOQjqYA&oe=63653E37" alt="logo" className="logo" />
        </NavLink>
        <ul>
          <li><NavLink to={'/'}>Inicio</NavLink></li>
          <li><NavLink to={'/cotizacion-arreglos'}>Arreglos</NavLink></li>
          <li><NavLink to={'/cotizacion-eventos'}>Eventos</NavLink></li>
        </ul>
      </div>

      <div className="navbar-right navbar">
        <ul>
          <li className="navbar-email" onClick={ logState.logged ? () => desplegarMenuDesktop() : () => navigate('/login')}>
            <img className={menuDesktop ? 'arrow-menu-desktop arrow-menu-desktop-none' : 'arrow-menu-desktop' } alt='arrow-menu-desktop' src="https://img.icons8.com/ios/50/000000/circled-chevron-right.png" />
            {
              logState.logged
              ? 
                <p>tucorreo@host.com</p>
              :
                <NavLink to={'/login'}>
                  <p>Iniciar sesion</p>
                </NavLink>
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
                    <CartContainer className={cart === true ? 'desktop-view cart-desplegado' : 'desktop-view'} closeCart={desplegarCart} />
                  </div>
                : <NavLink to={'/cart'}>
                    <img className='cart-header-desktop' src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" alt="shopping cart" />
                  </NavLink>
              : <NavLink to={'/login'}>
                  <img className='cart-header-desktop' src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v1.png" alt="shopping cart" />
                </NavLink>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
