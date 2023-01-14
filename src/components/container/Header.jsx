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

  const userState = useSelector(state => state.userState.user)

  const [menu, setMenu] = useState(false);
  const [cartRender, setCartRender] = useState(false);
  const [cartStyles, setCartStyles] = useState(false);
  const [menuDesktopRender, setMenuDesktopRender] = useState(false);
  const [menuDesktopStyles, setMenuDesktopStyles] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  
  const desplegarMenuDesktop = () => {
    setMenuDesktopRender(!menuDesktopRender)
    setTimeout(()=>{
      setMenuDesktopStyles(!menuDesktopStyles)
    },10)
  }
  const desplegarCart = () => {
    setCartRender(!cartRender)
    setTimeout(()=>{
      setCartStyles(!cartStyles)
    },10)
  }
  const desplegarMenuMobile = () => {
    setMenu(!menu)
  }

  return (
    <nav className='header-container'>
      <div onClick={desplegarMenuMobile} className='menu'>
        <img alt="icon-menu" src="https://img.icons8.com/plasticine/100/null/menu.png" />
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
          <li className="navbar-email" onClick={ userState.logged ? () => desplegarMenuDesktop() : () => navigate('/login')}>
            <img className={!menuDesktopRender ? 'arrow-menu-desktop arrow-menu-desktop-none' : 'arrow-menu-desktop' } alt='arrow-menu-desktop' src="https://img.icons8.com/ios/50/000000/circled-chevron-right.png" />
            {
              userState.logged
              ? 
                <p>{userState.email}</p>
              :
                <p onClick={()=>navigate('/login')}>Iniciar sesion</p>
            }
            {
              menuDesktopRender && <MenuDesktop className={ !menuDesktopStyles ? 'desktop-menu-none' : ''}/> 
              // width > 720 && <MenuDesktop className={ menuDesktop ? 'desktop-menu-none' : ''}/> 
            }
          </li>
          <li className="navbar-shopping-cart">
            {
              userState.logged
              ? width > 720  
                ? <div>
                    <img onClick={desplegarCart} className='cart-header' alt="shopping cart" src="https://img.icons8.com/office/40/null/shopping-cart-loaded--v1.png" />
                    {
                      cartRender && <CartContainer className={cartStyles ? 'desktop-view cart-desplegado' : 'desktop-view'} closeCart={desplegarCart} />
                    }
                  </div>
                : <img className='cart-header' onClick={()=>navigate('/cart')} src="https://img.icons8.com/office/40/null/shopping-cart-loaded--v1.png" alt="shopping cart" />
              : <img onClick={()=>navigate('/login')} className='cart-header' src="https://img.icons8.com/office/40/null/shopping-cart-loaded--v1.png" alt="shopping cart" />
            }
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
