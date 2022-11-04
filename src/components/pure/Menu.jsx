import React from 'react';
import '../../styles/css/menu.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLog } from '../../store/loginState/reducer';

const Menu = ({className = ''}) => {

  const dispatch = useDispatch()
  const logState = useSelector( state => state.logState)

  return (
    <div className={`mobile-menu ${className}`}>
      <h3>Menu</h3>
      <ul className='ul-menu'>
        <li><NavLink to={'/'}>Inicio</NavLink></li>
        <li><NavLink to={'/cotizacion-arreglos'}>Arreglos</NavLink></li>
        <li><NavLink to={'/cotizacion-eventos'}>Eventos</NavLink></li>
      </ul>
      
      {
        logState.logged && 
          <ul className='ul-account'>
            <li>
              <NavLink to={'/my-orders'}>Mis compras</NavLink>
            </li>
            <li>
              <NavLink to={'/my-account'}>Mi Cuenta</NavLink>
            </li>
          </ul>
      }

      <ul className="ul-email">
        {
          logState.logged &&
            <li>
              <NavLink to={'/my-account'} className="correo">tucorreo@example.com</NavLink>
            </li>
        }
        <li>
          <NavLink onClick={()=>dispatch(setLog({logged: false, textLog: 'Desconectado'}))} to={logState.logged ? '/' : '/login'} className="sign-out-menu">{ logState.logged ? 'Log Out' : 'Log In' }</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
