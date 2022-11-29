//react, router
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

//redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setLog } from '../../store/loginState/reducer';

//styles
import '../../styles/css/components/pure/menu.css'
import { resetUserState } from '../../store/userState/reducer';

const Menu = ({className = ''}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logState = useSelector( state => state.logState);
  const user = useSelector(state => state.userState.user)
  return (
    <div className={`mobile-menu ${className}`}>
      <h3>Menu</h3>
      <ul className='ul-menu'>
        <li onClick={()=>navigate('/')}><NavLink to={'/'}>Inicio</NavLink></li>
        <li onClick={()=>navigate('/cotizacion-arreglos')}><NavLink to={'/cotizacion-arreglos'}>Arreglos</NavLink></li>
        <li onClick={()=>navigate('/cotizacion-eventos')}><NavLink to={'/cotizacion-eventos'}>Eventos</NavLink></li>
      </ul>
      
      {
        logState.logged && 
          <ul className='ul-account'>
            <li onClick={()=>navigate('/my-orders')}>Mis compras</li>
            <li onClick={()=>navigate('/my-account')}>Mi Cuenta</li>
          </ul>
      }

      <ul className="ul-email">
        {
          logState.logged &&
            <li onClick={()=>navigate('/my-account')} className="correo">{user.email}</li>
        }
        <li
          className="sign-out-menu"
          onClick={ ()=> {
              dispatch(setLog(false));
              dispatch(resetUserState(true));
              alert('Se ha cerrado tu sesion correctamente')
              navigate(logState.logged ? '/' : '/login');
            }
          }
        >
          { logState.logged ? 'Log Out' : 'Log In' }
        </li>
      </ul>
    </div>
  );
}

export default Menu;
